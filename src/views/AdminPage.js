import React from 'react'
import Sidebar from '../componenets/Sidebar/Sidebar'
import NavBar from '../componenets/NavBar/AdminNavbar'
import CarbonGraph from '../componenets/Cards/CarbonGraph'

import HeaderStats from '../componenets/Headers/HeaderStats'
import FooterAdmin from '../componenets/Footers/FooterAdmin'
import { IsAdmin } from '../shared/LoacalStorage'
import { CardTable } from '../componenets/Cards/CardTable'
import HeaderBar from '../componenets/Headers/HeaderBar'

export class AdminPage extends React.Component {
  render() {
    return (
      <>
        <Sidebar isAdmin={IsAdmin()}  />
        <div className="relative md:ml-64 bg-blueGray-100">
          <NavBar PageName="Admin Page" />
          {/* Header */}
          <HeaderBar />

          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
              <CardTable />
            </div>
          </div>
        </div>
        <FooterAdmin />
      </>
    )
  }
}
