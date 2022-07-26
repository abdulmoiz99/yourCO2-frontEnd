import React from 'react'
import Sidebar from '../componenets/Sidebar/Sidebar'
import NavBar from '../componenets/NavBar/AdminNavbar'
import CarbonGraph from '../componenets/Cards/CarbonGraph'

import { CardSettings } from '../componenets/Cards/CardSettings'
import FooterAdmin from '../componenets/Footers/FooterAdmin'
import { getStorage, IsAdmin } from '../shared/LoacalStorage'
import HeaderBar from '../componenets/Headers/HeaderBar'
import { CardDetails } from '../componenets/Cards/CardDetails'

export class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { report: [], loading: true }
    this.state = {
      businessName: '....',
      buildingName: '....',
      numberOfFloors: '....',
      areaOfBuilding: '....',
      address: '....',
      beisFootprint: '....',
      realtimeFootprint: '....',
    }
    this.state = { reportLoaded: false }
  }
  populateBusinessInfo = () => {
    if (this.state.report && this.state.report.result != null) {
      this.setState({
        reportLoaded: true,
        businessName: this.state.report.result.businessInfo.businessName,
        buildingName: this.state.report.result.businessInfo.buildingName,
        numberOfFloors: this.state.report.result.businessInfo.numberOfFloors,
        areaOfBuilding: this.state.report.result.businessInfo.areaOfBuilding,
        address: this.state.report.result.businessInfo.address,
        beisFootprint: this.state.report.result.beisFootprint.toFixed(2),
        realtimeFootprint: this.state.report.result.realtimeFootprint.toFixed(
          2,
        ),
      })
    }
  }
  componentDidMount() {
    this.populateGraphData()
  }
  UpdateReportStatus = () => {
    this.setState({ reportLoaded: true })
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
        this.populateBusinessInfo()
      },
    )
    // }
  }
  render() {
    return (
      <>
        <Sidebar isAdmin={IsAdmin()} />
        <div className="relative md:ml-64 bg-blueGray-100">
          <NavBar PageName="Dashboard" />
          {/* Header */}
          <HeaderBar />

          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            {this.state.reportLoaded ? (
              <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                  <CarbonGraph reportData={this.state.report} />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                  <CardDetails
                    businessName={this.state.businessName}
                    buildingName={this.state.buildingName}
                    numberOfFloors={this.state.numberOfFloors}
                    areaOfBuilding={this.state.areaOfBuilding}
                    address={this.state.address}
                    realtimeFootprint={this.state.realtimeFootprint}
                    beisFootprint={this.state.beisFootprint}
                  />
                </div>
              </div>
            ) : null}
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <CardSettings
                  UpdateReportStatus={this.UpdateReportStatus.bind(this)}
                  onSelect={this.populateGraphData.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <FooterAdmin />
      </>
    )
  }
}
