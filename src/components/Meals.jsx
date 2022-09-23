
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import constants from "../helpers/constants";
import Meal from "./Meal"
import Shimmer from './Shimmer';

export default function Meals({ limit, categoryName }) {

    const [showMoreButton, setShowMoreButton] = useState(true);
    const [melas, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchMeals() {


        setIsLoading(true);
        var mealsApi = constants.mealsApi;
        if (categoryName != undefined) {
            mealsApi = `${constants.mealsFilterApi}${categoryName}`;
        }
        var response = await fetch(mealsApi);
        response = await response.json();

        if (limit != undefined) {
            response.meals = response.meals.slice(0, limit);
        }
        setMeals(response.meals);

        setIsLoading(false);
    }


    useEffect(() => {
        setShowMoreButton(limit == undefined ? false : true);
        fetchMeals();
    }, [categoryName]);

    return (

        <div className='container'>
            {showMoreButton && (<h1 className='textPrimary'>
                Meals
            </h1>)
            }

            <div className="row">
                {isLoading ? <Shimmer /> : (
                    melas.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                )}
            </div>
            {showMoreButton && (
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-4 ">
                        <Link to="/meals">
                            <button className='btn bgSecondary text-light w-100'>More</button>
                        </Link>
                    </div>
                </div>)}

        </div>
    )
}


