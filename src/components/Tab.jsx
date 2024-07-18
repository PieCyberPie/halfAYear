import { Fragment } from "react";
import { YesOrYes } from "./YesOrYes";
import CodeLock from "./CodeLock";
import Info from "./Info";
import Review from "./Review";

/* eslint-disable react/prop-types */
export const Tab = ({ tab, setSlideNum }) => {
  return (
    <Fragment>
      <div className="tab-content is-flex is-flex-direction-column is-justify-content-space-between">
        {tab.title ? <h1 className="tab-title">{tab.title}</h1> : null}
        {tab.text ? <p className="tab-text">{tab.text}</p> : null}
        {tab.additionalText ? (
          <p className="tab-text tab-additional_text">{tab.additionalText}</p>
        ) : null}
        {tab.imgUrl ? <img src={tab.imgUrl} alt="" /> : null}
        {tab.isLock ? <CodeLock /> : null}
        {tab.yesOrYes ? <YesOrYes setSlideNum={setSlideNum} /> : null}
        {tab.isInfo ? <Info /> : null}
        {tab.isReview ? <Review /> : null}
      </div>
    </Fragment>
  );
};

export default Tab;
