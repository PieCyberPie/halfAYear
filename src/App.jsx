import { Fragment, useState } from "react";
import "./App.css";
import Tab from "./components/Tab";
import classNames from "classnames";

import bow from "./bow.png";
import cat1 from "./cat1.jpg";
import cat2 from "./cat2.jpg";
import cat3 from "./cat3.jpg";
import flowers from "./flowers.jpg";
import we from "./we.gif";

const tabs = [
  {
    id: 0,
    title: "Кохав test",
  },
  {
    id: 1,
    title: "Кохаю",
  },
  {
    id: 2,
    title: "І буду кохати",
  },
  {
    id: 3,
    title: "Дізклеймер!",
    text: "Це не геніальне 'проізвєдєніє іскуства', це не про дизайн, мені просто хотілося б зробити щось для тебе, до речі, навряд ти отримаєш щось накшталт такого від когось, томууу не вважай це за якийся high-end продукт, останнім часом у мене туго з вооброжалкой.",
  },
  {
    id: 4,
    title: "Це про тебе!",
    imgUrl: cat1,
  },
  {
    id: 5,
    title: "І знов про тебе!",
    imgUrl: cat2,
  },
  {
    id: 6,
    title: "Не повіриш, знов про тебе!!!",
    imgUrl: cat3,
  },
  {
    id: 7,
    title: "Тут для тебе завдання іхіхі",
    text: "Воно не буде складним, чесно-чесно!\nТобі буде потрібно буде ввести пароль з мого телефону, так-так, нічого креативніше я не придумав, але в останній раз на балконі у тебе були проблеми з цим, тому чому б не спробувати, ахаха.\nКнопочки будуть розташовані отак, як показано нижче, наразі це просто текст, а далі будуть ріл кнопочки, коли ти введеш правильний пароль кнопочка наступного слайду стане активною, тому дєрзай, я в тебе вірю!",
    additionalText: "1 - 2 - 3\n4 - 5 - 6\n7 - 8 - 9",
  },
  {
    id: 8,
    title: "Я в тебе вірю!!!",
    isLock: true,
  },
  {
    id: 9,
    title: "Розумничка!!!!!",
    imgUrl: flowers,
  },
  {
    id: 10,
    title: "Кохаю тебе",
    text: "Насправді, ніколи не зможу підібрати слів як сильно я тебе кохаю і на скільки важлива ти для мене.\nМожливо зараз мені важко, але я знаю, що у мене є підтримка, я знаю заради чого я все це роблю, я тебе кохаю, булка, дуже, ДУЖЕ сильно!!!\nНу, коли я тебе вже трошки тут позадрачував, думаю, тепер можна і зорієнтувати тебе що куди та коли!",
  },
  {
    id: 11,
    title: "То що, готова ввбирати інформацію? Щодо нашої зустрічі?",
    yesOrYes: true,
  },
  {
    id: 12,
    title: "Ввбирай інформацію!",
    isInfo: true,
  },
  {
    id: 13,
    title: "Кохаю тебе!",
    text: "Насправді, мені подобалося робити цей проект, такий +вайб чиста, ахахаха\nМоже, він не такий комплексний як хотілося б, але я хоча б згадав як це, програмувати, тому я дуже вдячний тобі, киць, навіть за те, що ти просто є!",
  },
  {
    id: 14,
    title: "Чекаємо на Ваш відгук!",
    imgUrl: we,
    isReview: true,
  },
];

function App() {
  const [slideNum, setSlideNum] = useState(0);

  return (
    <Fragment>
      <img src={bow} alt="" className="bow-image bow-image-1" />
      <img src={bow} alt="" className="bow-image bow-image-2" />
      <div className="screen">
        <Tab tab={tabs[slideNum]} setSlideNum={setSlideNum} />
        <div className="buttons is-flex-direction-row is-justify-content-space-between is-flex-nowrap">
          <button
            className={classNames({
              button: true,
              slideButton: true,
              "is-warning": true,
              "is-hidden": slideNum === 0,
            })}
            onClick={() => {
              setSlideNum((slideNum) => slideNum - 1);
              document
                .querySelector("#button-next")
                .removeAttribute("disabled");
              document
                .querySelector("#button-next")
                .classList.remove("is-invisible");
            }}
          >
            Попередній слайд!!!
          </button>
          <button
            id="button-next"
            className={classNames({
              button: true,
              slideButton: true,
              "is-success": true,
              "is-invisible": slideNum === tabs.length - 1,
            })}
            onClick={() => {
              setSlideNum((slideNum) => slideNum + 1);
            }}
          >
            Наступний слайд!!!
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
