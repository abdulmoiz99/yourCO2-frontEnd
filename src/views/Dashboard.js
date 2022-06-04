import React from 'react'
import Sidebar from '../componenets/Sidebar/Sidebar'
import NavBar from '../componenets/NavBar/AdminNavbar'
import CardLineChart from '../componenets/Cards/CardLineChart'
import HeaderStats from '../componenets/Headers/HeaderStats'
import CardProfile from '../componenets/Cards/CardProfile'
import { CardSettings } from '../componenets/Cards/CardSettings'
import FooterAdmin from '../componenets/Footers/FooterAdmin'

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
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <CardSettings />
              </div>
            </div>
          </div>
        </div>
        <FooterAdmin />
      </>
    )
  }
}
