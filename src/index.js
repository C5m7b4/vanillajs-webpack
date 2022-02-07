console.log('you are ready to start coding...');
import { data } from './data';
import { isValid } from './utils';
import './styles.css';

let filteredData = data;

const state = {
  items: data,
  currentItem: {
    name: '',
    size: '',
    price: 0,
    category: '',
  },
};

const changeState = (identifier) => {
  const { id, value } = identifier.target;
  if (!isValid(value) || !isValid(id)) return;

  setValue(id, value);

  return {
    ...state,
    currentItem: {
      ...(state.currentItem[id] = value),
    },
  };
};

const setValue = (identifier, value) => {
  if (isValid(value)) {
    document.getElementById(identifier).value = value;
  }
};

const inputs = document.getElementsByTagName('input');
for (let input of inputs) {
  input.addEventListener('change', changeState);
}

// now we need to build a table for our products
const buildTable = () => {
  let html = `<table style="width: 90%; margin: 20px auto; cell-padding: 2px; color: #000"><tr><th>Products</th><th<Size</th><th>Price</th><th>Category</th><th>Delete<th></tr>`;
  filteredData.map((item) => {
    const { name, id, size, price, category } = item;
    html += `<tr><td>${name}</td><td>${size}</td><td>${price}</td><td>${category}</td><td style="cursor:pointer" onClick=deleteItem(${id})>Delete</td></tr>`;
  });
  html += '</table';
  document.getElementById('items').innerHTML = html;
};

buildTable();
