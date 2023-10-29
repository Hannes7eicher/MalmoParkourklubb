import React, { useState } from "react";
import backgroundImage from "../assets/membership.png";
import vecka from "../assets/schema.png";
import List from "../components/List";
import Alert from "../components/Alert";
import { Helmet } from "react-helmet";
import Schedule from "../components/Schedule";

export default function Membership() {

  return (
    <div>
      <Helmet>
        <title>Medlemskap</title>
        <meta
          name="Medlemskap"
          content="Läs om medlemskamp och träningar på Malmö ParkourKlubb"
        />
      </Helmet>
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

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Medlemskap
            </h1>
            <p className="text-white sm:text-2xl">
              För att träna hos oss behöver du vara medlem i föreningen. Ett
              medlemskap kostar 200 kronor per år, oavsett om du är aktiv eller
              om du bara är stödmedlem.
            </p>
            <br></br>
            <p className="text-white sm:text-2xl">
              Det går också bra att köpa en drop-in-biljett för 100 kr per
              tillfälle.
            </p>

            <Alert content="Tänk på att du behöver vara medlem för att ha en gällande försäkring." />
          </div>
        </div>

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Höstterminen
            </h1>
            <p className="text-white sm:text-2xl">
              På Malmö Parkourklubb erbjuder vi föjlande grupper:
            </p>
            <br></br>

            <h1 className="text-white text-left text-3xl py-4">Grupper</h1>
            <table className="table table-xl table-pin-rows table-pin-cols mb-8">
              <tbody>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">
                    KPK: Född 2017 eller senare
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">PK1: Född 2015-2016</td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">PK2: Född 2013-2014</td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">PK3: Född 2010-2012</td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">PK4: Född 2006-2009</td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">
                    PK5: Född 2005 eller tidigare
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">PKV: Parkour för vuxna</td>
                </tr>
                <tr className="text-left">
                  <td className="text-lg sm:text-xl">OG: Open Gym</td>
                </tr>
              </tbody>
            </table>

            <Schedule />

            <div>
              <Alert
                content="Obs! När du betalar via bankgiro tänk på att ange namn och personnummer."
                info="bankgiro: 325-6161"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Terminsavgiften är:
            </h1>
            <br></br>
            <List h1="- 1000 kr för 1 träning per vecka" />
            <List h1="- 1800 kr för 2 träningar per vecka" />
            <div>
              <p className="text-white sm:text-2xl -">
                Kom ihåg att alla aktiva måste även ha ett medlemskap i
                föreningen. Det kostar 200 kronor per person och gäller året ut.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex justify-center sm:my-16 py-12 px-12 text-white" id="contact">
          <div className="max-w-xl">
            <h1 className="text-white text-2xl sm:text-6xl mb-4 sm:mb-16">
              Har du frågor?
            </h1>
            <p className="text-white sm:text-2xl">
              Kontakta oss på{" "}
              <a className="text-sky-500">
                info@malmoparkour.se
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
