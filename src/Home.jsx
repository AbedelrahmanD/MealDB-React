
import { useEffect, useState } from 'react'
import MealsComponent from "./components/Meals"
import CategoriesComponent from "./components/Categories"
import SliderComponent from "./components/Slider"
import Layout from './components/Layout'
export default function Home() {



    return (
        <Layout>
            <SliderComponent/>
            <MealsComponent limit="6" />
            <div className='my-5'></div>
            <CategoriesComponent limit="8" />
        </Layout>
    )
}


