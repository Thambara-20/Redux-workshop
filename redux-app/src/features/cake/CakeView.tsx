import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './CakeSlice';
import { useState } from 'react';

const CakeView = () => {
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const [value, setValue] = useState(0);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>CakeView</div>
            <div>Number of Cakes: {numOfCakes}</div>
            <button onClick={()=> dispatch(ordered(1))}>Order Cake</button>
            <input type='number' value={value} placeholder='restock amount' onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick ={()=> dispatch(restocked(value))}>Restock Cake</button>
        </div>
    );
};

export default CakeView;

