import { Helmet } from "react-helmet-async";
import Slider from "../../component/slider/Slider";
import PopularService from "./PopularService";


const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Slider></Slider>
			<PopularService></PopularService>
		</div>
	);
};

export default Home;