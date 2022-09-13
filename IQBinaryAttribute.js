class IQBinaryAttribute extends HTMLElement {
  constructor() {
    super();
    this.internals = this.attachInternals();
  }
  static get formAssociated() {
    return true;
  }
  addEventListeners(yesno) {
    if (yesno) {
    } else {
    }
  }
  connectedCallback() {}
  disconnectedCallback() {}
}

if (window.customElements.get('iq-binary-attribute') === undefined) {
  window.customElements.define('iq-binary-attribute', IQBinaryAttribute);
}

export { IQBinaryAttribute };
