import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'


export default function PrivateRoutes() {
	const {user} = useAuth()

	//for development:
	// const user = true
	return user ? <Outlet /> : <Navigate to="/login" />
}
