
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className='flex justify-center items-center flex-col h-screen space-y-5'>
			<h1 className='  text-6xl font-bold flex justify-center items-center'>Page Not Found</h1>
			<Link to="/"><button className='btn'>Go to home</button></Link>
		</div>
	);
};

export default ErrorPage;