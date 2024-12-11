import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
	const { user, logout } = useAuth()
	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link to="/">
						<h1 className="text-xl font-bold text-blue-600 hover:underline">
							Kampus Eats
						</h1>
					</Link>
					<div className="flex space-x-6 items-center">
						{user ? (
							<>
								<Link
									to="/foodcourt"
									className="text-black hover:text-blue-600">
									Menu
								</Link>
								<Link to="/orders" className="text-black hover:text-blue-600">
									My Orders
								</Link>
								<Link to="/cart" className="text-black hover:text-blue-600">
									🛒
								</Link>
							</>
						) : null}

						{user ? (
							<button onClick={logout}>Logout</button>
						) : (
							<>
								<Link to="/login" className="text-black hover:text-blue-600">
									Login
								</Link>
								<Link
									to="/register"
									className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
									Register
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
