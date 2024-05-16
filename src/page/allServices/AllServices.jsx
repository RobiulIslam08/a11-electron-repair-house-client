import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const AllServices = () => {
  // const services = useLoaderData()
  const [search, setSearch] = useState('')
  const [services, setService] = useState([])

  // useEffect(()=>{
	// 	axios.get(`${import.meta.env.VITE_API_URL}/allService?search=${search}`)
	// 	.then(res => {
	// 		setService(res.data)
	// 	})
	// },[search])
  useEffect(()=>{
    const getData = async () =>{
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/allService?search=${search}`)
      setService(data)
    }
    getData()
  },[search])
  const handleSearch = (e) =>{
    e.preventDefault()
    const text = e.target.search.value
    setSearch(text)
  }
  console.log(search)
  console.log(services)


  return (
    <div className="my-24">
      <Helmet>
        <title>All Services</title>
      </Helmet>
      <p className="text-3xl font-bold text-center mb-28">All Sercvices</p>
      <form onSubmit={handleSearch}  className="mb-14">
        <div className="join flex justify-center">
          <input type="text" className="input input-bordered join-item" name="search" placeholder="search services" />
          <button type="submit" className="btn join-item rounded-r-full">Search</button>
    
        </div>
      </form>

      {
        services.map(service => <div key={service._id} className="mt-5 card card-side bg-base-100 shadow-xl">
          <img src={service.serviceImg} className="w-[35%]" alt="img" />
          <div className="card-body">
            <div className="flex gap-2 items-center">
              <div className="w-10 rounded-full ">
                <img alt="Tailwind CSS Navbar component" className="rounded-full" src={service.providerImage} />

              </div>
              <p>{service.providerName}</p>
            </div>
            <h2 className="card-title font-bold">{service.serviceName}</h2>
            <p className="text-gray-500">{service.description.slice(0, 100)}...</p>
            <div className="flex justify-between font-semibold">
              <p>Area: {service.area}</p>
              <p className="">Price: {service.price}$</p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/details/${service._id}`}>  <button className="btn w-full btn-primary">details</button></Link>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default AllServices;