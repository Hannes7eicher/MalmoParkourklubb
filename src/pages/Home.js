import Hero from "../components/Hero";
import GoogleMaps from "../components/GoogleMaps";
import Content from "../components/Content";

export default function Home() {
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
            p1="Start: 01.Juli"
            p2="Tisdagar 11 - 15 (hallen)"
            p3="Torsdagar 11 - 15 (hallen)"
            p4="Lördagar 11 - ish (ute i stan)"
            p5="Pris: 100kr"
            btn="Anmäl Dig!"
            showBtn={true}
          />

          <div>
            <Content
              h1="Hitta oss"
              p1="Kopparbergsgatan 6B, Malmö"
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