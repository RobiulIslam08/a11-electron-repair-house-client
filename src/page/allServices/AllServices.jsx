import { Link, useLoaderData } from "react-router-dom";


const AllServices = () => {
  const services = useLoaderData()
  // const {description, area, serviceName, serviceImg,price,providerImage,providerName} = services
  console.log(services.description)
  return (
    <div>

      {
        services.map(service => <div key={service._id} className="mt-5 card card-side bg-base-100 shadow-xl">
          <img src={service.serviceImg} className="w-[35%]" alt="img" />
          <div className="card-body">
           <div className="flex gap-2 items-center">
           <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={service.providerImage} />
           
            </div>
            <p>{service.providerName}</p>
           </div>
            <h2 className="card-title">{service.serviceName}</h2>
            <p className="text-gray-500">{service.description}</p>
            <div className="flex justify-between font-semibold">
              <p>Area: {service.area}</p>
              <p className="">Price: {service.price}$</p>
            </div>
            <div className="card-actions justify-end">
            <Link to={`/details/${service._id}`}>  <button className="btn w-full btn-primary">details</button></Link>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default AllServices;