import { comments } from "./comments.js";

console.log(comments);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter((number) => number >= 5);

console.log(numbersFromFive);

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

const bookExits = books.includes("Колобок");

console.log(bookExits);

function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(numbersFromFive));
console.log(reverseArray(books));

const comComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(comComments);

comments.forEach((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
});

console.log(comments);

const users = comments.map((comment) => ({
  id: comment.id,
  name: comment,
  name,
}));

console.log(users);

comments.forEach((comment) => {
  if (comment.body.length > 180) {
    comment.isInvalid = true;
  } else {
    comment.isInvalid = false;
  }
});

console.log(comments);

const emailsMap = comments.map(comment => comment.email);

console.log(emailsMap);

const emails = comments.map((comment) => comment.email);

const emailString = emails.toString();

console.log(emailString);