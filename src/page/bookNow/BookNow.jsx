import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const BookNow = () => {
	const service = useLoaderData()
	const {user} = useAuth()
	return (
		<div className="my-20">
			book now
			<p>service name : {service.serviceName}</p>
			<form action="">
				<div>
				<div className="flex lg:flex-row flex-col gap-4">
					<div className="lg:w-1/2 w-full">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Service Name</span>
							</label>
							<input type="text" placeholder="service name" name="serviceName" className="input input-bordered" required defaultValue={service.serviceName} disabled />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Service Id</span>
							</label>
							<input type="text" placeholder="service id" name="serviceId" className="input input-bordered" required defaultValue={service._id} disabled  />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Service Image URL</span>
							</label>
							<input type="text" placeholder="service image url" name="serviceImg" className="input input-bordered" required defaultValue={service.serviceImg} disabled />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Provider Name</span>
							</label>
							<input type="text" placeholder="provider name" name="porviderName" className="input input-bordered" required defaultValue={service.providerName} disabled />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Provider Email</span>
							</label>
							<input type="email" placeholder="provider email" name="providerEmail" className="input input-bordered" required defaultValue={service.providerEmail} disabled />
						</div>
						
					</div>
					<div  className="lg:w-1/2 w-full">
						<div className="form-control">
							<label className="label">
								<span className="label-text">User Name</span>
							</label>
							<input type="text" placeholder="user name" name="userName" className="input input-bordered" required defaultValue={user.displayName} disabled />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">User Email</span>
							</label>
							<input type="emial" placeholder="user email" name="userEmail" className="input input-bordered" required defaultValue={user.email} disabled />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Service Taking Data</span>
							</label>
							<input type="date" placeholder="service taking date" name="takingDate" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Address</span>
							</label>
							<input type="text" placeholder="your Address" name="address" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Price</span>
							</label>
							<input type="text" placeholder="Price" name="image" className="input input-bordered" required defaultValue={service.price} disabled />
						</div>
					</div>
				</div>
						<button className="btn mt-4 btn-primary w-full">Purchase Now</button>
				</div>

			</form>
		</div>
	);
};

export default BookNow;