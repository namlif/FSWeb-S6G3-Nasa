import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TarihBilesen from "./TarihBilesen";
import AciklamaBilesen from "./AciklamaBilesen";
import CopyrightBilesen from "./CopyrightBilesen";
import TitleBilesen from "./TitleBilesen";

function App() {
  const [nasaPics, setNasaPics] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=gYmpPCTWXYGMUvzOUoSeexHAeP05AhhMNaIqgEfY&start_date=2022-04-01&end_date=2022-04-30"
      )
      .then((res) => setNasaPics(res.data))
      .catch((err) => console.log("HATA", err));
  }, []);

  return (
    <div className="App">
      <h1>NASA Nisan Ayı Fotoğrafları</h1>
      {nasaPics.map((pic) => (
        <div key={pic.date}>
          
          <TitleBilesen title={pic.title} />
          <img
            className="nasa-pic"
            src={pic.url}
            alt="NASA Astronomy Pic of Day"
          />

          <CopyrightBilesen copyright={pic.copyright} />
          <TarihBilesen tarih={pic.date} />
          <AciklamaBilesen aciklama={pic.explanation} />
        </div>
      ))}
    </div>
  );
}

export default App;