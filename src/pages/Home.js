import Hero from "../components/Hero";
import GoogleMaps from "../components/GoogleMaps";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Öppettider</title>
        <meta name="Öppettider" content="Öppettider på Malmö ParkourKlubb" />
      </Helmet>
      <div className="bg-gray-950">
        <Hero
          h1="Malmö"
          h2="Parkourklubb"
          h3="Träna Nu!"
          p1="Kom och träna i Malmös största parkouranläggning."
        />

        <div
          className="
              grid 
              grid-cols-1 
              xl:grid-cols-2 
              gap-2 
              sm:text-left 
              text-center 
              flex 
              justify-items-center 
              m-8 
              sm:m-36"
        >
          <Content
            h1="Hösttermin"
            p1="Höstterminen är stängd för anmälningar."
            p5="Vi kommer snart att skicka ut information om den nya terminen."
            btn="Läs Mer"
            showBtn={true}
          />
          <div>
            <Content
              h1="Hitta oss"
              p1="Kopparbergsgatan 6C, Malmö"
              showBtn={false}
            />
            <div>
              <GoogleMaps />
            </div>

            {/* <Content
          h1="Höstterminen"
          p1="Start: 21.augusti"
          p2="Medlemskap: 200 kr / år."
          p3="Terminsavgift: 1000 kr 1x / veckan"
          p4="Terminsavgift: 1800 kr 2x / veckan"
          btn="Anmäl Dig!"
          showBtn={false}
        /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
