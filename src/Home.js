import React from "react";

import banner from "./images/amazon prime.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src={banner}
        alt=''
      ></img>{" "}
      <div className='home__row'>
        <Product
          id='1234'
          title='The HeadPhone'
          price={100}
          rating={5}
          image='https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png'
        ></Product>
        <Product
          id='1234'
          title='The HeadPhone'
          price={100}
          rating={3}
          image='https://www.gaminglaptop.com.bd/wp-content/uploads/2019/09/asus_rog_strix_g_g53_OqLKd.jpg'
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id='1234'
          title='The HeadPhone'
          price={754100}
          rating={3}
          image='https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png'
        ></Product>
        <Product
          id='1234'
          title='The HeadPhone'
          price={700}
          rating={1}
          image='https://previews.123rf.com/images/rioillustrator/rioillustrator1204/rioillustrator120400010/13097676-abstract-musical-background-with-sound-box-vector-illustration.jpg'
        ></Product>
        <Product
          id='1234'
          title='The HeadPhone'
          price={1000}
          rating={2}
          image='https://www.gaminglaptop.com.bd/wp-content/uploads/2019/09/asus_rog_strix_g_g53_OqLKd.jpg'
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id='1234'
          title='The HeadPhone'
          price={340}
          rating={5}
          image='https://www.gaminglaptop.com.bd/wp-content/uploads/2019/09/asus_rog_strix_g_g53_OqLKd.jpg'
        ></Product>
      </div>
    </div>
  );
}

export default Home;
