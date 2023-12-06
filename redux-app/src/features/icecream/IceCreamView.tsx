import React from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView=()=> {
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useAppDispatch()
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