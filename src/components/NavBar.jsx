import Categories from "./CategoriesNav";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <nav className="header_comm">
        <div className="left_nav">
          <Link className="name_comm" to='/'>./Lika_Shop</Link>
        </div>

        <Categories />

          <div className="right_nav">
              <Link to='/cart'><CartWidget/></Link>
          </div>
      </nav>
    </>
  )
}

export default Navbar;