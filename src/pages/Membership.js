import Footer from "../components/Footer";
import backgroundImage from "../assets/membership.png";

export default function Membership() {
  return (
    <div className="bg-gray-950">
      {/*       <Hero
        h1="Hej"
        h2="Välkommen till vår nya hemsida"
        h3=""
        p1="Här kan du läsa om vem vi är och hur du kan hjälpa till!"
        p2=""
      /> */}

      <div
        className="hero h-100 sm:h-screen bg-blend-darke relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            mixBlendMode: "darken",
          }}
        ></div>
        <div className="hero-content">
          <div className="max-w-screen sm:mx-64 pt-16 sm:pt-0">
            <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
              
            </h1>
            <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
              Bli medlem
            </h1>
            <h1 className="mb-5 text-5xl sm:text-6xl xl:text-8xl p-2 text-yellow-400">
              idag!
            </h1>
            <p className="text-2xl sm:text-3xl p-2 text-white">
              Här hittar du allt du behöver veta för att bli medlem hos oss.
            </p>
            <p className="mb-5 text-2xl sm:text-3xl p-2 text-white"></p>
          </div>
        </div>
      </div>

      <div
        className="
          grid 
          grid-cols-1  
          block
          m-8 
          sm:m-36
          max-w-lg
    
          "
          
      >
        <div>
          <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
            {" "}
            Medlemskap
          </h1>
          <p1 className="text-white text-xl">
           Att bli medlem hos oss går snabbt. Du kan antingen fylla i anmälan i förväg eller på plats genom att skriva ner dina uppgifter i vår Google Form, som du hittar längre ner.
          </p1>
          <div className="divider"></div>
          <p className="text-white text-xl">Betalning genomförs på plats</p>

          <button className="btn btn-primary mt-8">Google Förmulär</button>
        </div>

        
      </div>
      <Footer />
    </div>
  );
}
