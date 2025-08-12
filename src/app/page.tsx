import React from "react";
import { FacebookLoginButton } from "@/components/FacebookLoginButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-green-700">
                COMMON JAPAN
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connecting Foreign Workers with
            <span className="text-green-600">
              {" "}
              Japan&apos;s Primary Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Bridge the gap between skilled foreign workers and Japan&apos;s
            agricultural, forestry, and fishery sectors. Join our platform to
            discover meaningful employment opportunities in Japan&apos;s
            essential industries.
          </p>

          <div className="flex justify-center">
            {/* implement email registration form */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Bridging Opportunities
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              COMMON JAPAN addresses the critical labor shortage in Japan&apos;s
              primary industries while providing foreign residents with stable,
              meaningful employment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                For Foreign Workers
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Access to stable employment in essential industries
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Learn traditional Japanese agricultural techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Build connections with local communities
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                For Japanese Employers
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Access to motivated and skilled workforce
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Solve critical labor shortage issues
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Support sustainable industry growth
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Primary Industries We Serve
            </h3>
            <p className="text-lg text-gray-600">
              Connecting talent across Japan&apos;s essential primary sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Agriculture
              </h4>
              <p className="text-gray-600">
                Rice cultivation, vegetable farming, fruit orchards, and modern
                agricultural techniques
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Forestry
              </h4>
              <p className="text-gray-600">
                Sustainable forest management, timber harvesting, and
                environmental conservation
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Fishery
              </h4>
              <p className="text-gray-600">
                Coastal fishing, aquaculture, seafood processing, and marine
                resource management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Join COMMON JAPAN?
          </h3>
          <p className="text-xl text-green-100 mb-10">
            Be the first to know when we launch. Connect your Facebook account
            to stay updated on opportunities and platform news.
          </p>
          <FacebookLoginButton variant="white" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">COMMON JAPAN</h5>
              <p className="text-gray-400">
                Bridging opportunities between foreign workers and Japan&apos;s
                primary industries.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Industries</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Agriculture</li>
                <li>Forestry</li>
                <li>Fishery</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Contact</h6>
              <p className="text-gray-400">
                Email: info@commonjapan.com
                <br />
                Coming Soon: 2025
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 COMMON JAPAN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
