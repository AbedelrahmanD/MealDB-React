import { Link } from "react-router-dom";

export default function Category({ category }) {

    return (
        <div className="textDecorationNone col-12 col-md-3 my-1 p-1 " role="button">
            <Link to={`/meals-by-category/${category.strCategory}`}>
                <div className='overflow-hidden position-relative col-12 shadow-sm border rounded p-0 m-0 position-relative hoverShadow'>
                    <img className='w-100' src={category.strCategoryThumb} alt={category.strCategory} />
                    <div className='bgOverLay  p-2 position-absolute top-0 bottom-0 right-0 left-0 w-100 d-flex justify-content-center align-items-center'>
                        <h1 className='text-white'>{category.strCategory}</h1>
                    </div>

                </div>
            </Link>

        </div>
    )
}


