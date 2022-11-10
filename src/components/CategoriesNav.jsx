import { Link } from "react-router-dom";

const Categories = () => {
    return (
      <>
          <div className="categories_nav">
          <Link className="cat_list" to='/category/1'>Procesador</Link>
          <Link className="cat_list" to='/category/2'>Motherboard</Link>
          <Link className="cat_list" to='/category/3'>Memoria Ram</Link>
          <Link className="cat_list" to='/category/4'>Placas de video</Link>
          </div>
      </>
    )
  }
  
  export default Categories;