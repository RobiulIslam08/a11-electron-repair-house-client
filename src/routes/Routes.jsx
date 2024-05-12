import {
	createBrowserRouter,
	
} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/home/Home";
import AllServices from "../page/allServices/AllServices";
import RegisterPage from "../page/registerPage/RegisterPage";
import LoginPage from "../page/loginPage/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout></Mainlayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/allservices',
				element: <AllServices></AllServices>
			},
			{
				path:'/register',
				element: <RegisterPage></RegisterPage>
			},
			{
				path: '/login',
				element: <LoginPage></LoginPage>
			}
		]
	},
]);
export default router