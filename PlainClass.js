class PlainClass extends HTMLElement {
  constructor() {
    super();
    this._name = 'Plain Class';
  }
  get name() {
    return this._name;
  }
}

if (window.customElements.get('iq-plain-class') === undefined) {
  window.customElements.define('iq-plain-class', PlainClass);
}
