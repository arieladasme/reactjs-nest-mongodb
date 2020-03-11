import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class List extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getData();
  }

  // Get
  async getData() {
    const res = await axios.get('http://localhost:4000/item');
    this.setState({ items: res.data });
  }

  // delete
  deleteData = async (id) => {
    await axios.delete('http://localhost:4000/item/delete?itemID=' + id);
    this.getData();
    console.log(id);
  }


  render() {
    return (
      <div className="row">
        {
          this.state.items.map(item => (
            <div className="col-md-4 p-2" key={item._id}>
              <div className="card">
                <div className="card-header">
                  <img className="card-img" src={item.itemImgURL}/>


                </div>
                <div className="card-body">
                  <h5>{item.itemName}</h5>
                  <p>{item.itemDesc}</p>
                  <p>{moment(item.createdAt).format("MMM Do YY")}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => this.deleteData(item._id)}>
                    Delete
                  </button>
                  <Link className="btn btn-secondary" to={"/update/" + item._id}> Edit </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
