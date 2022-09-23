
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
        <br></br>
            <div className='p-5 bgPrimary mt-auto'>
                <div className="row">
                    <div className="col-12 col-md-4 text-center">
                        <Link className="nav-link text-white " aria-current="page" to="/">Home</Link>
                    </div>
                    <div className="col-12 col-md-4 text-center ">

                        <Link className="nav-link text-white" to="/meals">Meals</Link>
                    </div>
                    <div className="col-12 col-md-4  text-center">
                        <div className="nav-item dropdown">
                            <Link className="text-white nav-link dropdown-toggle" to="categories" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/meals-by-category/Beef">Beef</Link></li>
                                <li><Link className="dropdown-item" to="/meals-by-category/Dessert">Dessert</Link></li>
                                <li><Link className="dropdown-item" to="/meals-by-category/Pasta">Pasta</Link></li>
                                <li><Link className="dropdown-item" to="/meals-by-category/Chicken">Chicken</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


