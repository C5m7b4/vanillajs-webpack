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
