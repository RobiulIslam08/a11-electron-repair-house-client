import { Helmet } from "react-helmet-async";


const ServiceTodo = () => {
	return (
		<div className="my-32">
			<Helmet>
				<title>Service Todo</title>
			</Helmet>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>

							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>

							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
							<td><div className="dropdown">
								<div tabIndex={0} role="button" className="btn btn-sm m-1">Pending</div>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li><a>Item 1</a></li>
									<li><a>Item 2</a></li>
								</ul>
							</div></td>
						</tr>
						<tr>
							
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
							<td><div className="dropdown">
								<div tabIndex={0} role="button" className="btn btn-sm m-1">Pending</div>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li><a>Item 1</a></li>
									<li><a>Item 2</a></li>
								</ul>
							</div></td>
						</tr>
						{/* row 2 */}

					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ServiceTodo;