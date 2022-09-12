// import React, { Link } from 'react'
import DestinationHightlight from '../Components/Destination/DestinationHightlight'
import DestinationTrip from '../Components/Destination/DestinationTrip'
import Navigation from '../Components/Navigation/Navigation'
import "../Routes/routes.css"

function trips() {
  return (
    <>
      <DestinationHightlight />
      <Navigation />
      <DestinationTrip/>

    </>

  )
}

export default trips