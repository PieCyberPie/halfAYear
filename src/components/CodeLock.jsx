import { Fragment, useState } from "react";

/* eslint-disable react/prop-types */
export const CodeLock = () => {
  const [code, setCode] = useState("");
  const [disabledButtons, setDisabledButtons] = useState([]);

  if (code.length > 4) {
    setCode(code.slice(0, 4));
  }

  console.log(disabledButtons);

  if (code !== "6253") {
    document.querySelector("#button-next").setAttribute("disabled", "");
  } else {
    document.querySelector("#button-next").removeAttribute("disabled");
  }

  if (disabledButtons.length > 4) {
    disabledButtons.length = 4;
  }

  return (
    <Fragment>
      <div className="is-flex is-align-items-center is-flex-direction-column">
        <p className="codeInput has-text-centered">{code}</p>
        <div>
          <button
            className="remove-button button code-button"
            onClick={() => {
              setCode((code) => code.slice(0, code.length - 1));
              disabledButtons.length = disabledButtons.length - 1;
            }}
          ></button>
          <button
            className="reset-button button code-button"
            onClick={() => {
              setCode(() => "");
              setDisabledButtons([]);
            }}
          ></button>
        </div>
      </div>
      <div className="codeLock is-flex is-flex-direction-column is-align-items-center">
        <div className="codeLock-row">
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "1");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(1);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(1)}
          >
            1
          </button>
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "2");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(2);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(2)}
          >
            2
          </button>
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "3");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(3);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(3)}
          >
            3
          </button>
        </div>
        <div className="codeLock-row">
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "4");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(4);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(4)}
          >
            4
          </button>
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "5");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(5);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(5)}
          >
            5
          </button>
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "6");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(6);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(6)}
          >
            6
          </button>
        </div>
        <div className="codeLock-row">
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "7");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(7);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(7)}
          >
            7
          </button>
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "8");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(8);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(8)}
          >
            8
          </button>
          <button
            className="button codeButton is-info is-outlined codeLock-number"
            onClick={() => {
              setCode((code) => code + "9");
              setDisabledButtons((disabledButtons) => {
                const tempButtons = [...disabledButtons];
                tempButtons.push(9);
                return tempButtons;
              });
            }}
            disabled={disabledButtons.includes(9)}
          >
            9
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CodeLock;
