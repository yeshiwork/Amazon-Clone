import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="657893"
            title="SAMSUNG 27-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC27G55TQWNXZA), Black"
            price={269.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81cSdJuBbFL._AC_SL1500_.jpg"
          />

          <Product
            id="781095"
            title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth, Unlocked LTE) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long lasting Battery - Mystic Bronze (US Version)"
            price={419.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81DUEOjmMQL._AC_SY741_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="123478"
            title="Canon EOS R6 Full-Frame Mirrorless Camera + RF24-105mm F4-7.1 is STM Lens Kit, Black (4082C022)"
            price={1669.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81VZhWiI9FL._AC_SX679_.jpg"
          />

          <Product
            id="4556767"
            title="Portable Electric Space Heater, 1500W/750W Ceramic Heater with Thermostat, Heat Up 200 Square Feet in Minutes, Safe and Quiet for Office Room Desk Indoor Use ( Black )"
            price={40.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71zmC0FdM6L._AC_SY450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6743678"
            title="Michael Kors Emmy Saffiano Leather Medium Crossbody Bag"
            price={92.29}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Z3m7ChJIL._AC_UY500_.jpg"
          />
          <Product
            id="4566782"
            title="Revlon One-Step Hair Dryer and Volumizer Hot Air Brush, Pink"
            price={41.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/717ubYggVJL._SL1500_.jpg"
          />

          <Product
            id="98459123"
            title="Apple iPhone 11 (64GB, Black) [Locked] + Carrier Subscription"
            price={599.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/71iO2R+CLjL._FMwebp__.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="780234"
            title="Samsung QN75Q900RBFXZA Flat 75-Inch QLED 8K Q900 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
            price={3499.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/9113rIxCA5L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
