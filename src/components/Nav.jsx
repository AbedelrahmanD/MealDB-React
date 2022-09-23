import { Link } from "react-router-dom";
export default function Nav() {

    return (
        <nav id="jsNav" className="navbar navbar-expand-lg navbar-light bgPrimary topNavbar ">

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MealDB</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""><i className="fa fa-burger  textSecondary"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/meals">Meals</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="categories" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/meals-by-category/Beef">Beef</Link></li>
                  <li><Link className="dropdown-item" to="/meals-by-category/Dessert">Dessert</Link></li>
                  <li><Link className="dropdown-item" to="/meals-by-category/Pasta">Pasta</Link></li>
                  <li><Link className="dropdown-item" to="/meals-by-category/Chicken">Chicken</Link></li>
                  <hr />
                  <li><Link className="dropdown-item" to="/categories">All Categories</Link></li>
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    )
}


