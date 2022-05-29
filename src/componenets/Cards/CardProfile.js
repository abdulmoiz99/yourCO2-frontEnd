import React from 'react'
import businessImage from '../../assets/img/Business.jpg'
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'
export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={businessImage}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Business Info
            </h3>
          </div>
          <div className="text-xl  mt-10">
            <div className="mb-4 text-blueGray-600">
              <FontAwesomeIcon icon={faArrowCircleRight} /> Business: ......
            </div>
            <div className="mb-4 text-blueGray-600">
              <FontAwesomeIcon icon={faArrowCircleRight} /> Building name:
              ......
            </div>
            <div className="mb-4 text-blueGray-600">
              <FontAwesomeIcon icon={faArrowCircleRight} /> Number of: ......
            </div>
            <div className="mb-4 text-blueGray-600">
              <FontAwesomeIcon icon={faArrowCircleRight} /> Area of floors:
              ......
            </div>
            <div className="mb-4 text-blueGray-600">
              <FontAwesomeIcon icon={faArrowCircleRight} /> Address building:
              ......
            </div>
            <div className="mb-4 text-blueGray-600">
              <FontAwesomeIcon icon={faArrowCircleRight} /> Year of: ......
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
