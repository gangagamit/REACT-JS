import React from 'react'
import ProData from './ProData';
import Procard from './Procard';
function ProductH() {
    return (
        <div>
            <div className='text-3xl font-bold text-red-600'>

                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "30px" }}>
                    {ProData.map((cvalue, ind, arr) => {
                        console.log(cvalue,"cvalue");
                        return <Procard key={ind}  name={cvalue.name} price={cvalue.price} FirstImg={cvalue.FirstImg} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductH
