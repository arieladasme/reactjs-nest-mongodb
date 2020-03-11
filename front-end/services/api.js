import axios from 'axios';


const url_base = "http://localhost:3500/item";


 async (url, method, data) => {
    axios.this.method('http://localhost:4000/item/create', setData);
 };


export const get = () => {
  console.log("READ");
   const method  = 'get';
   return method;

};



export const create = data => {
  return request('POST', data);
};


export const update = ({data, id}) => {
  return request(`${id}`, 'POST', data);
};

export const remove = id => {
  return request(`${id}`, 'DELETE');
};
