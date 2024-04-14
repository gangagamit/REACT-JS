import React,{useEffect, useState} from 'react'
import TableData from './TableData';
function Useeffect() {
    const [data] = useState(TableData);
    console.log(data,"Table")
    useEffect(()=>{
        console.log("useeffect run on onclick or any dependency")
    },[]);

    // useEffect(()=>{
    //     console.log("useeffect run on onclick or any dependency")
    // },);
    return (
        <div className='table w-full'>
            <table className='table-auto w-full text-center'>
                <thead className='h-10 bg-gray-200 text-black font-semibold border'>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email_id</td>
                        <td>City</td>
                        <td>Phone_no</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cvalue)=>{
                        return(<>
                            <tr>
                                <td>{cvalue.Id}</td>
                                <td>{cvalue.Name}</td>
                                <td>{cvalue.Email}</td>
                                <td>{cvalue.City}</td>
                                <td>{cvalue.Phone_no}</td>
                            </tr>
                        </>)
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Useeffect
