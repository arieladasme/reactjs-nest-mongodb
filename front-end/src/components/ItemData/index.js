import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ItemData = ({ title, img, date, id, deleteData, desc }) => {

  return (
    <div className="col-md-3 p-3">
      <div className="card">
        <div className="card-header">
          <img className="card-img" src={img}/>
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p>{desc}</p>
          <p>{moment(date).format('MMM Do YY')}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-danger" onClick={() => deleteData(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );


};


export default ItemData;
