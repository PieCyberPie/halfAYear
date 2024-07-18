import { Fragment } from "react";

export const Info = () => {
  return (
    <Fragment>
      <div className="infoRow">
        <p className="text infoText infoTextTitle">Коли?</p>
        <p className="text infoText infoTextText">СЬОГОДНІ</p>
      </div>
      <div className="infoRow">
        <p className="text infoText infoTextTitle">О котрій?</p>
        <p className="text infoText infoTextText">15:30</p>
      </div>
      <div className="infoRow">
        <p className="text infoText infoTextTitle">Де?</p>
        <p className="text infoText infoTextText">
          <a href="https://maps.app.goo.gl/ScrxP8WT5Xa94kVp6">ТУТЬ</a>
        </p>
      </div>
      <div className="infoRow">
        <p className="text infoText infoTextTitle">Що з собою взяти?</p>
        <p className="text infoText infoTextText">
          ГАРНИЙ НАСТРІЙ ТА ЧУДОВУ УСМІШКУ
        </p>
      </div>
    </Fragment>
  );
};

export default Info;
