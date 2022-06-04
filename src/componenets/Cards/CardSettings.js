import React from 'react'
import { getStorage } from '../../shared/LoacalStorage'

// components

export class CardSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      BusinessName: '',
      BuildingName: '',
      NumberOfFloors: '',
      AreaOfBuilding: '',
      Address: '',
      StartDate: '',
      EndDate: '',
    }
  }
  handleSubmission = async (event) => {
    this.setState({ displayAlert: false })
    const {
      BusinessName,
      BuildingName,
      NumberOfFloors,
      AreaOfBuilding,
      Address,
      StartDate,
      EndDate,
    } = this.state
    event.preventDefault()
    let token = getStorage('token')
    const body = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        // BusinessName: emailAddress,
        // BuildingName: password,
        // NumberOfFloors: password,
        // AreaOfBuilding: password,
        // BuildingName: password,
        // BuildingName: password,
        // BuildingName: password,
      }),
    }
    let url = `https://youco2api.azurewebsites.net/api/Business/add?BusinessName=${BusinessName}&BuildingName=${BuildingName}&NumberOfFloors=${NumberOfFloors}&AreaOfBuilding=${AreaOfBuilding}&Address=${Address}&StartDate=${StartDate}&EndDate=${EndDate} `
    const response = await fetch(url, body)
    const data = await response.json()
    // when response is sucess
    if (data.success === true) {
      window.location.href = '/Dashboard'
    } else if (data.success === false) {
      this.setState({ displayAlert: true, AlertMessage: data.errors[0] })
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
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
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Generate
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={this.handleSubmission}>
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
                      Excel File
                    </label>
                    <input
                      required
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
