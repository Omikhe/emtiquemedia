import Navbar from "./components/navbar"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar />

    
      
      {/* Hero */}
    <section className="bg-[url('/bg.png')] min-h-screen flex items-center justify-center px-4 sm:px-8 lg:x-16 relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
            <div className="relative">
              <div className="w-4 h-4 bg-[#F37121]/8 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F37121] rounded-full animate-pulse"></div>
              </div>
            </div>
            <span>Currently Accepting New Clients</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight lg:w-2xl">
            Your Exclusive Design Partners for Entrepreneurs and New Ventures
          </h1>
          
          {/* Subheading */}
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-tight lg:w-[500px]">
            Beyond aesthetics, we tackle your company's critical branding obstacles
          </h2>
          
          {/* CTA Button */}
          <div className="pt-4">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-b from-[#5E646D] to-[#222831] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  )
}