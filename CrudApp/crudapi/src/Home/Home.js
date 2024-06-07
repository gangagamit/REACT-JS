
import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [data,setData] = useState([]);
  const [searchData,setSearchData] = useState("")
  const [curentPage ,setCurrentPage] = useState(1)
  const filterData = data.filter(users=>users.FirstName.toLowerCase().includes(searchData.toLowerCase())
  ||
    users.LastName.toLowerCase().includes(searchData.toLowerCase())
  )
  const recordPage= 1;
  const LastIndex = curentPage * recordPage;
  const FirstIndex = LastIndex - recordPage;
  const record = filterData.slice(FirstIndex,LastIndex);
  const nPage = Math.ceil(filterData.length/recordPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  const userData = async()=>{
    const res = await axios.get("http://localhost:3000/user")
    console.log(res.data,"res");
    setData(res.data)
  }
//   const filterData = data.filter(users=>users.FirstName.toLowerCase().includes(searchData.toLowerCase())
// ||
//   users.LastName.toLowerCase().includes(searchData.toLowerCase())
// )
  useEffect(()=>{
    userData();
  },[])


  const onDelete =((id)=>{
      axios.delete(`http://localhost:3000/user/${id}`)
      .then((res)=>{
        userData();
      })
      .catch((error)=>{
          console.log(error,"error")
      })
  })

 const perPage = ()=>{
  if(curentPage !==1){
    setCurrentPage(curentPage-1);
  }
 }
 const changepage = (id)=>{
  setCurrentPage(id)
 }
 const nextpage = ()=>{
  if(curentPage !== nPage){
    setCurrentPage(curentPage+1);
  }
 }
  return (
    <>
    <Navbar/>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
          </div>
          <div>
            <input onChange={(e)=>setSearchData(e.target.value)} type='text' 
            placeholder='search here..'
            className='bg-gray-100 outline-0 w-72 h-8'></input>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to='/create'>Add new employee</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-sm font-normal text-start text-gray-700"
                      >
                        <span>FirstName</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5  text-sm font-normal text-gray-700"
                      >
                        LastName
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-sm font-normal text-gray-700"
                      > 
                        Age
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-sm font-normal text-gray-700"
                      >
                        City
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only"></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {record.map((user,index) => (
                      <tr key={user.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 text-right">{user.FirstName}</div>

                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-slate-950 font-semibold">{user.LastName}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {user.Age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-950 font-semibold">
                        
                          {user.city}
                        
                        </td>
                        <td className="whitespace-nowrap px-4 py-4  text-sm font-medium">
                          <div className=' flex gap-5'>
                            <span>
                          <Link to={`/edit/${user.id}`} className="text-gray-700">
                           <button className=' bg-green-600 text-white rounded p-1'>Edit</button> 
                          </Link>
                          </span>
                          <button onClick={()=>onDelete(user.id)} className=' bg-red-600 p-1 text-white rounded'>
                            Delete
                          </button>
                          </div>
                        </td> 
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' flex items-center justify-center'>

              <a
                href = "#" className=' mx-1 cursor-not-allowed text-sm font-semibold text-gray-800' onClick={perPage}>
                  previous
              </a>
              <div className=' flex items-center'>
                    {numbers.map((n,i)=>(
                      <a
                       href='#'
                       key={i}
                       className={`page-items ${curentPage === n ? 'active': ''} mx-1 rounded-md border border-gray-400 px-3 py-1 text-gray-800 hover:scale-105`}
                       onClick={()=>changepage(n)}
                      >
                          {n}
                      </a>
                    ))}  
              </div>
              <a
              href='#'
              className=' mx-2 text-sm font-semibold text-gray-900'
              onClick={ nextpage}
              >
                Next
              </a>
      </div>
    </>
  )
}
