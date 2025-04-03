import { renderHeader } from './header.html';
import { renderFooter } from './footer.html';

const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

if (headerElement) {
  headerElement.outerHTML = renderHeader();
}

if (footerElement) {
  footerElement.outerHTML = renderFooter();
}
