import { consoles } from "./test.js";
import { goods } from "./db.js";
// import { goods } from "./src/app/db.mjs";

console.log(consoles);
console.log(goods);

// const consoles = [
//   {
//     name: "Игровая приставка Sony PlayStation 4 Pro",
//     price: 33990,
//     img: "./src/image/span.card-img-top.jpeg",
//   },
//   {
//     name: "Игровая приставка Sony PlayStation 3 Super Slim",
//     price: 16499,
//     img: "./src/image/Ps3.jpeg",
//   },
//   {
//     name: "Игровая приставка Xbox One X",
//     price: 39990,
//     img: "./src/image/XboxOneX.jpeg",
//   },

//   {
//     name: "Игровая приставка Nintendo Switch",
//     price: 24751,
//     img: "./src/image/nintendo.jpeg",
//   },
//   {
//     name: "Игровая приставка Sega Retro Genesis HD",
//     price: 3624,
//     img: "./src/image/sega.jpeg",
//   },
//   {
//     name: "Игровая приставка Dendy Junior",
//     price: 1551,
//     img: "./src/image/dendy.jpeg",
//   },
//   {
//     name: "Игровая приставка Sony PlayStation Classic",
//     price: 10445,
//     img: "./src/image/psClassic.jpeg",
//   },
//   {
//     name: "Игровая приставка Xbox One S ",
//     price: 23411,
//     img: "./src/image/XboxOneS.jpeg",
//   },
// ];

const wrapperNode = document.querySelector(".wrapper");

const createCards = ({ name, price, img }) => {
  const articleNode = document.createElement("article");
  articleNode.className = "article";
  articleNode.innerHTML = `<img
                class="article__img"
                src=${img}
                alt="#"
              />
              <div class="article__info">
                <h3 class="article__price">${price}</h3>
                <p class="article__text">${name}
                </p>
                <button class="article__btn">В корзину</button>
              </div>`;

  return articleNode;
};

const renderCards = (consoles) => {
  consoles.forEach((element) => {
    wrapperNode.append(createCards(element));
  });
};

renderCards(consoles);
