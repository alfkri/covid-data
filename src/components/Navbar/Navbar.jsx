import "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>
          <a href="/">COVID MONITOR</a>
        </h1>
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
    </nav>
  );
};

export default Navbar;
