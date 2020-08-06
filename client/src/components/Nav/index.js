import React from 'react';
import './style.css';
// import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/AF_logo_3.svg';

const Nav = () => {
	return (
		<header>
			<div className="container-fluid" style={{ padding: '0px' }}>
				<div className="row">
					<div className="col-sm-12" style={{ padding: '0px' }}>
						<nav
							className="navbar navbar-expand-md justify-content-end navbar-light"
							id="navbar"
							style={{ padding: '8px 0px' }}
						>
							<a className="navbar-brand mr-auto" href="#home">
								<img src={Logo} alt="logo" id="logo" />
							</a>
							<button
								className="navbar-toggler border-0"
								data-toggle="collapse"
								data-target="#navbarMenu"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbarMenu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<a className="nav-link active" href="#home">
											Home
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link active" href="#about">
											<i className="fas fa-user" />About
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link active" href="#portfolio">
											<i className="fas fa-th" />Portfolio
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link active" href="#contact">
											<i className="fas fa-envelope" />Contact
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
