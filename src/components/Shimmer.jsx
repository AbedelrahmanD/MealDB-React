import { useState } from "react";




export default function Shimmer() {

    const [nbCards, setNbCards] = useState([...Array(10).keys()]);

    return (
        <>
            {
                nbCards.map(nb => <div key={nb} className="card">
                    <div className="shimmerBG media"></div>
                    <div className="p-32">
                        <div className="shimmerBG title-line"></div>
                        <div className="shimmerBG title-line end"></div>

                        <div className="shimmerBG content-line m-t-24"></div>
                        <div className="shimmerBG content-line"></div>
                        <div className="shimmerBG content-line"></div>
                        <div className="shimmerBG content-line"></div>
                        <div className="shimmerBG content-line end"></div>
                    </div>
                </div>)
        }
        </>


    );
}