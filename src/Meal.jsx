

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import Layout from "./components/Layout";
import constants from "./helpers/constants";

export default function Meal() {


    var { mealId } = useParams();
    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState({});
    async function fetchMeal() {
        setLoading(true);
        var response = await fetch(`${constants.mealApi}${mealId}`);
        response = await response.json();

        setMeal(response.meals[0]);
        setLoading(false);
    }
    useEffect(() => {
        fetchMeal();
    }, []);


    return (

        <Layout>


            {loading ?
              <div className="container text-center mt-5">
                  <div className="spinner-border "></div>
              </div> : (
                    <>
                        <Banner title={meal.strMeal} />
                        <div className="container ">
                            <iframe
                                className="w-100 responsiveIframe"
                                src={`https://www.youtube.com/embed/${meal.strYoutube.split("?")[1]}`}
                                frameBorder="0"></iframe>
                            <p className="fs-5">
                                {meal.strInstructions}
                            </p>
                        </div>
                    </>
                )}

        </Layout>
        
    );
}


