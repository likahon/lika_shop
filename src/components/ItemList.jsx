import Item from "./Item";


const ItemList = ({items, buyItem}) => {

    return (
      <>
      {
        items.length > 0
        ? items.map(item => (
            <Item 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                stock={item.stock}
                pictureUrl={item.pictureUrl}
                idCategory={item.idCategory}
                buyItem={() => buyItem(item.stock)}
            />

        ))

        : <h1>Cargando productos.</h1>
      }
      </>
    )
  }
  
  export default ItemList;