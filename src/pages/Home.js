import Hero from "../components/Hero";
import GoogleMaps from "../components/GoogleMaps";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950">
      <Hero
        h1="Malmö"
        h2="Parkourklubb"
        h3="Träna Nu!"
        p1="Nu öppnar Malmö Parkourklubb inför sommaren!"
        p2="Kom och träna i Malmös största parkouranläggning."
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
          h1="Sommarträning"
          p1="Start: 01.juli"
          p2="Tisdagar 11 - 15 (hallen)"
          p3="Torsdagar 11 - 15 (hallen)"
          p4="Lördagar 11 - 15 (stan eller hallen)"
          p5="Pris: 500 kr (hela sommaren) eller 100 kr (drop-in)"
          btn="Anmäl Dig!"
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
        </div>
      </div>
    </div>
  );
}
