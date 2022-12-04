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
        <div className='item_count_children'>
            <div className='qty_items'>
                <span>Cantidad:</span>
                <button variant="text" onClick={decrement}>-</button>
                {
                    count > 1 || count === 0
                    ?<span>{count} Unidades</span>
                    :<span>{count} Unidad</span>
                }
                <button variant="text" onClick={increment}>+</button>
                
            </div>
            {
                stock && count
                ? <button className="buyItem-bt" variant="contained" onClick={() => onAdd(count)}>Sumar al carrito</button>
                : <button className="buyItem-bt" variant="contained" disabled>Sumar al carrito</button>
            }
            
        </div>
    );
}

export default ItemCount;