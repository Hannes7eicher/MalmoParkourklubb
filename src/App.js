import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GoogleApiWrapper from "./components/GoogleApiWrapper";
import Accordion from "./components/Accordion";

export default function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-center sm:text-righ flex justify-items-center m-8 sm:m-36">
        <div className="m-4">
          <h1 className="text-white text-2xl sm:text-6xl">Sommarträning</h1>
          <div className="text-white m-4">
            <br></br>
            <p className="sm:text-3xl">Start: 01.Juli</p>
            <br></br>
            <div className="sm:text-3xl">
              <p>Tisdagar 11 - 15 (hallen)</p>
              <p>Torsdagar 11 - 15 (hallen)</p>
              <p>Lördagar 11 - ish (ute i stan)</p>
              <br></br>
              <p>Pris: 100kr</p>
            </div>
          </div>
        </div>

        <div className="m-4">
          <h1 className="text-white text-2xl sm:text-6xl">Hitta oss</h1>
          <br></br>
          <p className="text-white sm:text-xl">Kopparbergsgatan 6B, Malmö</p>
          <br></br>
          <GoogleApiWrapper />
        </div>
        <div className="m-4">
          <Accordion />
        </div>
      </div>
      <Footer />
    </div>
  );
}
