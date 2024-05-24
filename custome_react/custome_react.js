function customeRender(reactElement, container) { 
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // domElement.setAttribute('href', reactElement.props.href);
  // domElement.setAttribute('target', reactElement.props.target);

  for (let prop in reactElement.props) { 
    if (prop === 'childern') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
  }

  container.appendChild(domElement)
}


const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: '_blank',
  },
  children: 'Click me to visit Google.com'
}


const mainContainer = document.querySelector('#root')
customeRender(reactElement, mainContainer)
