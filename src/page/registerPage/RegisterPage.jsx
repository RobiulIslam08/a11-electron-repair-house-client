import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";




const RegisterPage = () => {
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const passwordLengthPattern = /.{6,}/;
    const passwordLowercasePattern = /[a-z]/;
    const passwordUppercasePattern = /[A-Z]/;
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data)=>{ 
		console.log('sumb')
        const { email, password,photo, name } = data;
        createUser(email, password)
        .then(result => {
            updateUserProfile(name,photo)
            .then(()=>{
                toast("Successful Register"); 
                navigate("/")
                console.log(result.user)
            })
           
        })
        .catch(err =>{
            console.log(err)
        })
       
    }

    return (
        <div>
            <Helmet>
                <title>Register page</title>
            </Helmet>
   
            <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register Now </h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Name</label>
                        <input type="text" {...register("name")} placeholder="your name" className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" {...register("email")} placeholder="email" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" {...register("photo")} placeholder="photo url" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <label className="flex  items-center ">
                            <input  {...register("password", {
                                validate: {
                                    length: value => passwordLengthPattern.test(value) || "Password must be at least 6 characters",
                                    lowercase: value => passwordLowercasePattern.test(value) || "Password must contain at least one lowercase letter",
                                    uppercase: value => passwordUppercasePattern.test(value) || "Password must contain at least one uppercase letter"
                                }
                            })} type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-800" />
                            <span className="relative right-7" onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaEye></FaEye>
                                        : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </label>
                        {/* Indicate the error messages for password validation */}
                        {errors.password && (
                            <>
                                {errors.password.type === "length" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                {errors.password.type === "lowercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                {errors.password.type === "uppercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                            </>
                        )}

                    </div>

                    <button  className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
              
             
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already Have Account?
                    <Link to="/login" className="underline text-purple-600">login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;