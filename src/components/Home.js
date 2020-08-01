import React from 'react';
import Product from './Product';
import '../styles/home.css'

function Home() {
    return (
        <div className="home">
            <img class="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
            <Product />
        </div>
    )
}

export default Home