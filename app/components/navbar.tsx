import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 xl:px-32 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/emtiquemedia.svg" 
            width={125} 
            height={26} 
            alt="Emtique Media Logo"
            className="h-auto w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li>
              <Link href="/successes" className="hover:text-gray-900 transition-colors duration-200">
                Successes
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-gray-900 transition-colors duration-200">
                Work
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-900 transition-colors duration-200">
                FAQ
              </Link>
            </li>
          </ul>
          
          {/* CTA Button */}
          <button className="px-6 py-3 bg-gradient-to-b from-[#5E646D] to-[#222831] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm font-medium whitespace-nowrap">
            Packages and Prices
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}