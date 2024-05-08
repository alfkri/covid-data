import { useState } from "react";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import {
  covidForm__main,
  covidForm__container,
  covidForm__input,
} from "./CovidForm.module.css";

const CovidForm = (props) => {
  const { covid_prov, setCovidProv } = props;
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [isProvinsiEmpty, setProvinsiEmpty] = useState(false);
  const [isStatusEmpty, setStatusEmpty] = useState(false);
  const [isJumlahEmpty, setJumlahEmpty] = useState(false);

  const handleProvinsi = (e) => {
    setProvinsi(e.target.value);
    setProvinsiEmpty(e.target.value === "");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setStatusEmpty(e.target.value === "");
  };

  const handleJumlah = (e) => {
    setJumlah(e.target.value);
    setJumlahEmpty(e.target.value === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!provinsi) {
      setProvinsiEmpty(true);
      return;
    }
    if (!status) {
      setStatusEmpty(true);
      return;
    }
    if (!jumlah) {
      setJumlahEmpty(true);
      return;
    }

    const updatedProvinsi = covid_prov.map((item) => {
      if (item.kota === provinsi) {
        return { ...item, [status]: jumlah };
      }
      return item;
    });

    setCovidProv(updatedProvinsi);

    setProvinsi("");
    setStatus("");
    setJumlah("");
    setProvinsiEmpty(false);
    setStatusEmpty(false);
    setJumlahEmpty(false);
  };

  return (
    <div className={covidForm__main}>
      <div>
        <img src="./form.svg" alt="" />
      </div>
      <div className={covidForm__container}>
        <h2>Form Covid</h2>
        <form onSubmit={handleSubmit}>
          <div className={covidForm__input}>
            <label>Provinsi</label>
            <select onChange={handleProvinsi} value={provinsi}>
              <option value="">Pilih</option>
              {covid_prov.map((item) => (
                <option key={item.kota} value={item.kota}>
                  {item.kota}
                </option>
              ))}
            </select>
            {isProvinsiEmpty && <Alert>Mohon diisi!</Alert>}
          </div>
          <div className={covidForm__input}>
            <label>Status</label>
            <select onChange={handleStatus} value={status}>
              <option value="">Pilih</option>
              <option value="kasus">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
            {isStatusEmpty && <Alert>Mohon diisi!</Alert>}
          </div>
          <div className={covidForm__input}>
            <label>Jumlah</label>
            <input
              type="number"
              value={jumlah}
              onChange={handleJumlah}
              min="0"
            />
            {isJumlahEmpty && <Alert>Mohon diisi!</Alert>}
          </div>
          <Button title="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CovidForm;
