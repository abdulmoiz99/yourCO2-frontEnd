import React from 'react'
import Sidebar from '../componenets/Sidebar/Sidebar'
import NavBar from '../componenets/NavBar/AdminNavbar'
import CardLineChart from '../componenets/Cards/CardLineChart'
import HeaderStats from '../componenets/Headers/HeaderStats'
import CardProfile from '../componenets/Cards/CardProfile'

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
export class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <NavBar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardLineChart />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <CardProfile />
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                {/* <CardPageVisits /> */}
                <button
                  className="bg-lightBlue-500 text-white active:bg-blueGray-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Upload Report
                </button>
              </div>

              <div className="w-full xl:w-4/12 px-4">
                {/* <CardSocialTraffic /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
