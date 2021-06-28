import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/images/bg.jpeg" alt="" />

        <div className="home__row">
          <Product title="Tanaman Kastuba" price={50000} image="/images/plants/kastuba.jpg" />
          <Product title="Tanaman Kaktus San Pedro" price={50000} image="/images/plants/catus-san-pedro.png" />
        </div>
        <div className="home__row">
          <Product title="Tanaman Christmas Cactus" price={50000} image="/images/plants/christmas-cactus-red.jpg" />
          <Product title="Tanaman Hosta Brim" price={50000} image="/images/plants/hosta-brim.jpg" />
          <Product title="Tanaman Ficus Elastica" price={50000} image="/images/plants/ficus-elastica.jpg" />
        </div>
        <div className="home__row">
          <Product title="Tanaman Cryptanthus Elaine" price={50000} image="/images/plants/cryptanthus-elaine.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
