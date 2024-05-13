import {
	createBrowserRouter,
	
} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/home/Home";
import AllServices from "../page/allServices/AllServices";
import RegisterPage from "../page/registerPage/RegisterPage";
import LoginPage from "../page/loginPage/LoginPage";
import AddService from "../page/addService/AddService";
import ManageService from "../page/manageService/ManageService";
import BookedService from "../page/bookedService/BookedService";

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
				element: <AllServices></AllServices>,
				loader : ()=> fetch(`${import.meta.env.VITE_API_URL}/allService`)
			},
			{
				path:'/register',
				element: <RegisterPage></RegisterPage>
			},
			{
				path: '/login',
				element: <LoginPage></LoginPage>
			},
			{
				path: '/addService',
				element: <AddService></AddService>
			},
			{
				path: '/manageService',
				element: <ManageService></ManageService>
			},
			{
				path: '/bookedService',
				element: <BookedService></BookedService>
			}
		]
	},
]);
export default router