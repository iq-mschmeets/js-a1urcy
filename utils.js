function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}

function createElement(tag, attrs, option) {
  var node = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (key) {
      if (key == 'text') {
        node.appendChild(document.createTextNode(attrs[key]));
      } else {
        node.setAttribute(key, attrs[key]);
      }
    });
  }
  if (typeof option == 'string') {
    node.appendChild(document.createTextNode(option));
  } else if (Array.isArray(option)) {
    option.forEach(function (item) {
      node.appendChild(item);
    });
  } else if (isElement(option)) {
    option.appendChild(node);
  }
  return node;
}
export { createElement };
