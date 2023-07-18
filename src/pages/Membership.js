import backgroundImage from "../assets/membership.png";

export default function Membership() {
  return (
    <div className="bg-gray-950">

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
            <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white"></h1>
            <h1 className="mb-1 text-5xl leading-relaxed sm:text-6xl xl:text-8xl p-2 text-white">
              Bli medlem <span style={{ color: "#FACC14" }}>idag!</span>
            </h1>
            <p className="text-2xl sm:text-3xl p-2 text-white">
              Här hittar du allt du behöver veta för att bli medlem hos oss.
            </p>
            <p className="mb-5 text-2xl sm:text-3xl p-2 text-white"></p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center sm:my-16 py-12 px-12 text-white">
        <div className="max-w-xl">
          <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
            Medlemskap
          </h1>
          <p className="text-white sm:text-2xl">
            För att träna hos oss behöver du vara medlem i föreningen. Ett
            medlemskap kostar 200 kronor per år, oavsett om du är aktiv eller om
            du bara är stödmedlem.
          </p>
          <br></br>
          <p className="text-white sm:text-2xl">
            Just nu kan man lösa ett Sommarkort som ger dig rätt att träna 3
            dagar i veckan (2 timmar per tillfälle).
          </p>
          <br></br>
          <p className="text-white sm:text-2xl">
            Det går också bra att köpa en drop-in-biljett för 100 kr per
            tillfälle.
          </p>
          <br></br>
          <p className="text-white sm:text-2xl">
            Observera att vi inte kräver medlemskap för sommarträningen.
          </p>
          <div className="divider"></div>
          <p className="text-white text-xl">Betalning genomförs för tilfället på plats</p>
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScMNg6tLPnaTiA7qFx4TbjA-Nss9WDez292JIlTeYFRXb4Dxg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-8"
            >
              Sommarkort
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQ4z-FHHYSEqewU92rDVLRzs44KOGtmBBxvkwP5E43wYyAMA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              Bli Medlem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
