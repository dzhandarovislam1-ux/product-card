// (1)Создание объекта на основе моих данных

const person = {
  name: "Ислам",
  surname: "Джандаров",
  email: "dzand8939@gmail.com",
  work: "нет работы",
  age: 18,
  country: "Египет",
  city: "Каир",
};

console.log(person);

// (2) Данные автомобиля

const car = {
  brand: "Toyota",
  model: "Camry 80",
  year: 2025,
  color: "черный",
  box: "автоматическая",
};

car.owner = person;

console.log(car);

// (4)Написать функцию принимающую объект

car["максимальная скорость"] = 250;

function checkSpeed(car) {
  if (!("максимальная скорость" in car)) {
    car["максимальная скорость"] = 250;
  }
}

// (5)Написать функцию котороя получает объект и свойство объекта

function showProperty(object, property) {
  console.log(object[property]);
}

showProperty(car, "brand");
showProperty(car, "model");
showProperty(car, "color");
showProperty(car, "year");

// (6)Создать массив в котором есть названия продуктов

const products = ["Хлеб", "Молоко", "Сыр", "Яблоки", "Шоколад"];

console.log(products);

// (7)Создание массива состоящего из объектов

const books = [
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "чепный",
    genre: "роман",
  },

  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "красный",
    genre: "антиутопия",
  },

  {
    title: "Гарри Поттер",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "синий",
    genre: "фэнтези",
  },
];

books.push({
  title: "Властелин колец",
  author: "Джон Толкин",
  year: 1954,
  coverColor: "зеленый",
  genre: "фэнтези",
});

console.log(books);

// (8)Создать еще массив состоящий из тех же книг

const wizardBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "красный",
    genre: "фэнтези",
  },

  {
    title: "Гарри Поттер и тайная комната",
    author: "Джоан Роулинг",
    year: 1998,
    coverColor: "синий",
    genre: "фэнтези",
  },
];

const allBooks = books.concat(wizardBooks);

console.log(allBooks);

// (9)Принимает массив сущностей задания 8

function checkRareBooks(books) {
  return books.map(function (book) {
    if (book.year > 2000) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }

    return book;
  });
}

const result = checkRareBooks(allBooks);

console.log(result);
