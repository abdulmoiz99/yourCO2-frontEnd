import React from 'react'
import { getStorage } from '../../shared/LoacalStorage'
import Alert from '../Alerts/Alert'
import axios from 'axios'
import Select from 'react-select'

const options = [
  { value: '1', label: 'North Scotland' },
  { value: '2', label: 'South Scotland' },
  { value: '3', label: 'North West England' },
  { value: '4', label: 'North East England' },
  { value: '5', label: 'Yorkshire' },
  { value: '6', label: 'North Wales' },
  { value: '7', label: 'South Wales' },
  { value: '8', label: 'West Midlands' },
  { value: '9', label: 'East Midlands' },
  { value: '10', label: 'East England' },
  { value: '11', label: 'South West England' },
  { value: '12', label: 'South England' },
  { value: '13', label: 'London' },
  { value: '14', label: 'South East England' },
  { value: '15', label: 'England' },
  { value: '16', label: 'Scotland' },
  { value: '17', label: 'Wales' },
]
// components

export class CardSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayAlert: false, AlertMessage: 'dasdasd' }
    this.state = {
      BusinessName: '',
      BuildingName: '',
      NumberOfFloors: '',
      AreaOfBuilding: '',
      Address: '',
      RegionId: '',
      StartDate: '',
      EndDate: '',
      selectedFile: null,
    }
  }
  handleSubmission = async (event) => {
    event.preventDefault()
    this.setState({ displayAlert: false })
    const {
      BusinessName,
      BuildingName,
      NumberOfFloors,
      AreaOfBuilding,
      Address,
      StartDate,
      EndDate,
      selectedFile,
      RegionId,
    } = this.state
    let token = getStorage('token')
    let formData = new FormData()
    formData.append('fromFile', selectedFile.name)
    formData.append('file', selectedFile)
    try {
      let url = `https://youco2api.azurewebsites.net/api/Business/add?BusinessName=${BusinessName}&BuildingName=${BuildingName}&NumberOfFloors=${NumberOfFloors}&AreaOfBuilding=${AreaOfBuilding}&RegionId=${RegionId}&Address=${Address}&StartDate=${StartDate}&EndDate=${EndDate} `
      const resp = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (resp.data.success === true) {
        this.props.onSelect(event)
        this.props.UpdateReportStatus(event)
      } else if (resp.data.success === false) {
        this.setState({ displayAlert: true, AlertMessage: resp.data.errors[0] })
      }
    } catch (e) {
      console.log(e)
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleFileChange = (e) => {
    this.setState({ ...this.state, selectedFile: e.target.files[0] })
  }
  renderAlert = () => {
    if (this.state.displayAlert) {
      return (
        <>
          <Alert message={this.state.AlertMessage} />
        </>
      )
    }
  }
  handleRegion = (selectedOption) => {
    this.setState({ RegionId: selectedOption.value })
  }
  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add Report
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={this.handleSubmission}>
              {this.renderAlert()}
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Business Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Business Name
                    </label>
                    <input
                      required
                      name="BusinessName"
                      value={this.state.BusinessName}
                      onChange={this.handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Building name
                    </label>
                    <input
                      required
                      name="BuildingName"
                      value={this.state.BuildingName}
                      onChange={this.handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Number of Floors
                    </label>
                    <input
                      required
                      name="NumberOfFloors"
                      value={this.state.NumberOfFloors}
                      onChange={this.handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Area of Building
                    </label>
                    <input
                      required
                      name="AreaOfBuilding"
                      value={this.state.AreaOfBuilding}
                      onChange={this.handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Start Date
                    </label>
                    <input
                      required
                      name="StartDate"
                      value={this.state.StartDate}
                      onChange={this.handleChange}
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      End Date
                    </label>
                    <input
                      required
                      name="EndDate"
                      value={this.state.EndDate}
                      onChange={this.handleChange}
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      required
                      name="Address"
                      value={this.state.Address}
                      onChange={this.handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Region
                    </label>
                    <Select options={options} onChange={this.handleRegion} />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Excel File
                    </label>
                    <input
                      required
                      onChange={this.handleFileChange}
                      type="file"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
