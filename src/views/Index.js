/*eslint-disable*/
import React from 'react'
import { Link } from 'react-router-dom'

import IndexNavbar from '../componenets/NavBar/IndexNavbar'
import Footer from '../componenets/Footers/Footer'
import '../assets/styles/tailwind.css'
import indexImage from '../assets/img/pattern_react.png'
import CarbonGraph from '../componenets/Cards/CarbonGraph'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'

export default function Index() {
  return (
    <>
      <Helmet>
        <script src="./mapdata.js"></script>
        <script src="./ukmap.js"></script>
      </Helmet>
      {/* <ScriptTag type="text/javascript" src="./mapdata.js" />
      <ScriptTag type="text/javascript" src="./ukmap.js" /> */}
      <IndexNavbar fixed />
      <section className="header relative pt-20 items-center flex h-screen max-h-1000-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                What is your businesses real carbon footprint
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Generate a FREE REPORT which provides your business with its
                carbon footprint based on the local real time emissions of the
                electricity it has consumed over every half hour for the past
                year.
              </p>
              <div className="mt-12">
                <Link
                  to="/Auth/Register"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </Link>
                <Link
                  to="/"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Sample Report
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 b-auto right-0 pt-16 px-4 py-20 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          id="map"
        ></div>
        {/* <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={indexImage}
          alt=".."
        />
        <div>
          <div id="map"></div>
        </div> */}
      </section>
      <section className="mt-1 md:mt-1 pb-1 relative bg-blueGray-100">
        <div className="container mx-auto px-4 pb-30 pt-20"></div>

        <div className="container mx-auto px-4 pb-32 pt-30">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-16 md:px-8">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-1 mb-6 shadow-lg rounded-full bg-white">
                  <FontAwesomeIcon icon={faChartArea} />
                </div>
                <h3 className="text-3xl font-semibold">
                  See the last months regional electrical emissions data vs the
                  static emissions commonly used
                </h3>
                {/* <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  carbon factor.
                </p> */}
                {/* <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Calculations
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i></i>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-0 pt-24 md:pt-0">
              <CarbonGraph />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-14">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">About</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              The carbon emission from the electricity that your business uses
              is likely to be the largest contributor to your businesses carbon
              footprint.
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              To properly understand the carbon content of the electricity that
              you use, you need to understand carbon content of the electricity
              that is being generated in real time. This is because the carbon
              content of electricity changes significantly throughout the day,
              the week and at different times of the year. This is predominately
              due the changes in amount of sunshine and wind that is available
              to renewable energy generators to convent these natural resources
              to electricity.
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Your businesses electrical consumption also changes based on
              different amounts of heating, cooling, lighting and working
              patterns throughout the day, the weekend, and the winter and
              summer.
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              The result of the changing carbon content of electricity, and your
              business using more or less electricity at certain times means
              that calculating the carbon footprint of your businesses
              electricity use by using an average carbon intensity can provide a
              very misleading and incorrect output. Having accuracy when
              accounting for your carbon footprint is absolutely key to
              delivering your businesses Net Zero ambitions.
            </p>
            <h3 className="text-3xl font-semibold">
              Try it and see how much difference there is when you account in
              real time.
            </h3>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-10 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next projec!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link
                  to="/Auth/Register"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </Link>
                <Link
                  to="/"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Sample Report
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
