import { consoles } from "./test.mjs";
import { goods } from "./db.mjs";

// console.log(consoles);

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
console.log(goods);
