import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";


const Mainlayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="w-[90%] mx-auto">
			<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Mainlayout;