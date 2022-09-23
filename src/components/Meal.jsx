import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Meal({ meal }) {

    return (

        <div className="textDecorationNone col-12 col-md-6 col-lg-4  my-1  p-1 " role="button">
            <Link to={`/meal/${meal.idMeal}`}>
                <div className='d-flex col-12 shadow-sm border rounded p-0 m-0 position-relative hoverShadow'>
                    <img className='w-50' src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className='p-2'>
                        <h1 className='textPrimary fs-3 clamp3'>{meal.strMeal}</h1>
                        <p className='clamp3 text-dark'>{meal.strInstructions}</p>
                    </div>
                    {/* <div  className=' fs-6 position-absolute bgSecondary  w-25 text-center  p-1  rounded-pill text-white bottom-0 end-0'>{meal.strCategory}</div> */}
                </div>
            </Link>
        </div>

    )
}


