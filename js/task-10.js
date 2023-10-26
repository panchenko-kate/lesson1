// Напиши скрипт створення і очищення колекції елементів. Користувач вводить 
// кількість елементів в input і натискає кнопку Створити, після чого рендериться 
// колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй 
// готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб 
// видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesGallery = document.querySelector('#boxes');

boxesGallery.style.display = 'flex';
boxesGallery.style.flexWrap = 'wrap';
boxesGallery.style.marginTop = '30px';

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
  inputEl.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];

  for (let i = 0; i <= amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  boxesGallery.insertAdjacentHTML('beforeend', boxesArr.join(''));
};

function destroyBoxes () {
  boxesGallery.innerHTML = '';
}