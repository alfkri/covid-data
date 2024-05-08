import {
  covidProv__main,
  covidProv__title,
  covidProv__content,
} from "./CovidProv.module.css";
const CovidProv = (props) => {
  const { covid_prov } = props;
  return (
    <div className={covidProv__main} id="covidProv">
      <div className={covidProv__title}>
        <h2>Provinsi</h2>
        <p>Data Covid Berdasarkan Provinsi</p>
      </div>
      <div className={covidProv__content}>
        <table>
          <thead>
            <tr>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {covid_prov.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.kota}</td>
                  <td>{item.kasus}</td>
                  <td>{item.sembuh}</td>
                  <td>{item.dirawat}</td>
                  <td>{item.meninggal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CovidProv;
