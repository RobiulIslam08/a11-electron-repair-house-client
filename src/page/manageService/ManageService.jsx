import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageService = () => {
	const [services, setServices] = useState([])
	const [control, setControl] =useState(false)
	const { user } = useAuth()
useEffect(()=>{
	axios.get(`${import.meta.env.VITE_API_URL}/manageService/${user?.email}`)
	.then(res => {
		setServices(res.data)
	})
},[user,control])
	
	// const handleDelete = (id)=>{
	// 	console.log(id)

	// 	// axios.delete(`${import.meta.env.VITE_API_URL}/manageService/${id}`)
	// 	// .then(res => {
	// 	// 	setService(res.data)
	// 	// })
		
	
	// }
	const handleDelete = (id)=>{
   
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
       
                fetch(`${import.meta.env.VITE_API_URL}/manageService/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log('deleted')
                    if(data.deletedCount>0){

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          setControl(!control)
                    }
                })
            }
          });
    }
	return (
		<div className="my-24">
			<Helmet>
				<title>Manage Service</title>
			</Helmet>
			<p className="text-3xl font-bold text-center mb-28">Manage Your Service</p>
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
							<p>{service.description.slice(0,100)}...</p>
							<p className="font-bold">Price:{service.price}$</p>
							<div className="card-actions flex justify-between">
								<Link to={`/updatePage/${service._id}`}><button className="btn btn-sm btn-primary" >Update</button></Link>
								<button className="btn btn-sm btn-primary" onClick={()=> handleDelete(service._id)}>Delete</button>
							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	);
};

export default ManageService;