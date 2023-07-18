import backgroundImage from "../assets/about.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950">

      <div
        className="hero h-100 sm:h-screen bg-blend-darke relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            <h1 className="mb-1 leading-relaxed text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
              Hej och välkommen till vår nya{" "}
              <span style={{ color: "#FACC14" }}>hemsida</span>
            </h1>
            <p className="text-2xl sm:text-3xl p-2 text-white">
              Här kan du läsa om vem vi är och hur du kan hjälpa till!
            </p>
            <p className="mb-5 text-2xl sm:text-3xl p-2"></p>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center py-12 px-12 text-white">
        <div className="max-w-xl">
          <h1 className="text-white text-left text-xl sm:text-4xl font-bold py-8">
            Detta är Malmö Parkour
          </h1>
          <p className="text-white sm:text-2xl">
            Vi är en grupp av tränare, atleter och föräldrar som tillsammans har
            tagit över den gamla parkourföreningen Quality Runners (QR), numera
            Malmö Parkourklubb (MPK), för att återskapa ett Parkourgym som Malmö
            förtjänar. Vår resa har precis börjat och vi har en bra bit kvar att
            gå, men tillsammans med er vill vi skapa en upplevelse för alla
            åldrar, oavsett om du har tränat parkour förut eller är nybörjare.
            Alla är välkomna!
          </p>

          <h1 className="text-white text-left text-xl sm:text-4xl font-bold py-8">
            Historia
          </h1>
          <p className="text-white sm:text-2xl">
            Föreningen befinner sig just nu i en svår ekonomisk situation och
            styrelsen jobbar hårt för att få föreningen på fötter, såväl
            ekonomiskt som strukturellt. Vi är många som drabbades av
            nedstängningen 2022 med försvunna terminsavgifter och uteblivna
            aktiviteter - en situation som absolut inte får upprepas.
          </p>

          <h1 className="text-white text-left text-xl sm:text-4xl font-bold py-8">
            En ny styrelse
          </h1>
          <p className="text-white sm:text-2xl">
            Med stöd av Malmö stad och MKB formade vi i maj 2023 en helt ny
            styrelse bestående av föräldrar, coacher och engagerade. Vi
            prioriterar struktur, kommunikation och kreativitet och våra
            viktigaste uppdrag består i att med hjälp av full transparens
            återvinna förtroende hos våra medlemmar och att skapa en trygg och
            inspirerande miljö för alla parkour-intresserade.
          </p>

          <h1 className="text-left text-xl sm:text-4xl font-bold py-8">
            Vi behöver din hjälp!
          </h1>
          <p className="sm:text-2xl">
            Om vi vill att Malmös största parkouranläggning ska finnas kvar, så
            kommer vi behöva hjälpas åt tillsammans. Alla vi på MPK jobbar
            ideellt och varenda krona går till att återbetala skulden.
          </p>
          <br></br>
          <p className="text-white sm:text-2xl">
            Det bästa sättet du kan hjälpa till är genom att helt enkelt komma
            och träna hos oss. Har du kompisar, barn eller syskon som vill testa
            på? Ta med allihopa! Just nu är det viktigaste att vi betalar av
            föreningens skuld så snabbt det går och får vi in 100 medlemmar
            kommer föreningen vara skuldfri slutet av 2024.
          </p>
          <br></br>
          <p className="text-white sm:text-2xl">
            Tack för att du tog tiden att läsa om vår historia och hur vi
            tillsammans kan rädda parkour i Malmö. Klicka nedanför för att läsa
            mer om hur du kan bli medlem.
          </p>
          <button
            onClick={() => {
              navigate("/Membership");
            }}
            className="btn btn-primary my-8"
          >
            Medlemskap
          </button>
        </div>
      </div>
    </div>
  );
}
