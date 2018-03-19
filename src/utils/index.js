/* eslint-disable import/prefer-default-export, no-param-reassign */

export const numberWithSpaces = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export function addClassToElement(el, className) {
  if (el.classList) el.classList.add(className);
  else el.className += ` ${className}`;
}

export function removeClassFromElement(el, className) {
  if (el.classList) el.classList.remove(className);
  else {
    el.className = el.className.replace(
      new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
      ' ',
    );
  }
}
