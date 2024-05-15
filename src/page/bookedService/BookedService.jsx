import { Helmet } from "react-helmet-async";

import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";


const BookedService = () => {
	const [bookedServices, setBookedServices] = useState([])
	console.log(bookedServices)
	const {user} = useAuth()
	useEffect(()=>{
		axios.get(`${import.meta.env.VITE_API_URL}/purchaseService/${user?.email}`)
		.then(res => {
			setBookedServices(res.data)
		})
	},[user])

	return (
		<div className="my-24">
			<Helmet>
				<title>Booked Service</title>
			</Helmet>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
				{bookedServices.length === 0 ? (
          <p className="text-center text-xl font-semibold">No services booked yet.</p>
        ) :
					bookedServices.map(service => <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
						<figure><img src={service.serviceImg} alt="Shoes" /></figure>
						<div className="card-body">
							<div className="flex gap-2 items-center">
								<div className="w-10 rounded-full ">
									<img alt="profile" src={service.providerImage} />

								</div>
								<p>{service.providerName}</p>
							</div>
							<h2 className="card-title">{service.serviceName}</h2>
							
							<div className="flex">
							<p className="font-semibold">Price:{service.price}$</p>
							<p className="font-semibold">Status: {service.serviceStatus}</p>
							</div>
						
							<p className="font-semibold">Taking Date: {service.takingDate}</p>
						
							<p className="font-semibold">Address:{service.address}</p>
							<div className="card-actions flex justify-between">
								
							</div>
						</div>
					</div>)
				}
			</div>


		</div>
	);
};

export default BookedService;