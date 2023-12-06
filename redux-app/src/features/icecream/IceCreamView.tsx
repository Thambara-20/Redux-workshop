import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView=()=> {
  const numOfIceCreams = useSelector((state: any) => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>

    <div>IceCream</div>
    <div>Number of IceCreams {numOfIceCreams}</div>
    <button onClick={()=>dispatch(ordered(1))}>order iceCreams</button>
    <button onClick={()=>dispatch(restocked(1))}>restock iceCreams</button>
    </div>
  )
}

export default IceCreamView