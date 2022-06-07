import React from 'react'
import Sidebar from '../componenets/Sidebar/Sidebar'
import NavBar from '../componenets/NavBar/AdminNavbar'
import CarbonGraph from '../componenets/Cards/CarbonGraph'

import HeaderStats from '../componenets/Headers/HeaderStats'
import { CardProfile } from '../componenets/Cards/CardProfile'
import { CardSettings } from '../componenets/Cards/CardSettings'
import FooterAdmin from '../componenets/Footers/FooterAdmin'
import { getStorage } from '../shared/LoacalStorage'

export class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { report: [], loading: true }
  }
  componentDidMount() {
    this.populateGraphData()
  }
  populateGraphData = async () => {
    let token = getStorage('token')
    const response = await fetch(
      'https://youco2api.azurewebsites.net/api/Business/reports',
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    const data = await response.json()
    this.setState(
      {
        report: data,
        loading: false,
      },
      () => {
        // console.log(data.result)
      },
    )
    // }
  }
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
                <CarbonGraph reportData={this.state.report.result} />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <CardProfile />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <CardSettings onSelect={this.populateGraphData.bind(this)} />
              </div>
            </div>
          </div>
        </div>
        <FooterAdmin />
      </>
    )
  }
}
