import Categories from "./CategoriesNav";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <nav className="header_comm">
        <div className="left_nav">
          <a className="name_comm" href="/#">./Lika_Shop</a>
        </div>

        <Categories />

          <div className="right_nav">
              <span className="login_nav">Login</span>
              <CartWidget/>
          </div>
      </nav>
    </>
  )
}

export default Navbar;