import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import Expertise from './pages/expertise';
import Portfolio from './pages/portfolio';
import Services from './pages/services';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/services' element={<Services/>} />
		<Route path='/expertise' element={<Expertise/>} />
		<Route path='/portfolio' element={<Portfolio/>} />
		<Route path='/contact' element={<Contact/>} />
	</Routes>
	</Router>
);
}

export default App;
