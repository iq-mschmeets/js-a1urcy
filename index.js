// Import stylesheets
import './style.css';
import { createElement } from './utils.js';
// import IQBinaryAttribute from './IQBinaryAttribute.js';

class IQBinaryAttribute extends HTMLElement {
  static get formAssociated() {
    return true;
  }
  constructor() {
    super();
    this.internals = this.attachInternals();
    this.value_ = null;
    this._rendered = false;
    console.log('%s', this.tagName);
    this.onFileInputChange = this.onFileInputChange.bind(this);
    this._dragOver = this._dragOver.bind(this);
    this._dragEnter = this._dragEnter.bind(this);
    this._dragLeave = this._dragLeave.bind(this);
    this._drop = this._drop.bind(this);
  }
  addEventListeners(yesno) {
    if (yesno) {
      this._fileInput.addEventListener('change', this.onFileInputChange);
      this.addEventListener('dragover', this._dragOver);
      this.addEventListener('dragenter', this._dragEnter);
      this.addEventListener('dragleave', this._dragLeave);
      this.addEventListener('drop', this._drop);
    } else {
      this._fileInput.removeEventListener('change', this.onFileInputChange);
    }
  }
  connectedCallback() {
    console.log('%s.connectedCallback', this.tagName);
    this.render();
  }
  disconnectedCallback() {
    console.log('%s.disconnectedCallback', this.tagName);
    // this.innerHTML = '';
    // this._rendered = false;
  }
  formAssociatedCallback(form) {
    console.log('%s.formAssociatedCallback form:%o', this.tagName, form);
  }
  formResetCallback() {}
  onFileInputChange(evt) {
    this.internals.setFormValue(evt.target.files[0]);
    console.log('%s.onFileInputChange %o ', this.tagName, evt.target.files);
  }
  _dragEnter(evt) {
    evt.preventDefault();
    this.classList.add('dragover');
  }
  _dragLeave(evt) {
    this.classList.remove('dragover');
  }
  _dragOver(evt) {
    evt.preventDefault();
  }
  _drop(evt) {
    console.log('%s._drop', this.tagName, evt);
    evt.preventDefault();
    this.classList.remove('dragover');
    const dataTransfer = evt.dataTransfer;
    if (dataTransfer.items) {
      for (var i = 0; i < dataTransfer.items.length; ++i) {
        if (dataTransfer.items[i].kind == 'file') {
          var f = dataTransfer.items[i].getAsFile();
          console.log('%s._drop setFormValue %o', this.tagName, f);
          this.internals.setFormValue(f);
        }
      }
    }
  }
  render() {
    if (!this._rendered) {
      this._fileInput = createElement('input', {
        type: 'file',
        name: 'iqbinary',
        id: 'iqbinary',
      });

      this._label = createElement(
        'label',
        {
          for: 'iqbinary',
          style: 'display:block;',
        },
        this.getAttribute('label')
      );
      this.appendChild(this._label);
      this.appendChild(this._fileInput);
      this._rendered = true;
      this.addEventListeners(true);
    }
  }
}

if (window.customElements.get('iq-binary-attribute') === undefined) {
  window.customElements.define('iq-binary-attribute', IQBinaryAttribute);
}

// Write Javascript code!
const appDiv = document.getElementById('app');

const actButton = document.getElementById('act-button');
actButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const form = document.getElementsByTagName('form')[0];

  const fData = new FormData(form);
  fData.forEach((item) => {
    console.log(item);
  });
});
