import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Index from '../components/ItemData';


export default class List extends Component {


  constructor() {
    super();
    this.state = {
      items: [],
    };

    //Binding
    this.deleteData = this.deleteData.bind(this);
  }

  url_base = 'http://localhost:4000/item/';

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getData().then(function(value) {
      console.log(value);
    }, function(reason) {
      console.log(reason);
    });
  };

  // Get
  async getData() {
    const res = await axios.get(this.url_base);
    this.setState({ items: res.data });
  };

// delete
  deleteData = async (id) => {
    await axios.delete(`${this.url_base}delete?itemID=` + id);
    this.getData();
    //console.log(id);
  };


  render() {
    return (
      <div className="row container-sm offset-md-2">
        {
          this.state.items.map(item =>

            <Index
              title={item.itemName}
              desc={item.itemDesc}
              key={item._id}
              id={item._id}
              img={item.itemImgURL}
              date={item.createdAd}
              url={this.url_base}
              deleteData={this.deleteData}
            />,
          )
        }
      </div>
    );
  }
}
