import Item from "./Item";


const ItemList = ({items}) => {

    return (
      <>
      {
        items.length > 0
        ? items.map(item => (
            <Item 
                key={item.id}
                id={item.id}
                brand={item.brand}
                model={item.model}
                description={item.description}
                price={item.price}
                stock={item.stock}
                pictureUrl={item.pictureUrl}
                idCategory={item.idCategory}
            />

        ))

        : <img className="spinner_icon" src="https://i.gifer.com/ZKZg.gif" alt="spinner" />
      }
      </>
    )
  }
  
  export default ItemList;