import { consoles } from "./test.mjs";
import { goods } from "./db.mjs";


const wrapperNode = document.querySelector(".wrapper");
const inputNode = document.querySelector(".header__input");

const createCards = ({ title, price, img }) => {
  const articleNode = document.createElement("article");
  articleNode.className = "article";
  articleNode.innerHTML = `<div class="article__wrap-img"><img
                class="article__img"
                src=${img}
                alt="#"
              /></div>
              <div class="article__info">
                <h3 class="article__price">${price} ₽</h3>
                <p class="article__text">${title}
                </p>
                <button class="article__btn">В корзину</button>
              </div>`;

  return articleNode;
};

const renderCards = (consoles) => {
  wrapperNode.innerHTML = "";
  consoles.forEach((element) => {
    wrapperNode.append(createCards(element));
  });
};

inputNode.addEventListener("input", (e) => {
  const value = e.target.value;
  const filterCard = goods.filter(({ title }) =>
    title.toLowerCase().includes(value.toLowerCase())
  );
  renderCards(filterCard);
});

renderCards(goods);
