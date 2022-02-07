import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from 'react-foundation';

const Nav = () => {
	// Taking currentPage and setPageChange props from Header, which is From MainContainer, to set current display page
	const [currentPage, setPageChange] = useState("Home");

	return (
		<nav className="navbar navbar-expand-sm">
			<div className="navbar__container container-fluid">
				{/* Collapse navigate button on small size screen  */}
				<button
					className="navbar-toggler nav-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapseToggler"
					aria-controls="navbarCollapseToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarCollapseToggler">
					<ul className="navbar-nav me-auto mb-2 mb-sm-0">
						{/* <li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#home">
								<h5>Home</h5>
							</a>
						</li> */}
						<li className="nav-item">
							<Link
              // className='nav-link'
							className={ currentPage === 'Home' ? 'nav-link active nav-active' : 'nav-link'}
							to="/" 
							onClick={() => setPageChange('Home')}
              >
								<h5>Home</h5>
							</Link>
						</li>
						{/* dropdown nav item */}
						<li className="nav-item dropdown">
							<Link
                // className='nav-link'
								className={currentPage === 'Login' ? 'nav-link active nav-active' : 'nav-link'}
								// className="nav-link dropdown-toggle"
								to="/Login"
								onClick={() => setPageChange('Login')}
							>
								<h5>Login</h5>
							</Link>
						</li>
						<li className="nav-item">
							<Link
              // className='nav-link'
							className={currentPage === 'Signup' ? 'nav-link active nav-active' : 'nav-link'} 
							to="/Signup" 
							onClick={() => setPageChange('Signup')}
              >
								<h5>Signup</h5>
							</Link>
						</li>
						<li className="nav-item">
							<Link
              // className='nav-link'
							className={currentPage === 'Profile' ? 'nav-link active nav-active' : 'nav-link'} 
							to="/Profile" 
							onClick={() => setPageChange('Profile')}
              >
								<h5>Profile</h5>
							</Link>
						</li>
            <li className="nav-item">
							<Link
              // className='nav-link'
							className={currentPage === 'Calendar' ? 'nav-link active nav-active' : 'nav-link'}
							to="/Calendar" 
							onClick={() => setPageChange('Calendar')}
              >
								<h5>Calendar</h5>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


// const Nav = () => {
// 	return (
// 		// <div>
// 		// <MenuItem>

// 		// </MenuItem>

// 		// <MenuItem>
// 		// <Link
// 		// className='nav-link'
// 		// to="/Login" 
// 		// >
// 		// <h5>Login</h5>
// 		// </Link>
// 		// </MenuItem>

// 		// <MenuItem>
// 		// <Link
// 		// className='nav-link'
// 		// to="/Signup" 
// 		// >
// 		// <h5>Signup</h5>
// 		// </Link>
// 		// </MenuItem>

// 		// <MenuItem>
// 		// <Link
// 		// className='nav-link'
// 		// to="/Profile" 
// 		// >
// 		// <h5>Profile</h5>
// 		// </Link>
// 		// </MenuItem>

// 		// <MenuItem>
// 		// <Link
// 		// className='nav-link'
// 		// to="/Calendar" 
// 		// >
// 		// <h5>Calendar</h5>
// 		// </Link>
// 		// </MenuItem>
// 		// </div>

// 		<ul className="menu navbar align-center">
// 			<li><Link className='nav-link' to="/" ><h5>Home</h5></Link></li>
// 			<li><Link className='nav-link' to="/Login" ><h5>Login</h5></Link></li>
// 			<li><Link className='nav-link' to="/Signup" ><h5>Signup</h5></Link></li>
// 			<li><Link className='nav-link' to="/Profile" ><h5>Profile</h5></Link></li>
// 			<li><Link className='nav-link' to="/Calendar" ><h5>Calendar</h5></Link></li>
// 		</ul>
// 	);
// };

export default Nav;
