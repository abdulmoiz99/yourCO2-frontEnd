import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import backgroundImageFile from '../../assets/img/register_bg_2.png'

import gitHub from '../../assets/img/github.svg'
import google from '../../assets/img/google.svg'

import Navbar from '../NavBar/AuthNavbar'
import Alert from '../Alerts/Alert'
import { setStorage, clearStorage } from "../../shared/LoacalStorage"

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { emailAddress: '', password: '' }
    this.state = { displayAlert: false, AlertMessage: '' }
    clearStorage();
  }

  handleSubmission = async (event) => {
    this.setState({displayAlert: false})     
    const { emailAddress, password } = this.state
    event.preventDefault()
    const body = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailAddress: emailAddress,
        password: password,
      }),
    }

    const response = await fetch(
      'https://youco2api.azurewebsites.net/api/Authentication/login',
      body,
    )
    const data = await response.json()
    // when response is sucess
    if (data.success === true) {
      setStorage('token', data.result.token.code) // save value in local storage
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
  renderAlert = () => {
    if (this.state.displayAlert) {
      return <>
        <Alert message = {this.state.AlertMessage}/> 
      </>
    }
  }

  render() {
    return (
      <>
        <Navbar transparent />
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{ backgroundImage: `url(${backgroundImageFile})` }}
          ></div>
          <div className="container mx-auto px-5 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-5">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img alt="..." className="w-5 mr-1" src={gitHub} />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img alt="..." className="w-5 mr-1" src={google} />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form onSubmit={this.handleSubmission}>
                      {this.renderAlert()}
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          name="emailAddress"
                          value={this.state.emailAddress}
                          onChange={this.handleChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          autoComplete="on"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          required
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          autoComplete="on"
                        />
                      </div>
                      {/* <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Remember me
                          </span>
                        </label>
                      </div> */}

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-blueGray-200"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/auth/register" className="text-blueGray-200">
                      <strong>Create new account</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
