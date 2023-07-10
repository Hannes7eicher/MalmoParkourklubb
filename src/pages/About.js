import Footer from "../components/Footer";
import backgroundImage from "../assets/about.jpg";

export default function About() {
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
            <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
              Hej
            </h1>
            <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
              och välkommen till vår nya
            </h1>
            <h1 className="mb-5 text-5xl sm:text-6xl xl:text-8xl p-2 text-yellow-400">
              hemsida
            </h1>
            <p className="text-2xl sm:text-3xl p-2 text-white">
              Här kan du läsa om vem vi är och hur du kan hjälpa till!
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
          <h1 className="text-white text-2xl sm:text-6xl mb-12">
            {" "}
            Vi behöver din hjälp
          </h1>
          <p1 className="text-white text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            iaculis risus sed magna mattis, et blandit augue posuere. Curabitur
            ex orci, posuere vel mauris nec, pellentesque scelerisque tortor.
            Maecenas et facilisis augue. Morbi sagittis leo ex, ut accumsan
            felis fringilla mollis. Aliquam condimentum pretium ipsum eu
            egestas. Integer at convallis purus, sit amet ultricies metus.
            Aliquam tincidunt dignissim quam sed gravida. Sed facilisis arcu
            vitae nibh viverra semper. Phasellus hendrerit tortor non diam
            varius vestibulum. Phasellus euismod sem vitae neque pharetra, ut
            vulputate ligula eleifend. Pellentesque quis risus lacus. Vestibulum
            at tempus mauris. Praesent sodales eros libero, ac faucibus mi
            suscipit ut. Mauris tincidunt blandit est, non faucibus ex. Sed
            lobortis risus sit amet viverra venenatis. Aenean vitae congue
            neque. Duis dui diam, lobortis id magna ac, ornare viverra magna.
            Integer convallis viverra dui, non efficitur neque interdum ac.
            Phasellus hendrerit nulla in ex blandit ultricies. Nunc maximus
            finibus lectus, eu fermentum libero blandit quis. Integer eleifend
            arcu velit, non vulputate est fermentum a. Fusce laoreet, ante at
            accumsan semper, elit nulla dictum est, sollicitudin posuere eros
            nunc id lorem. Vivamus a consequat ante. Cras id justo risus.
            Integer dignissim dui eget erat pretium, et consequat felis
            hendrerit. Sed porttitor risus a erat ornare pharetra. Phasellus
            quis urna a augue consectetur molestie. Vivamus mollis, nunc sit
            amet ornare facilisis, felis nulla mollis ligula, sit amet cursus
            turpis erat ut lorem. In quis ornare ex. Vestibulum dignissim justo
            aliquam tortor porttitor, vel pharetra diam dictum. Cras scelerisque
            ex id odio euismod interdum eget at velit. Vivamus sagittis mauris
            sit amet quam iaculis, a ornare leo hendrerit. Duis dictum velit
            posuere venenatis commodo. Nunc justo metus, eleifend ut pulvinar
            vel, convallis non metus. Cras sed ligula volutpat, rutrum turpis
            in, tincidunt nisi. Vestibulum dapibus, purus eu eleifend luctus, mi
            metus finibus metus, quis dictum metus dui eu diam. Donec
            consectetur, felis vel convallis rhoncus, elit lorem lacinia velit,
            id commodo felis sem ac eros. Nullam ornare dignissim arcu, id
            bibendum ipsum elementum eget. Vestibulum eu mi et leo iaculis
            sagittis vel eu nisi. Etiam velit orci, mattis nec venenatis id,
            commodo in risus. Sed luctus odio ex, at convallis lorem feugiat
            vitae.
          </p1>
        </div>

        
      </div>
      <Footer />
    </div>
  );
}
