import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useRef, useEffect } from 'react'
import { useAuth } from '../utils/AuthContext'

const Login = () => {
	const { user, login } = useAuth()
	const navigate = useNavigate()
	const loginForm = useRef(null)

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const email = loginForm.current.email.value
		const password = loginForm.current.password.value
		const userInfo = { email, password }
		login(userInfo)
	}

	const handleDemoAccount = () => {
		const email = 'dave@gmail.com'
		const password = 'abcdabcd'
		const userInfo = { email, password }
		login(userInfo)
	}

	return (
		<>
			<form ref={loginForm} onSubmit={handleFormSubmit}>
				<div className="w-full flex justify-center items-center h-[80vh] ">
					<div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
						<h1 className="text-xl font-bold text-left">
							Log in to your account
						</h1>
						<input
							className="w-full px-4 py-2 border-2 border-black outline-0"
							type="email"
							placeholder="Enter your email"
							name="email"
						/>
						<input
							className="w-full px-4 py-2 border-2 border-black outline-0"
							type="password"
							placeholder="Enter your password"
							name="password"
						/>
						<button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">
							Log in
						</button>
						<div className="flex justify-center items-center space-x-3">
							<p>New here?</p>
							<p className="text-gray-500 hover:text-black">
								<Link to="/register">Register</Link>
							</p>
						</div>
					</div>
					<div onClick={handleDemoAccount} className="cursor-pointer h-[20vh] w-[15vh] bg-slate-500 flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 ease-in-out ml-4">Use demo account</div>
				</div>
			</form>
			{/* <Footer /> */}
		</>
	)
}

export default Login
