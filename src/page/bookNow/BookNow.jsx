// import { useLoaderData } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import axios from "axios";
// import Swal from "sweetalert2";


// const BookNow = () => {
// 	const service = useLoaderData()
// 	const {user} = useAuth()
// 	const currentUserEmail = user.email;
// 	const currentUserName = user.displayName;
// 	const providerEmail = service.providerEamil;
// 	const providerName = service.providerName

// 	const serviceStatus ="pending"
// 	const handlePurchase = (e) => {
// 		e.preventDefault()
// 		const form = e.target;
// 		const serviceName = form.serviceName.value;
// 		const serviceImg = form.image.value;
// 		const price = form.price.value;
// 		const address = form.address.value;
// 		const serviceId = form.serviceId.value
// 		// const description = form.description.value;
// 		const takingDate = form.takingDate.value

// 		const serviceInfo = { serviceName, serviceImg, price, address, providerEmail,takingDate, providerName,currentUserEmail,currentUserName,serviceStatus,serviceId }
// 		console.log(serviceInfo)
// 		// axios.post(`import.meta.env.VITE_API_URL/allService`,serviceInfo)
// 		axios.post(`${import.meta.env.VITE_API_URL}/purchaseService`, serviceInfo)
// 			.then(res => {
// 				console.log(res.data)
// 				if (res.data.insertedId) { 
// 					Swal.fire({
// 						title: 'purchase successful!',
// 						text: 'your service successfuly purchase',
// 						icon: 'success',
// 						confirmButtonText: 'ok'
// 					})
// 				}
// 			})


// 	}
// 	return (
// 		<div className="my-24">
// 			book now
// 			<p>service name : {service.serviceName}</p>
// 			<form onSubmit={handlePurchase} action="">
// 				<div>
// 				<div className="flex lg:flex-row flex-col gap-4">
// 					<div className="lg:w-1/2 w-full">
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Service Name</span>
// 							</label>
// 							<input type="text" placeholder="service name" name="serviceName" className="input input-bordered" required defaultValue={service.serviceName} disabled />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Service Id</span>
// 							</label>
// 							<input type="text" placeholder="service id" name="serviceId" className="input input-bordered" required defaultValue={service._id} disabled  />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Service Image URL</span>
// 							</label>
// 							<input type="text" placeholder="service image url" name="serviceImg" className="input input-bordered" required defaultValue={service.serviceImg} disabled />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Provider Name</span>
// 							</label>
// 							<input type="text" placeholder="provider name" name="porviderName" className="input input-bordered" required defaultValue={service.providerName} disabled />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Provider Email</span>
// 							</label>
// 							<input type="email" placeholder="provider email" name="providerEmail" className="input input-bordered" required defaultValue={service.providerEmail} disabled />
// 						</div>
						
// 					</div>
// 					<div  className="lg:w-1/2 w-full">
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">User Name</span>
// 							</label>
// 							<input type="text" placeholder="user name" name="userName" className="input input-bordered" required defaultValue={user.displayName} disabled />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">User Email</span>
// 							</label>
// 							<input type="emial" placeholder="user email" name="userEmail" className="input input-bordered" required defaultValue={user.email} disabled />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Service Taking Data</span>
// 							</label>
// 							<input type="date" placeholder="service taking date" name="takingDate" className="input input-bordered" required />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Address</span>
// 							</label>
// 							<input type="text" placeholder="your Address" name="address" className="input input-bordered" required />
// 						</div>
// 						<div className="form-control">
// 							<label className="label">
// 								<span className="label-text">Price</span>
// 							</label>
// 							<input type="text" placeholder="Price" name="image" className="input input-bordered" required defaultValue={service.price} disabled />
// 						</div>
// 					</div>
// 				</div>
// 						<button className="btn mt-4 btn-primary w-full">Purchase Now</button>
// 				</div>

// 			</form>
// 		</div>
// 	);
// };

// export default BookNow;
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const BookNow = () => {
    const service = useLoaderData();
    const { user } = useAuth();
    const currentUserEmail = user.email;
    const currentUserName = user.displayName;
    const providerEmail = service.providerEmail;
    const providerName = service.providerName;

    const serviceStatus = "pending";

    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const address = form.address.value;
        const takingDate = form.takingDate.value;

        const serviceInfo = {
            serviceName: service.serviceName,
            serviceImg: service.serviceImg,
            price: service.price,
            address,
            providerEmail,
            takingDate,
            providerName,
            currentUserEmail,
            currentUserName,
            serviceStatus,
            serviceId: service._id
        };
        
        console.log(serviceInfo);

        axios.post(`${import.meta.env.VITE_API_URL}/purchaseService`, serviceInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Purchase successful!',
                        text: 'Your service was successfully purchased.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
    };

    return (
        <div className="my-24">
            <h1>Book Now</h1>
            <p>Service Name: {service.serviceName}</p>
            <form onSubmit={handlePurchase}>
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-1/2 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name="serviceName" className="input input-bordered" defaultValue={service.serviceName} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Id</span>
                            </label>
                            <input type="text" name="serviceId" className="input input-bordered" defaultValue={service._id} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Image URL</span>
                            </label>
                            <input type="text" name="serviceImg" className="input input-bordered" defaultValue={service.serviceImg} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Provider Name</span>
                            </label>
                            <input type="text" name="providerName" className="input input-bordered" defaultValue={service.providerName} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Provider Email</span>
                            </label>
                            <input type="email" name="providerEmail" className="input input-bordered" defaultValue={service.providerEmail} disabled />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="userName" className="input input-bordered" defaultValue={user.displayName} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="userEmail" className="input input-bordered" defaultValue={user.email} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Taking Date</span>
                            </label>
                            <input type="date" name="takingDate" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" className="input input-bordered" defaultValue={service.price} disabled />
                        </div>
                    </div>
                </div>
                <button className="btn mt-4 btn-primary w-full">Purchase Now</button>
            </form>
        </div>
    );
};

export default BookNow;
