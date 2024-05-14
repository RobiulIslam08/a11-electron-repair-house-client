import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
	const service = useLoaderData()
	
	console.log(service)
	return (
		<div className="my-24">
			yes details here
			<p>sevice name {service.serviceName}</p>
			<div className="card w-full border bg-base-100 shadow-xl">
  <img src={service.serviceImg} className="h-72" alt="Shoes" />
  <div className="card-body">
  <div className="flex gap-2 items-center">
           <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={service.providerImage} />
           
            </div>
            <p>{service.providerName}</p>
           </div>
    <h2 className="card-title">{service.serviceName}</h2>
    <p className="text-gray-500">{service.description}</p>
	<p>Location: {service.area}</p>
	<p className="font-semibold">Price: {service.price}$</p>
    <div className="card-actions justify-end">

     <Link to={`/booked/${service._id}`}> <button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
		</div>
	);
};

export default ServiceDetails;