// ------------------------------------------------------#1-----------
const listRef = document.querySelectorAll('.item');
console.log(`В списке ${listRef.length} категории`);
listRef.forEach(el =>
  console.log(
    `Категория: ${el.firstElementChild.textContent}
    Количество элементов: ${el.lastElementChild.children.length}`,
  ),
);
// ------------------------------------------------------#2-----------
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
let listIngredients = document.querySelector('ul#ingredients');
console.log(listIngredients);

let addItemIngredient = ingredient => {
  let item = document.createElement('li');
  item.textContent = ingredient;
  return item;
};
const items = ingredients.map(ingredient => addItemIngredient(ingredient));
listIngredients.append(...items);

// ------------------------------------------------------#3-----------

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listGallery = document.querySelector('#gallery');
console.log(listGallery);

let addItem = (elSrc, elAlt) => {
  listGallery.insertAdjacentHTML(
    'beforeend',
    `<li><img src="${elSrc}" alt="${elAlt}" width = '300'></li>`,
  );
};
images.map(obj => addItem(obj.url, obj.alt));

// ------------------------------------------------------#4-----------

let counterValue = document.querySelector('#value');
let increment = document.querySelector('button[data-action="increment"]');
let decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener('click', () => {
  counterValue.textContent =
    Number(counterValue.textContent) + Number(increment.textContent);
});
decrement.addEventListener('click', () => {
  counterValue.textContent =
    Number(counterValue.textContent) + Number(decrement.textContent);
});
// ------------------------------------------------------#5-----------

let inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');
const textOutput = outputRef.textContent;

inputRef.addEventListener('input', event => {
  event.target.value.length > 0
    ? (outputRef.textContent = event.target.value)
    : (outputRef.textContent = textOutput);
});
// ------------------------------------------------------#6-----------

let inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('change', event => {
  if (event.target.value.length >= 6) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  } else inputValid.classList.add('invalid');
});

// ------------------------------------------------------#7-----------

let inputSize = document.querySelector('input#font-size-control');
let textSize = document.querySelector('span#text');

let addTextSize = value => {
  textSize.style.fontSize = `${value}px`;
};
inputSize.addEventListener('input', event => addTextSize(event.target.value));
// ------------------------------------------------------#8-----------
