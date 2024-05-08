import "./Footer.module.css";
import { footer__logo } from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={footer__logo}>
        <h1>
          <a href="/">COVID MONITOR</a>
        </h1>
        <p>Made with ♡</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="#covidIndo">Indonesia</a>
          </li>
          <li>
            <a href="#covidProv">Provinsi</a>
          </li>
          <li>About</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
