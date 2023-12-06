import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
import { useState } from 'react';

const CakeView = () => {
    const numOfCakes = useSelector((state: any) => state.cake.numOfCakes);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

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

