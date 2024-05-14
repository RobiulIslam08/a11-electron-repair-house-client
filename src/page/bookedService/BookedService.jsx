import { Helmet } from "react-helmet-async";

import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";


const BookedService = () => {
	const [bookedServices, setBookedServices] = useState([])
	const {user} = useAuth()
	useEffect(()=>{
		axios.get(`${import.meta.env.VITE_API_URL}/purchaseService/${user?.email}`)
		.then(res => {
			setBookedServices(res.data)
		})
	},[user])

	return (
		<div>
			<Helmet>
				<title>Booked Service</title>
			</Helmet>

			booked service {bookedServices.length}
		</div>
	);
};

export default BookedService;