import { Fragment, useState } from "react";
import "./App.css";
import Tab from "./components/Tab";
import classNames from "classnames";

const tabs = [
  {
    id: 0,
    title: "Кохав",
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
    imgUrl: "src/cat1.jpg",
  },
  {
    id: 5,
    title: "І знов про тебе!",
    imgUrl: "src/cat2.jpg",
  },
  {
    id: 6,
    title: "Не повіриш, знов про тебе!!!",
    imgUrl: "src/cat3.jpg",
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
    imgUrl: "src/flowers.jpg",
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
    imgUrl: "src/we.gif",
    isReview: true,
  },
];

function App() {
  const [slideNum, setSlideNum] = useState(0);

  return (
    <Fragment>
      <img src="src\bow.png" alt="asd" className="bow-image bow-image-1" />
      <img src="src\bow.png" alt="asd" className="bow-image bow-image-2" />
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
