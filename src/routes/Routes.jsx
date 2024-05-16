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
import ServiceDetails from "../page/serviceDetails/ServiceDetails";
import BookNow from "../page/bookNow/BookNow";
import AddServiceProtected from "../privateRoute/AddServiceProtected";
import ManageServiceProtected from "../privateRoute/ManageServiceProtected";
import BookedServiceProtected from "../privateRoute/BookedServiceProtected";
import DetailsProtected from "../privateRoute/DetailsProtected";
import ServiceTodoProtected from "../privateRoute/ServiceTodoProtected";
import ServiceTodo from "../page/serviceTodo/ServiceTodo";
import UpdatePage from "../page/updatePage/UpdatePage";
import ErrorPage from "../page/errorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout></Mainlayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/allservices',
				element: <AllServices></AllServices>,
				// loader : ()=> fetch(`${import.meta.env.VITE_API_URL}/allService`)
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
				element: <AddServiceProtected><AddService></AddService></AddServiceProtected>
			},
			{
				path: '/manageService',
				element: <ManageServiceProtected><ManageService></ManageService></ManageServiceProtected>
			},
			{
				path: '/bookedService',
				element:<BookedServiceProtected> <BookedService></BookedService></BookedServiceProtected>,
				// loader : ()=> fetch(`${import.meta.env.VITE_API_URL}/purchaseService`)
			},
			{
				path: '/details/:_id',
				element: <DetailsProtected><ServiceDetails></ServiceDetails></DetailsProtected>,
				loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/allService/${params._id}`)
			},
			{
				path: '/booked/:_id',
				element: <BookNow></BookNow>,
				loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/allService/${params._id}`)
			},
			{
				path:'/serviceTodo',
				element: <ServiceTodoProtected><ServiceTodo></ServiceTodo></ServiceTodoProtected>
			},
			{
				path: '/updatePage/:id',
				element:<UpdatePage></UpdatePage>,
				loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/allService/${params.id}`)
			}
		]
	},
]);
export default router