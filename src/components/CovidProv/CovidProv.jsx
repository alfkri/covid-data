import data from "../../utils/constants/provinces";
import {
  covidProv__main,
  covidProv__title,
  covidProv__content,
} from "./CovidProv.module.css";
const CovidProv = () => {
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
            {data.provinces.map((data_prov) => {
              return (
                <tr key={data_prov.kota}>
                  <td>{data_prov.kota}</td>
                  <td>{data_prov.kasus}</td>
                  <td>{data_prov.sembuh}</td>
                  <td>{data_prov.dirawat}</td>
                  <td>{data_prov.meninggal}</td>
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
