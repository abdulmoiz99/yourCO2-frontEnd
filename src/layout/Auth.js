import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../componenets/Auth/Login'
// import Register from './layout/Auth'

// components

// import FooterSmall from "components/Footers/FooterSmall.js";

// views
import backgroundImage from '../assets/img/register_bg_2.png'

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: { backgroundImage },
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/register" element={<Auth />}></Route>
          </Routes>

          {/* <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch> */}
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  )
}
