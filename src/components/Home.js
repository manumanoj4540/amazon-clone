import React from 'react';
import Product from './Product';
import '../styles/home.css'

function Home() {
    return (
        <div className="home">
            <img class="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
            <div className="home__row">
                <Product 
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                price = {11.96}
                rating = {4}
                />
                <Product 
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                price = {11.96}
                rating = {4}
                />
            </div>
            <div className="home__row">
                <Product 
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                price = {11.96}
                rating = {4}
                />
                <Product 
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                price = {11.96}
                rating = {4}
                />
                <Product 
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                price = {11.96}
                rating = {4}
                />
            </div>
            <div className="home__row">
                <Product 
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                price = {11.96}
                rating = {4}
                />
            </div>
        </div>
    )
}

export default Home
