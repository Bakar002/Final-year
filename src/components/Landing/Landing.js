import React from 'react';
import Navbar from '../Navbar/Navbar'; // Import Navbar
import Footer from '../Footer/Footer'; // Import Footer
import { useState } from 'react';

const LandingPage = () => {
  const [focusedCard, setFocusedCard] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">


<div className="flex-1">

      {/* Sections */}
      <div
        className='relative bg-cover bg-center h-screen'
        style={{ backgroundImage: `url('https://i.imgur.com/OxgOqKc.png')` }}
      >
        {/* Navbar */}
        <div className='p-10'>
          <Navbar />
        </div>

        {/* Centered Heading */}
        <div className="relative flex flex-col items-center justify-center ">
          <h2 className="relative text-6xl font-bold text-white opacity-60">
            COGNI  DRIVE
          </h2>
          <h2 className="absolute text-6xl font-bold text-white opacity-50" style={{ top: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: '-1' }}>
            COGNI  DRIVE
          </h2>
        </div>

        {/* Section */}
        <section className="h-screen items-start justify-start p-6 text-white">
          <div className="text-left max-w-4xl p-10 px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Revolutionizing Vehicle Maintenance with Predictive Insights
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              A short paragraph explaining the purpose of the project and how it helps in modeling driver behavior and predictive maintenance.
            </p>
            <button className="bg-my-green px-5 py-2 text-white rounded mt-4">
              Get Started
            </button>
          </div>
        </section>
      </div>




      <section
          className='relative bg-black bg-cover bg-center h-screen text-white py-16'
          style={{ backgroundImage: `url('https://i.imgur.com/mrNyfty.png')` }}
        >
          <div className="flex flex-col items-center justify-center h-full p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">Key Features</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl justify-center">
              <div className="flex items-center p-4 rounded-lg justify-center">
                <img src="https://i.imgur.com/WobJbKZ.png" alt="Image 1" className="w-1/5 rounded" />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Real-time Vehicle Monitoring</h2>
                  <p> Lorem ipsum dolor sit amet. Ut voluptatem enim . Lorem ipsum dolor sit amet. Ut voluptatem enim .
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg justify-center">
                <img src="https://i.imgur.com/unCJmlu.png" alt="Image 2" className="w-1/5 rounded" />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Driver Behavior Analysis</h2>
                  <p>Lorem ipsum dolor sit amet. Ut voluptatem enim . Lorem ipsum dolor sit amet. Ut voluptatem enim .</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg justify-center">
                <img src="https://i.imgur.com/Lh1Q1Kf.png" alt="Image 3" className="w-1/5 rounded" />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Predictive Maintenance Alerts</h2>
                  <p>Lorem ipsum dolor sit amet. Ut voluptatem enim . Lorem ipsum dolor sit amet. Ut voluptatem enim .</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg justify-center">
                <img src="https://i.imgur.com/JrxSpDh.png" alt="Image 4" className="w-1/5 rounded" />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Data Analytics & Reports</h2>
                  <p>Lorem ipsum dolor sit amet. Ut voluptatem enim . Lorem ipsum dolor sit amet. Ut voluptatem enim .</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className='relative bg-black bg-cover bg-center h-screen text-white py-16'
          style={{ backgroundImage: `url('https://i.imgur.com/UbIC1va.png')` }}
        >

        </section>
        <section
  className="relative bg-black bg-cover bg-center h-screen text-white py-16"
  style={{ backgroundImage: `url('https://i.imgur.com/RLFwW3d.png')` }}
>
  <div className="text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">How It Works</h1>
  </div>
  <div className="flex justify-center h-full">
    <div className="w-1/2"></div>
    <div className="w-1/2 flex flex-col space-y-16">
      <div className="flex items-center relative">
        <div className="bg-my-green text-black w-16 h-16 rounded-full flex items-center justify-center font-bold relative z-10 flex-shrink-0">1</div>
        <div className="ml-4 flex-grow">
          <h2 className="text-2xl font-bold">Install OBD-II Device</h2>
          <p className="text-lg">
            Connect the OBD-II device to your car’s diagnostic port. Ensure it’s securely attached.
          </p>
        </div>
        <div className="absolute left-8 top-16 w-px h-32 border-l-2 border-dotted border-white"></div>
      </div>
      <div className="flex items-center relative">
        <div className="bg-my-green text-black w-16 h-16 rounded-full flex items-center justify-center font-bold relative z-10 flex-shrink-0">2</div>
        <div className="ml-4 flex-grow">
          <h2 className="text-2xl font-bold">Sync with App</h2>
          <p className="text-lg">
            Open the app on your smartphone and sync it with the OBD-II device using Bluetooth.
          </p>
        </div>
        <div className="absolute left-8 top-16 w-px h-32 border-l-2 border-dotted border-white"></div>
      </div>
      <div className="flex items-center relative">
        <div className="bg-my-green text-black w-16 h-16 rounded-full flex items-center justify-center font-bold relative z-10 flex-shrink-0">3</div>
        <div className="ml-4 flex-grow">
          <h2 className="text-2xl font-bold">Monitor & Analyze</h2>
          <p className="text-lg">
            Monitor real-time data and analyze vehicle performance using the app’s dashboard.
          </p>
        </div>
        <div className="absolute left-8 top-16 w-px h-32 border-l-2 border-dotted border-white"></div>
      </div>
      <div className="flex items-center relative">
        <div className="bg-my-green text-black w-16 h-16 rounded-full flex items-center justify-center font-bold relative z-10 flex-shrink-0">4</div>
        <div className="ml-4 flex-grow">
          <h2 className="text-2xl font-bold">Receive Alerts and Reports</h2>
          <p className="text-lg">
            Get instant alerts and detailed reports on your car’s performance and maintenance needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="h-screen bg-black flex items-center justify-center p-4 relative">
  <div className="flex w-full max-w-screen-lg mx-auto">
    {/* Left Side */}
    <div className="w-1/2 pr-8">
      <div className="text-left mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold p-3 text-white">Vehicle</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-my-green p-3">Maintenance</h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold p-3 text-white">Made Easy</h3>
      </div>
      
      {/* Boxes with Icons and Text */}
      <div className="space-y-4">
        <div className="flex items-center bg-my-green p-4 rounded-lg shadow-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="text-lg">Understand the Issue</p>
        </div>
        <div className="flex items-center bg-my-green p-4 rounded-lg shadow-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="text-lg">Receive & Fix</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="absolute right-0 top-0 h-full flex items-center">
    <img src="https://i.imgur.com/7OSR4Lf.png" alt="Maintenance Image" className="h-full w-auto" />
  </div>
</section>


<section className="relative h-screen bg-gray-600 flex flex-col items-center justify-center text-white p-4">
  {/* Background Image Left */}
  <div className="absolute top-0 left-0 h-full w-1/6 bg-contain bg-center" style={{ backgroundImage: `url('https://i.imgur.com/ef0GfOK.png')` }}></div>
  
  {/* Background Image Right */}
  <div className="absolute top-0 right-0 h-full w-1/6 bg-contain bg-center" style={{ backgroundImage: `url('https://i.imgur.com/NtoW9SY.png')` }}></div>
  
  <div className="relative z-10 text-center mb-8">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Pricing and Plan</h1>
    <p className="text-lg md:text-xl lg:text-2xl">Choose the perfect plan for you, with options to fit every need.</p>
  </div>
  
  <div className="relative z-10 mb-8">
    <button className="text-white bg-transparent border-2 border-my-green px-10 py-3 rounded-lg text-lg font-semibold hover:bg-my-green hover:text-white transition">
      25% Discount
    </button>
  </div>

  <div className="relative z-10 flex flex-col lg:flex-row gap-0 max-w-screen-lg mx-auto">
    {/* Pricing Card 1 */}
    <div className="bg-my-green text-white rounded-lg shadow-lg p-6 flex flex-col items-center relative transform transition-transform hover:scale-105 focus-within:scale-105 z-10">
      <div className="w-full bg-my-green p-4 rounded-lg text-center">
        <div className="w-full p-2 bg-white rounded-lg text-center text-black">
          <h2 className="text-xl font-bold">Basic Plan</h2>
        </div>
        <p className="text-lg font-bold mt-2 relative">
          <span className="text-2xl font-extrabold">USD 19.99</span>
          <span className="absolute top-0 -right-10 text-sm line-through text-black"> 29.99</span>
        </p>
      </div>
      <div className="flex flex-col items-center p-6">
        <ul className="list-disc list-inside mb-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <div className="w-full border-t-2 border-my-green mb-4"></div>
        <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm font-semibold hover:bg-green-600 transition">Buy Now</button>
      </div>
    </div>

    {/* Pricing Card 2 (Focused) */}
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center relative transform scale-105 z-20">
      <div className="w-full bg-my-green px-10 p-3 rounded-lg text-center ">
        <h2 className="text-xl font-bold text-white">Standard Plan</h2>
        <p className="text-lg font-bold mt-2 relative text-white">
          <span className="text-2xl font-extrabold">USD 39.99</span>
          <span className="absolute top-0 -right-10 text-sm line-through text-black">49.99</span>
        </p>
      </div>
      <div className="flex flex-col items-center p-6">
        <ul className="list-disc list-inside mb-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <div className="w-full border-t-2 border-my-green mb-4"></div>
        <button className="bg-my-green text-white px-6 py-2 rounded-3xl text-sm font-semibold hover:bg-green-600 transition">Buy Now</button>
      </div>
    </div>

    {/* Pricing Card 3 */}
    <div className="bg-my-green text-white rounded-lg shadow-lg p-6 flex flex-col items-center relative transform transition-transform hover:scale-105 focus-within:scale-105 z-10">
      <div className="w-full bg-my-green p-4 rounded-lg text-center">
        <div className="w-full p-2 bg-white rounded-lg text-center text-black">
          <h2 className="text-xl font-bold">Premium Plan</h2>
        </div>
        <p className="text-lg font-bold mt-2 relative">
          <span className="text-2xl font-extrabold">USD 59.99</span>
          <span className="absolute top-0 -right-8 text-sm line-through text-black">69.99</span>
        </p>
      </div>
      <div className="flex flex-col items-center p-6">
        <ul className="list-disc list-inside mb-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
        <div className="w-full border-t-2 border-my-green mb-4"></div>
        <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm font-semibold hover:bg-green-600 transition">Buy Now</button>
      </div>
    </div>
  </div>
</section>
       <section className="h-screen bg-gray-700 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Section 7</h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">This is a description for Section 7.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
