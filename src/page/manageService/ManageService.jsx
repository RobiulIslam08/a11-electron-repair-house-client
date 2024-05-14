import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const ManageService = () => {
	const [services, setService] = useState([])
	const { user } = useAuth()
	axios.get(`${import.meta.env.VITE_API_URL}/manageService/${user?.email}`)
		.then(res => {
			setService(res.data)
		})
	return (
		<div className="my-24">
			<Helmet>
				<title>Manage Service</title>
			</Helmet>
			manage Service length{services.length}
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
				{
					services.map(service => <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
						<figure><img src={service.serviceImg} alt="Shoes" /></figure>
						<div className="card-body">
							<div className="flex gap-2 items-center">
								<div className="w-10 rounded-full ">
									<img alt="Tailwind CSS Navbar component" src={service.providerImage} />

								</div>
								<p>{service.providerName}</p>
							</div>
							<h2 className="card-title">{service.serviceName}</h2>
							<p>{service.description}</p>
							<p className="font-bold">Price:{service.price}$</p>
							<div className="card-actions flex justify-between">
								<button className="btn btn-primary">Update</button>
								<button className="btn btn-primary">Delete</button>
							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	);
};

export default ManageService;