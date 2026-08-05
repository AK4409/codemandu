import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import landingPageData from "./data/data.json";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(landingPageData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={data.Header} />
      <Features data={data.Features} />
      <About data={data.About} />
      <Services data={data.Services} />
      <Gallery data={data.Gallery} />
      <Testimonials data={data.Testimonials} />
      <Team data={data.Team} />
      <Contact data={data.Contact} />
    </div>
  );
};

export default App;
