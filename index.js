// Import stylesheets
import './style.css';
import createDomNode from './utils.js';
import IQBinaryAttribute from './IQBinaryAttribute.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Binary Attribute</h1>`;

const binAttr = new IQBinaryAttribute();

const form = createDomNode(
  'form',
  {
    method: 'POST',
    enctype: 'mutipart/form-data',
    action: '../request/elementForm',
  },
  [
    createDomNode('input', {
      type: 'text',
      name: 'txt',
    }),
    binAttr,
  ]
);

appDiv.appendChild(form);
