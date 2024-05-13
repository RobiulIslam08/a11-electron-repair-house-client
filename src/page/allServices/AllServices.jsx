import { useLoaderData } from "react-router-dom";


const AllServices = () => {
	const lodedData = useLoaderData()
	return (
		<div>
			<h1>data length {lodedData.length}</h1>
		</div>
	);
};

export default AllServices;