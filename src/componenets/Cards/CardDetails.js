import React from 'react'
import businessImage from '../../assets/img/Business.jpg'
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
export class CardDetails extends React.Component {
  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-1">
          <div className="px-6">
            <div className="text-center mt-5">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Business Info
              </h3>
            </div>
            <div className="text-xl  mt-5">
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> Business:{' '}
                {this.props.businessName}
              </div>
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> Building name:{' '}
                {this.props.buildingName}
              </div>
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> Number of floors:{' '}
                {this.props.numberOfFloors}
              </div>
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> Area of floors:{' '}
                {this.props.areaOfBuilding}
              </div>
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> Address building:{' '}
                {this.props.address}
              </div>
            </div>
            <hr className="my-4 md:min-w-full" />
            <div className="text-center mt-5">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Carbon Footprint
              </h3>
            </div>
            <div className="text-xl  mt-5">
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> Grid Carbon
                Footprint: {this.props.realtimeFootprint}
              </div>
              <div className="mb-4 text-blueGray-600">
                <FontAwesomeIcon icon={faArrowCircleRight} /> BEIS Carbon
                Footprint: {this.props.beisFootprint}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
