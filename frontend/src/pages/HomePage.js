// src/pages/Homepage.js

import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">ShopEase</h1>
          <nav>
            <a href="#home" className="text-white hover:underline mx-2">Home</a>
            <a href="#shop" className="text-white hover:underline mx-2">Shop</a>
            <a href="#about" className="text-white hover:underline mx-2">About</a>
            <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
            <a href="#cart" className="text-white hover:underline mx-2">Cart</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ShopEase</h2>
          <p className="text-xl mb-6">Your one-stop shop for the latest fashion and gadgets.</p>
          <a href="#shop" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Shop Now</a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Product */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Product Thumbnail" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Stylish Headphones</h3>
                <p className="text-gray-700 mb-4">$99.99</p>
                <a href="#" className="text-blue-600 hover:underline">View Product</a>
              </div>
            </div>
            {/* Repeat for more products */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">At ShopEase, we are dedicated to bringing you the best products at unbeatable prices. Our mission is to make online shopping easy, convenient, and enjoyable.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ShopEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
