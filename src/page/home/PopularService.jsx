import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularService = () => {
	const [services, setService] = useState([]).slice(0,2)
	useEffect(()=>{
		axios((`${import.meta.env.VITE_API_URL}/allService`))
		.then(res => {
			const slicedServices = res.data.slice(0, 6);
			setService(slicedServices);
		})
	},[setService])
	return (
		<div>
			<h1>serivec {services.length}</h1>
			<h1 className='text-3xl font-bold text-center'>Our Poupular Services</h1>
			{
        services.map(service => <div key={service._id} className="mt-5 card card-side bg-base-100 shadow-xl">
          <img src={service.serviceImg} className="w-[35%]" alt="img" />
          <div className="card-body">
           <div className="flex gap-2 items-center">
           <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={service.providerImage} />
           
            </div>
            <p>{service.providerName}</p>
           </div>
            <h2 className="card-title">{service.serviceName}</h2>
            <p className="text-gray-500">{service.description}</p>
  
             
              <p className="font-semibold">Price: {service.price}$</p>
          
            <div className="card-actions justify-end">
            <Link to={`/details/${service._id}`}>  <button className="btn w-full btn-primary">details</button></Link>
            </div>
          </div>
        </div>)
      }
		</div>
	);
};

export default PopularService;