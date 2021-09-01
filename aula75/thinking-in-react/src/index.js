import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  FilterableProductTable  from './App';
import  PRODUCTS  from './App';

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);