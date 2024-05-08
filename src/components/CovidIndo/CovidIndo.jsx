import data from "../../utils/constants/indonesia";
import {
  covidIndo__main,
  covidIndo__title,
  covidIndo__item,
  covidIndo__container,
  covidIndo__item__status,
  covidIndo__item__total,
} from "./CovidIndo.module.css";
const CovidIndo = () => {
  const colors = ["#58A399", "#108ab2", "#ef476f"];

  return (
    <div className={covidIndo__main} id="covidIndo">
      <div className={covidIndo__title}>
        <h2>Indonesia</h2>
        <p>Data Covid Berdasarkan Indonesia</p>
      </div>
      <div className={covidIndo__container}>
        {data.indonesia.map((item, index) => {
          const color = colors[index % colors.length];
          return (
            <div className={covidIndo__item} key={index}>
              <h1 className={covidIndo__item__status}>{item.status}</h1>
              <h1 className={covidIndo__item__total} style={{ color }}>
                {item.total}
              </h1>
            </div>
          );
        })}
      </div>
      <p>Latest Update: {data.last_update}</p>
    </div>
  );
};

export default CovidIndo;
