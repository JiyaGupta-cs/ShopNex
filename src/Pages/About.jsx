import React, { useContext } from 'react';
import './CSS/About.css'
import { useState,useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';

const About = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className={'about_page_'+theme}>
      <h1 className="text-center mt-4" id = "aboutheading"><strong>About Us</strong></h1>
    <div className="container-my d-flex align-items-center justify-content-center border shadow-lg rounded py-4">
      <div className="content">
      <p className="txt py-5">
      The ShopNex app revolutionizes the way you shop for clothing, providing an immersive and convenient experience that caters to the diverse fashion needs of individuals and families alike. Seamlessly blending cutting-edge technology with a user-friendly interface, our app serves as a virtual fashion haven where the latest trends in men's, women's, and kids' apparel are just a tap away. Navigating through the app is a breeze, allowing you to explore curated collections, discover new arrivals, and effortlessly make secure purchases with confidence. The app's intuitive features provide a personalized touch, offering tailored recommendations and exclusive deals based on your preferences. Embracing the ethos of ShopNex, the app is not merely a transactional platform but a dynamic space for self-expression and discovery. It encapsulates the essence of a modern, tech-savvy wardrobe upgrade, where every click opens the door to a world of style possibilities. Your fashion journey begins with the ShopNex app – download it today to witness the seamless convergence of style, technology, and unparalleled shopping satisfaction.
      </p>
    </div>
    </div>
      <h3 className='text-primary text-center mt-4'>Why choose us:</h3>
    <div className='container-2 d-flex align-items-center justify-content-center'>
      <div class="accordion" style={{ width: '1000px' }} id="accordionExample">
      <div class="accordion-item shadow">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Affordable Online Shopping at Your Fingertips
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show bg-primary text-light" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market. Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.
          </div>
        </div>
      </div>
      <div class="accordion-item shadow">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          A Huge Collection of Clothes Across All Categories
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse bg-primary text-light" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            We have a very wide range of clothes in all categories. For men, women and kids.  In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. 
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='border-2 border-top text-body mt-xl-5' ></div>
    </div>
  );
};

export default About;
