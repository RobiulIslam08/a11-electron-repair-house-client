import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddService = () => {
	const { user } = useAuth()

	console.log(user.email)
	const providerEmail = user.email
	const providerName = user.displayName;
	const providerImage = user.photoURL
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target;
		const serviceName = form.serviceName.value;
		const serviceImg = form.image.value;
		const price = form.price.value;
		const area = form.area.value;
		const description = form.description.value;
		const serviceInfo = { serviceName, serviceImg, price, area, description, providerEmail, providerImage, providerName }
		// axios.post(`import.meta.env.VITE_API_URL/allService`,serviceInfo)
		axios.post(`${import.meta.env.VITE_API_URL}/allService`, serviceInfo)
			.then(res => {
				console.log(res.data)
				if (res.data.insertedId) {
					Swal.fire({
						title: 'added successful!',
						text: 'your service successfuly added',
						icon: 'success',
						confirmButtonText: 'ok'
					})
				}
			})


	}
	return (
		<div className="my-24">
			<Helmet>
				<title>Add Service</title>
			</Helmet>
			<h1 className="text-3xl font-bold text-center mb-20">Added Your Service</h1>
			<form onSubmit={handleSubmit} action="" className="w-[70%] mx-auto">

				<div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Service Name</span>
						</label>
						<input type="text" placeholder="service name" name="serviceName" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">image URL</span>
						</label>
						<input type="text" placeholder="image URL" name="image" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Service Area</span>
						</label>
						<input type="text" placeholder="service area" name="area" className="input input-bordered" required />
					</div>
				</div>
				<div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Price(usd)</span>
						</label>
						<input type="number" placeholder="price" name="price" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea type="text" placeholder="description" name="description" className="input input-bordered" required />
					</div>
					<button className="btn btn-success w-full mt-10">Add Service</button>

				</div>
			</form>
		</div>
	);
};

export default AddService;