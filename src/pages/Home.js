import Hero from "../components/Hero";
import GoogleMaps from "../components/GoogleMaps";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Alert from "../components/Alert";

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
          <div>
            <Content
              h1="Höstlov"
              p1="Träna gratis parkour hos oss under höstlovet!"
              p5="Halloween är runt hörnet och vi har spännande överraskningar för er..."
              btn="Läs Mer"
              showBtn={true}
            />
            <Alert content="Obs! Ingen ordinarie träning v.44" />
          </div>
          <div>
            <Content
              h1="Hitta oss"
              p1="Kopparbergsgatan 6C, Malmö"
              showBtn={false}
            />
            <div>
              <GoogleMaps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
