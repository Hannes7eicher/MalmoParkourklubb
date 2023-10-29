import React, { useState } from "react";
import backgroundImage from "../assets/halloweenJam.jpg";
import weekendJam from "../assets/weekendJam.jpeg";
import hostlov from "../assets/hostlov.jpg";
import List from "../components/List";
import Alert from "../components/Alert";
import { Helmet } from "react-helmet";
import Schedule from "../components/Schedule";

export default function Events() {
  return (
    <div>
      <Helmet>
        <title>Events</title>
        <meta
          name="Events"
          content="Läs om om våra aktuella och uppkommande events"
        />
      </Helmet>
      <div className="bg-gray-950">
        <div
          className="hero h-100 sm:h-screen bg-blend-darke relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
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
                MPK <span style={{ color: "#FACC14" }}>Events</span>
              </h1>
              <p className="text-2xl sm:text-3xl p-2 text-white">
                Läs mer om våra aktuella och uppkommande events!
              </p>
              <p className="mb-5 text-2xl sm:text-3xl p-2 text-white"></p>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Höstlov
            </h1>
            <div className="my-8">
              <img src={hostlov} alt="Höstlovet" />
            </div>
            <p className="text-white sm:text-2xl">
              Kom och träna gratis parkour hos oss under höstlovet!
            </p>
            <br></br>
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:my-16">
              Tider / Pris
            </h1>
            <p className="text-white sm:text-2xl">måndag - fredag</p>
            <br></br>
            <p className="text-white sm:text-2xl">kl 11.00 - 15.00</p>
            <br></br>
            <p className="text-white sm:text-2xl">Gratis</p>
            <Alert content="Barn under 8 år måste ha en vuxen närvarande hela tiden." />
          </div>
        </div>

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Halloween Jam
            </h1>
            <div className="my-8">
              <img src={backgroundImage} alt="Halloween Jam" />
            </div>
            <p className="text-white sm:text-2xl">
              På tisdagkväll kommer vi att ha ett Halloween Jam för alla
              medlemmar!
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">Jamet är gratis!</p>
            <br></br>
            <p className="text-white sm:text-2xl">
              Man uppmuntras starkt att komma utklädd. Bästa utklädnaden vinner
              ett 10-kort till Open Gym!
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">
              Även om detta är för våra medlemmar, så får man gärna ta med en
              kompis! (Hen kommer självklart också in gratis, och uppmuntras
              givetvis att vara utklädd!)
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">Under kvällen erbjuds…</p>
            <br></br>
            <p className="text-white sm:text-2xl">- Fri träning</p>
            <br></br>
            <p className="text-white sm:text-2xl">
              - Tävling (där man ska klara av utmaningar för att plocka poäng.
              Vinnaren får ett 10-kort till Open Gym!)
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">
              - Filmvisning med projektor (för de som vill vila lite mellan
              hoppen)
            </p>
            <br></br>
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:my-16">
              Tider / Pris
            </h1>
            <p className="text-white sm:text-2xl">Tisdag den 31.10</p>
            <br></br>
            <p className="text-white sm:text-2xl">kl 18.00 - 21.00</p>
            <br></br>
            <p className="text-white sm:text-2xl">Gratis</p>
          </div>
        </div>

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Övernattningsjam
            </h1>
            <div className="my-8">
              <img src={weekendJam} alt="Halloween Jam" />
            </div>
            <p className="text-white sm:text-2xl">
              Ni missar väl inte vårt övernattningsjam på höstlovshelgen! 2
              dagar med fartfylld träning, tävlingar, film och annat! Jamet
              kostar 299kr, och då ingår 2 måltider samt 2 mellanmål!
              Övernattning sker i anläggningen, och mer info finns på länken i
              bion!! Vi ses där!!
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">
              Priset för båda dagarna, inklusive 4 måltider, är 299 SEK.
              Betalningen sker på plats, antingen i kontant eller med betalkort
              (förhoppningsvis). Som måltid kommer vi ha en mindre snack/frukt,
              en riktig middag, en riktig frukost och ännu en mindre
              snack/frukt. Om du önskar mer mat (eller snacks) finns det
              mataffärer i närheten.
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">
              Under lördagen kommer vi hålla i en skicklighetstävling där man
              samlar poäng för att avancera till finalen. Under hela jamet
              kommer det även att finnas en online-tävling för bästa klippet
              (reglerna kommer att beskrivas på plats). Vi kommer övernatta i
              anläggningen och det finns gott om madrasser och mjuka ytor.
              Det finns också utrymme för hängmattor om så önskas. Du behöver
              bara ta med dig en sovsäck och kudde!
            </p>
            <br></br>
            <Alert content="För att delta måste du vara 11 år eller äldre." />
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:my-16">
              Tider / Pris
            </h1>
            <p className="text-white sm:text-2xl">4.november - 05.november</p>
            <br></br>
            <p className="text-white sm:text-2xl">Start: lördag kl 12.00</p>
            <br></br>
            <p className="text-white sm:text-2xl">Slut: söndag kl 16.00</p>
            <br></br>
            <p className="text-white sm:text-2xl">299 kr</p>
          </div>
        </div>

        <div
          className="flex justify-center sm:my-16 py-12 px-12 text-white"
          id="contact"
        >
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Har du frågor?
            </h1>
            <p className="text-white sm:text-2xl">
              Kontakta oss på{" "}
              <a className="text-sky-500">info@malmoparkour.se</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
