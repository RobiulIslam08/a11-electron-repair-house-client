import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
	const service = useLoaderData()
	const handleUpdate = (e) => {
		e.preventDefault()
		console.log('update your data')
		const form = e.target;
		const serviceName = form.serviceName.value;
		const serviceImg = form.image.value;
		const price = form.price.value;
		const area = form.area.value;
		const description = form.description.value;
		const serviceInfo = { serviceName, serviceImg, price, area, description }
		// axios.post(`import.meta.env.VITE_API_URL/allService`,serviceInfo)
		axios.put(`${import.meta.env.VITE_API_URL}/updatePage/${service._id}`, serviceInfo)
			.then(res => {
				console.log(res.data)
				if (res.data.modifiedCount>0) {
					Swal.fire({
						title: 'update successful!',
						text: 'your service update successfuly ',
						icon: 'success',
						
					})
				}
			})


	}
	return (
		
			<div className="my-24">
			<Helmet>
				<title>Update Page</title>
			</Helmet>
			<h1 className="text-3xl font-bold text-center">Update Your Service</h1>
			<form onSubmit={handleUpdate}  action="" className="w-[70%] mx-auto">

				<div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Service Name</span>
						</label>
						<input type="text" placeholder="service name" name="serviceName" className="input input-bordered" required defaultValue={service.serviceName}/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">image URL</span>
						</label>
						<input type="text" placeholder="image URL" name="image" className="input input-bordered" required defaultValue={service.serviceImg
}/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Service Area</span>
						</label>
						<input type="text" placeholder="service area" name="area" className="input input-bordered" required defaultValue={service.area}/>
					</div>
				</div>
				<div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Price(usd)</span>
						</label>
						<input type="number" placeholder="price" name="price" className="input input-bordered" required defaultValue={service.price}/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea type="text" placeholder="description" name="description" className="input input-bordered" required defaultValue={service.description}/>
					</div>
					<button type="submit" className="btn btn-success w-full mt-10">Update Service</button>

				</div>
			</form>
		</div>
		
	);
};

export default UpdatePage;