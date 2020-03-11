import React, { Component } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

class CreateData extends Component {

  // establesco estado de la aplicacion
  state = {
    // almaceno arreglo
    items: [],
    title: '',
    content: '',
    image: '',
    edit: false,
    _id: '',

  };

  url_base = 'http://localhost:4000/item/';

  async componentDidMount() {

    // if update
    if (this.props.match.params.id) {
      const res = await axios.get(this.url_base + this.props.match.params.id);

      this.setState({
        title: res.data.itemName,
        content: res.data.itemDesc,
        image: res.data.itemImgURL,
        edit: true,
        _id: this.props.match.params.id,
      });

    }
  }

  //Submnit
  onSubmit = async (e) => {
    e.preventDefault();

    // Defino obj para el back-end
    const setData = {
      itemName: this.state.title,
      itemDesc: this.state.content,
      itemImgURL: this.state.image,
    };

    if (this.state.edit) {
      console.log('editando');
      await axios.put(`${this.url_base}update?itemID=` + this.state._id, setData);
    } else {
      await axios.post(`${this.url_base}create`, setData);
    }

    // Devuelvo al inicio
    window.location.href = '/';
  };


  onInputChange = e => {
    //console.log(e.target.name, e.target.value) // muestro cada tipeo por consola
    this.setState({
      [e.target.name]: e.target.value,             // actualiza un dato dependiendo del name
    });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <h4>Create Item</h4>

        {/* SELECT */}
        <div className="form-group">
          <input
            onChange={this.onInputChange}
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={this.state.title}
            required/>
        </div>
        <div className="form-group">
          <input
            onChange={this.onInputChange}
            type="text"
            className="form-control"
            placeholder="URL Image"
            name="image"
            value={this.state.image}
            required/>
        </div>
        <div className="form-group">
          <textarea
            onChange={this.onInputChange}
            className="form-control"
            name="content"
            placeholder="Content"
            value={this.state.content}
            required/>
        </div>

        <form onSubmit={this.onSubmit}>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>

    );
  }
}

export default CreateData;
