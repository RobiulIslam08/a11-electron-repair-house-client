

const ManageService = () => {
	return (
		<div>
			manage Service
			<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="flex gap-2 items-center">
           <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src= "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
           
            </div>
            <p>service.providerName</p>
           </div>
    <h2 className="card-title">Service Title</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
	<p>Price:</p>
    <div className="card-actions flex justify-between">
      <button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
		</div>
	);
};

export default ManageService;