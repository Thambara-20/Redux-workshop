import { useSelector } from 'react-redux';

const CakeView = () => {
    const numOfCakes = useSelector((state: any) => state.cake.numOfCakes);

    return (
        <div>
            <div>CakeView</div>
            <div>Number of Cakes: {numOfCakes}</div>
            <button>Order Cake</button>
            <button>Restock Cake</button>
        </div>
    );
};

export default CakeView;

