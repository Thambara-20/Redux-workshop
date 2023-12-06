import React from 'react'
import { useSelector } from 'react-redux'

const IceCreamView=()=> {
  const numOfIceCreams = useSelector((state: any) => state.iceCream.numOfIceCreams)
  return (
    <div>

    <div>IceCream</div>
    <div>Number of IceCreams {numOfIceCreams}</div>
    <button>order iceCreams</button>
    <button>restock iceCreams</button>
    </div>
  )
}

export default IceCreamView