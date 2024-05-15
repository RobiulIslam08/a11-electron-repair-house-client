import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext, useEffect, useState } from "react";


const Navbar = () => {
	const { logout, user } = useContext(AuthContext)
	const navigate = useNavigate()
	const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
	useEffect(() => {
		localStorage.setItem('theme', theme)
		const localTheme = localStorage.getItem('theme')
		document.querySelector('html').setAttribute('data-theme', localTheme)
	}, [theme])
	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme('synthwave')

		}
		else {
			setTheme('light')
		}
	}
	const links = <>
		<div className="space-x-4">

			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "font-semibold"
			} to="/addService">Add Service</NavLink>
			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "font-semibold"
			} to="/manageService">Manage Service</NavLink>
			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "font-semibold"
			} to="/bookedService">Booked Service</NavLink>
			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "font-semibold"
			} to="/serviceTodo">Service Todo</NavLink>
		</div>
	</>


	const handleLogout = () => {
		logout()
			.then(() => {
				toast("Successful logout");
				navigate('/')
				
			})
			.catch(error => {
				console.log('error khaiso logout ', error)
			})
	}


	return (
		<div>
			<div className="navbar bg-base-100 md:px-9 px-4">
				<div className="navbar-start">
					<Link to="/"><img className="w-12 h-12 rounded-full" src="https://i.ibb.co/YcrXpxL/images.png" alt="" /></Link>

					<p className="lg:text-3xl text-lg font-bold lg:flex hidden">Electron Services</p>
				</div>
				<div className="navbar-center  lg:flex">
					<ul className="menu menu-horizontal ">
						<div className="space-x-2">
						<NavLink className={({ isActive }) =>
							isActive ? "font-bold text-primary border-b-4 border-purple-500" : "font-semibold"
						} to="/">Home</NavLink>
						<NavLink className={({ isActive }) =>
							isActive ? "font-bold text-primary border-b-4 border-purple-500" : "font-semibold"
						} to="/allservices">All Services</NavLink>
						</div>
					</ul>
					{
						user && <div className="dropdown px-2">
							<div tabIndex={0} role="button" className="font-semibold">
								
								dashboard
							</div>
							<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
								{links}
							</ul>
						</div>
					}
				</div>
				
				<div className="navbar-end">

					{
						user ? <div className=" dropdown dropdown-bottom dropdown-hover">
							<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"> <div className="w-10 rounded-full">
								<img alt="profile" src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
							</div></div>
							<ul tabIndex={0} className="dropdown-content z-[1] menu bg-base-100 rounded-box w-24">
								{/* <li><a></a></li> */}
								{user?.displayName ? user.displayName : 'no name '}
								<button className='btn btn-sm' onClick={handleLogout}>log out</button>

							</ul>
						</div> :
							<><button className="mr-2 lg:mr-2 btn btn-sm  btn-accent"><Link to="/login">login</Link></button>
								{/* <button className="btn btn-sm  btn-accent"><Link to="/register">Regsiter</Link></button> */}
								</>
					}
					<label className="cursor-pointer grid place-items-center ml-1 lg:ml-5">
						<input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
						<svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
						<svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Navbar;