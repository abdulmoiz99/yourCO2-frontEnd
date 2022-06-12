import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faPencilAlt,
  faStreetView,
} from '@fortawesome/free-solid-svg-icons'
import { getStorage } from '../../shared/LoacalStorage'
import CarbonGraph from './CarbonGraph'
import { CardProfile } from './CardProfile'

// components
export class CardTable extends React.Component {
  static color = 'light'
  constructor(props) {
    super(props)
    this.state = { reportList: [], loading: true }
    this.state = {
      businessName: '....',
      buildingName: '....',
      numberOfFloors: '....',
      areaOfBuilding: '....',
      address: '....',
    }
    this.state = { reportLoaded: false }
  }
  componentDidMount() {
    this.populateTableData()
  }
  populateTableData = async () => {
    let token = getStorage('token')
    const response = await fetch(
      'https://youco2api.azurewebsites.net/api/Business/reports-list',
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    const data = await response.json()
    this.setState({
      reportList: data.result,
      loading: false,
    })
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
        report: data.result,
        loading: false,
      },
      () => {
        this.populateBusinessInfo()
      },
    )
    // }
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  handleEdit = (reportId) => {
    console.log(reportId)
  }

  reportReportList(reportList) {
    return (
      <>
        {reportList?.map((report) => (
          <tr key={report.reportId}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
              <span
                className={
                  'ml-3 font-bold ' +
                  +(this.color === 'light' ? 'text-blueGray-600' : 'text-white')
                }
              >
                {report.business}
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {report.building}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {report.contactName}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <button
                id={report.reportId}
                type="button"
                onClick={() => this.handleEdit(report.reportId)}
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </td>
          </tr>
        ))}
      </>
    )
  }

  render() {
    return (
      <>
        <div
          className={
            'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
            (this.color === 'light'
              ? 'bg-white'
              : 'bg-lightBlue-900 text-white')
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    'font-semibold text-lg ' +
                    (this.color === 'light'
                      ? 'text-blueGray-700'
                      : 'text-white')
                  }
                >
                  User Reports
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                      (this.color === 'light'
                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                    }
                  >
                    Business
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                      (this.color === 'light'
                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                    }
                  >
                    Building
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                      (this.color === 'light'
                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                    }
                  >
                    Contact Name
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                      (this.color === 'light'
                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                    }
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{this.reportReportList(this.state.reportList)}</tbody>
            </table>
          </div>
        </div>
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CarbonGraph reportData={this.state.report} />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <CardProfile
                  businessName={this.state.businessName}
                  buildingName={this.state.buildingName}
                  numberOfFloors={this.state.numberOfFloors}
                  areaOfBuilding={this.state.areaOfBuilding}
                  address={this.state.address}
                />
              </div>
      </>
    )
  }
}