const portfolioArr = [
  {
    href: "#popup1",
    img: "/img/weading_1.png",
    title: "Весільна фотосесія",
    desc:
      "Це тільки підготовка і очікування церемонії здається нескінченно довгими, а сама церемонія проходить за лічені хвилини. Але ці хвилини одні з найважливіших у Вашому житті і звичайно ж про них повинна залишитися приємна пам’ять.",
  },
  {
    href: "#popup1",
    img: "/img/persons-731514_1920 1.png",
    title: "Сімейна фотосесія",
    desc:
      "З часом все змінюється, діти дорослішають і покидають сімейний затишок, а фото завжди допоможуть вам згадати та повернутися в ті щасливі хвилини сімейного дозвілля.",
  },
  {
    href: "#popup1",
    img: "/img/mothers-3389671_1920 1.png",
    title: "Дитяча фотосесія",
    desc:
      "Дитина - найважливіша і найдорожча людина для своїх батьків. Діти ростуть, змінюються, набувають все нові особливості. Встежити за всіма цими змінами і зберегти пам'ять про них допомагають фотографії.",
  },
  {
    href: "#popup1",
    img: "/img/wreath-842237_1920 1.png",
    title: "Індивідуальна фотосесія",
    desc:
      "Індивідуальна фотосесія - це можливість висловити себе, продемонструвати оточуючим свою унікальність, побачити себе в зовсім іншому образі.",
  },
   {
    href: "#popup1",
    img: "/img/image 2.png",
    title: "Фотосесія в студії",
    desc:
      "Фотосесія в студії хороша для серйозних постановочних робіт для портфоліо моделей, або для певних стилів зйомки. Величезний вибір реквізиту – різноманітні фони, різні види світла і багато інших приємних дрібниці...",
  },
];
const createPortfolio = (arr, show) => {
  return arr
    .slice(0, show)
    .map(
      (item) => `
    <li class="portfolio_card flexbox" data-modal="JS_MODAL__OPEN">
        <a href="${item.href}" class="link portfolio-link">
            <div class="portfolio_card__photo">
                <img src="${item.img}" alt="Весільна фотосесія" width="463" height="320px">
            </div>
            <div class="portfolio-card-title">
                <h2 class="title">${item.title}</h2>
                <p class="text nomargin">${item.desc}</p>
            </div>
        </a>
    </li>
    `
    )
    .join(" ");
};

const portfolio = document.getElementById("JS_Portfolio");
const portfolioMore = document.getElementById("JS_Portfolio__Show");
portfolio.innerHTML = createPortfolio(portfolioArr, 3);
portfolioMore.addEventListener("click", (e) => {
  portfolio.innerHTML = createPortfolio(portfolioArr, portfolioArr.length);
  portfolioMore.style.display = "none";
});

if (document.defaultView.innerWidth > 540) {
  portfolio.innerHTML = createPortfolio(portfolioArr, portfolioArr.length);
  portfolioMore.style.display = "none";
}
 