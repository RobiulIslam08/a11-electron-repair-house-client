import { Helmet } from "react-helmet-async";
import Slider from "../../component/slider/Slider";
import PopularService from "./PopularService";
import Contact from "../../component/contact/Contact";
import Accordian from "../../component/accordian/Accordian";
import OurTeam from "../../component/ourTeam/OurTeam";


const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Slider></Slider>
			<PopularService></PopularService>
			<OurTeam></OurTeam>
			<Accordian></Accordian>
			<Contact></Contact>
		</div>
	);
};

export default Home;