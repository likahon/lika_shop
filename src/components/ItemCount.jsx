import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <button variant="text" onClick={increment}>+</button>
            <span>{count}</span>
            <button variant="text" onClick={decrement}>-</button>
            {
                stock && count
                ? <button className="buyItem-bt" variant="contained" onClick={() => onAdd(count)}>Sumar al carrito</button>
                : <button className="buyItem-bt" variant="contained" disabled>Sumar al carrito</button>
            }
            
        </div>
    );
}

export default ItemCount;