import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateData extends Component {

  // establesco estado de la aplicacion
  state = {
    // almaceno arreglo
    items: [],
    date: new Date(),
    title: '',
    content: '',

  };


  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/item');
    this.setState({ items: res.data });
    //console.log(res.data);
  }

  //Submnit
  onSubmit = async (e) => {
    e.preventDefault();

    // Envio al servidor
    const setData = {
      itemName: this.state.title,
      itemDesc: this.state.content,
      createdAt: this.state.date,
    };
    //console.log(setData);
    const res = await axios.post('http://localhost:4000/item/create', setData);
    console.log(res);
    //console.log(this.state.title, this.state.content);

  };

  // Cambio fecha
  oncChangeDate = date => {
    this.setState({ date });
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
        <h4>CrearItem</h4>

        {/* SELECT */}
        <div className="form-group">
          <input onChange={this.onInputChange} type="text" className="form-control" placeholder="Title" name="title"
                 required/>
        </div>
        <div className="form-group">
          <textarea onChange={this.onInputChange} className="form-control" name="content" placeholder="Content"
                    required/>
        </div>
        <div className="form-group">
          <DatePicker onChange={this.oncChangeDate} className="form-control" selected={this.state.date}/>
        </div>


        <form onSubmit={this.onSubmit}>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>

    );
  }
}

