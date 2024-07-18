import { Fragment } from "react";

/* eslint-disable react/prop-types */
export const YesOrYes = ({ setSlideNum }) => {
  document.querySelector("#button-next").classList.add("is-invisible");
  return (
    <Fragment>
      <div className="buttons is-flex is-justify-content-center">
        <button
          className="button is-danger is-dark yes-or-yes-button"
          onClick={() => {
            document
              .querySelector(".yes-or-yes-button")
              .classList.remove("is-danger");
            document
              .querySelector(".yes-or-yes-button")
              .classList.remove("is-dark");
            document
              .querySelector(".yes-or-yes-button")
              .classList.add("is-success");
            document
              .querySelector(".yes-or-yes-button")
              .classList.add("yes-button");
            document.querySelector(".yes-or-yes-button").innerHTML = "Хочу!!!";
            document
              .querySelector(".yes-or-yes-button")
              .addEventListener("click", () => {
                setSlideNum(12);
                document
                  .querySelector("#button-next")
                  .classList.remove("is-invisible");
              });
          }}
        >
          Не хочу!!!
        </button>
        <button
          className="button is-success yes-or-yes-button yes-button"
          onClick={() => {
            setSlideNum(12);
            document
              .querySelector("#button-next")
              .classList.remove("is-invisible");
          }}
        >
          Хочу!!!
        </button>
      </div>
    </Fragment>
  );
};

export default YesOrYes;
