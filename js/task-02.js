const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');

const makeListItem = ingredientName => {
  const itemEL = document.createElement('li');
  itemEL.textContent = ingredientName;
  itemEL.classList.add('item');
  return itemEL;
};
const listItemArr = ingredients.map(el => makeListItem(el));
listEl.append(...listItemArr);
console.log(listEl);
