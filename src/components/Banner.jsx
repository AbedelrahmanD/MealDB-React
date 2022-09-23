import { Link } from "react-router-dom";


export default function Banner({ title }) {

    return (

        <div className="bgPrimary py-5 w-100 mb-1 shadow">
            <div className="container">
                <h1 className="text-center text-white">
                    {title}
                </h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item "><Link to="/" className="text-white">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"> {title}</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}


