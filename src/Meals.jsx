
import Banner from './components/Banner'
import MealsComponent from './components/Meals'
import { useParams } from "react-router-dom";
import Layout from './components/Layout';


export default function Meals() {

    let { categoryName } = useParams();
    let title=categoryName==undefined?"Meals":categoryName;
    return (
        <Layout>
            <Banner title={title} />
            <MealsComponent categoryName={categoryName} />
        </Layout>
    
    )
}


