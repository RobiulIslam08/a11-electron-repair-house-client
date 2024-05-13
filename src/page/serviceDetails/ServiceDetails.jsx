import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
	const service = useLoaderData()
	
	console.log(service)
	return (
		<div>
			yes details here
			<p>sevice name {service.serviceName}</p>
		</div>
	);
};

export default ServiceDetails;