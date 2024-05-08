import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CovidIndo from "../../components/CovidIndo/CovidIndo";
import CovidProv from "../../components/CovidProv/CovidProv";
import Footer from "../../components/Footer/Footer";
import CovidForm from "../../components/CovidForm/CovidForm";
import data_indo from "../../utils/constants/indonesia";
import data_prov from "../../utils/constants/provinces";
import { useState } from "react";
function HomePage() {
  const [covid_prov, setCovidProv] = useState(data_prov.provinces);
  return (
    <div>
      <Navbar />
      <Hero />
      <CovidIndo
        covid_indo={data_indo.indonesia}
        last_update={data_indo.last_update}
      />
      <CovidProv covid_prov={covid_prov} setCovidProv={setCovidProv} />
      <CovidForm covid_prov={covid_prov} setCovidProv={setCovidProv} />
      <Footer />
    </div>
  );
}

export default HomePage;
