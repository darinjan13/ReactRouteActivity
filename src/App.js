import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { Home, About, Events, Contact, Page404 } from './pages'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="/events" element={ <Events/> } />
				<Route path="/contact" element={ <Contact /> } />
				<Route path="/*" element={ <Page404 /> } />
			</Routes>
		</Router>
	)
}

export default App;