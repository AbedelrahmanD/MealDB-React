
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import constants from "../helpers/constants";
import Category from "./Category"
import Shimmer from './Shimmer';

export default function Categories({ limit }) {
    const [showMoreButton, setShowMoreButton] = useState(true);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchCategories() {
        var response = await fetch(constants.categoriesApi);
        response = await response.json();
        if (limit != undefined) {
            response.categories = response.categories.slice(0, parseInt(limit) + 1);
        }
        response.categories = response.categories.filter(category => category.strCategory != "Pork");
        setCategories(response.categories);
    }


    useEffect(() => {
        setShowMoreButton(limit == undefined ? false : true);
        fetchCategories();
    }, []);

    return (

        <div className='container'>
            {showMoreButton && (
                <h1 className='textPrimary'>
                    Categories
                </h1>)}

            <div className="row">
                {isLoading ? <Shimmer /> : (
                    categories.map(category => <Category key={category.idCategory} category={category} />)
                )}
            </div>
            {showMoreButton && (
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-4 ">
                        <Link to="/categories">
                            <button className='btn bgSecondary text-light w-100'>More</button>
                        </Link>
                    </div>
                </div>)}

        </div>
    )
}


