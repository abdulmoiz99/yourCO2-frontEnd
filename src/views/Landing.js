import React from 'react'
import Alert from '../componenets/Alerts/Alert'
import Footer from '../componenets/Footers/Footer'
import Navbar from '../componenets/NavBar/AuthNavbar'
import { getStorage } from '../shared/LoacalStorage'

export class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      message: '',
    }
    this.state = { displayAlert: false, AlertMessage: '', success: true }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmission = async (event) => {
    this.setState({ displayAlert: false })
    const { fullName, email, message } = this.state
    event.preventDefault()
    let token = getStorage('token')

    const body = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        message: message,
      }),
    }
    const response = await fetch(
      'https://youco2api.azurewebsites.net/api/Authentication/contact',
      body,
    )
    const data = await response.json()
    // when response is sucess
    if (data.success === true) {
      this.setState({
        displayAlert: true,
        success: true,
        AlertMessage: 'Your respnose has been submited successfully',
      })
    } else if (data.success === false) {
      this.setState({
        displayAlert: true,
        success: false,
        AlertMessage: data.errors[0],
      })
    }
  }
  renderAlert = () => {
    if (this.state.displayAlert) {
      return (
        <>
          <Alert message={this.state.AlertMessage} success={this.state.success} />
        </>
      )
    }
  }

  render() {
    return (
      <>
        <Navbar trasparent />
        <main>
          <section className="pb-20 relative block bg-blueGray-800">
            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
              <div className="flex flex-wrap text-center justify-center">
                {/* <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something better with us!
                </h2>
              </div> */}
              </div>
            </div>
          </section>
          <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <div className="flex-auto p-5 lg:p-10">
                      {/* <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4> */}
                      {/* <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p> */}
                      <form onSubmit={this.handleSubmission}>
                        {this.renderAlert()}

                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Full Name
                          </label>
                          <input
                            placeholder="Full Name"
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            required
                            name="fullName"
                            value={this.state.fullName}
                            onChange={this.handleChange}
                            autoComplete="on"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                            required
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            autoComplete="on"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type a message..."
                            required
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            autoComplete="on"
                          />
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }
}
