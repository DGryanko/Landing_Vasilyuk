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
    img: "/img/pregnant-690735_1920 1.png",
    title: "Фотосесія вагітності",
    desc:
      "Вагітність - це найніжніший період в житті кожної жінки і так хочеться мати згадку про нього. Саме тому фотосесії вагітних стали трендом за останні роки.",
  },
  {
    href: "#popup1",
    img: "./img/a-couple-of-1694334_1920 1.png",
    title: "Фотосесія Love Story",
    desc:
      "Історія кохання кожної пари дивовижна і неповторна. Адже в світі немає жодної однакової пари. Закохані люди настільки відкриті один перед одним, так щирі і безтурботні, що хочеться закарбувати...",
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
    img: "/img/religion-3930469_1920 1.png",
    title: "Фотосесія хрестин",
    desc:
      "Хрещення — найперше Таїнство, таїнство духовного перенародження, яке звершується над людьми, що вступають до Христової Церкви.",
  },
   {
    href: "#popup1",
    img: "/img/flower-achway-2574849_1920 1.png",
    title: "Фотосесія вінчання",
    desc:
      "Вінчання – не просто прекрасний красивий обряд або древня традиція. Вінчання – це велике церковне Таїнство, через яке подружжя отримують благодать Божу, коли Сам Господь незримо з’єднує їх в одне ціле, в єдину плоть...",
  },
   {
    href: "#popup1",
    img: "/img/money-2696234_1920 1.png",
    title: "Зйомка для бізнесу",
    desc:
      "Фотографія для бізнесу - ваш чудовий шанс справити незабутнє враження на потенційних партнерів або роботодавців.",
  },
   {
    href: "#popup1",
    img: "/img/graduations-4288787_1920 1.png",
    title: "Фотозйомка випускних",
    desc:
      "Випускний вечір (бал випускників) — церемонія, пов'язана із закінченням навчального закладу. Випускні вечори зазвичай проводять у школах, коледжах, вищих навчальних закладах.",
  },
   {
    href: "#popup1",
    img: "/img/image 1.png",
    title: "Фотосесія на природі",
    desc:
      "Фотосесії на природі — відмінний спосіб не тільки отримати гарні фотографії, а й підняти собі настрій. Зйомки проводяться в парках, ботанічних садах, на вулицях міста та за межами міста. Природний антураж...",
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