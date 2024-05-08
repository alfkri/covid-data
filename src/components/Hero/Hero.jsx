import "./Hero.module.css";
import Button from "../Button/Button.jsx";
import { hero__img, hero__desc } from "./Hero.module.css";

const Hero = () => {
  return (
    <section>
      <div>
        <h2>COVID MONITOR</h2>
        <h3>Monitoring Perkembangan Covid</h3>
        <p className={hero__desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          laboriosam distinctio voluptatum numquam repellat ullam quisquam hic
          earum adipisci laudantium veritatis dolores modi iure architecto ipsa
          corrupti, illo aut veniam vitae provident blanditiis? Odio id deserunt
          ipsam quod ullam sit quos! Impedit, provident.
        </p>
        <Button title="Vaccine" />
      </div>
      <div>
        <img className={hero__img} src="./hero.svg" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
