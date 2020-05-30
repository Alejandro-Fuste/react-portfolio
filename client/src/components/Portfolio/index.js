import React from 'react';
import Style from './style.css';
import Poddler from '../../assets/Poddler.png';
import Burger from '../../assets/burgerGif.gif';
import EmployeeTracker from '../../assets/empTrack1.gif';
import NoteTaker from '../../assets/noteTakerGif.gif';
import TemplateEngine from '../../assets/templateGif1.gif';
import ReadMe from '../../assets/readmeGif.gif';
import ProjectOne from '../../assets/projectOne.png';
import WeatherDashboard from '../../assets/weatherDashboard.png';
import Scheduler from '../../assets/scheduler.png';
import PasswordGenerator from '../../assets/passwordGenerator.png';

const Portfolio = () => {
	return (
		<section id="port">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<h2 id="portfolio">Portfolio</h2>
					</div>
				</div>

				<div className="row flex-row flex-nowrap" id="scrollTarget">
					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://sheltered-gorge-46855.herokuapp.com/" target="_blank">
								<img className="card-img-top portPics" src={Poddler} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Poddler <br /> (Full-Stack App)
								</h5>
								<a
									href=" https://github.com/yarocruz/project-2"
									target="_blank"
									className="btn btn-dark"
								>
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://zep-burger.herokuapp.com/" target="_blank">
								<img className="card-img-top portPics" src={Burger} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Burger <br /> (MVC & Handlebars App)
								</h5>
								<a href="https://github.com/ZepCap/burger" target="_blank" className="btn btn-dark">
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://github.com/ZepCap/employee-tracker" target="_blank">
								<img className="card-img-top portPics" src={EmployeeTracker} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Employee Tracker <br /> (Node & MySQL App)
								</h5>
								<a
									href="https://github.com/ZepCap/employee-tracker"
									target="_blank"
									className="btn btn-dark"
								>
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://zepnote-taker.herokuapp.com/" target="_blank">
								<img className="card-img-top portPics" src={NoteTaker} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Note Taker <br /> (Express & Heroku App)
								</h5>
								<a href="https://github.com/ZepCap/note-taker" target="_blank" className="btn btn-dark">
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://github.com/ZepCap/Template_Engine" target="_blank">
								<img className="card-img-top portPics" src={TemplateEngine} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Template Engine <br /> (Node & OOP App)
								</h5>
								<a
									href="https://github.com/ZepCap/Template_Engine"
									target="_blank"
									className="btn btn-dark"
								>
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://github.com/ZepCap/Read_Me" target="_blank">
								<img className="card-img-top portPics" src={ReadMe} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									README Generator <br /> (NodeJS App)
								</h5>
								<a href="https://github.com/ZepCap/Read_Me" target="_blank" className="btn btn-dark">
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://zepcap.github.io/Project_One/" target="_blank">
								<img className="card-img-top portPics" src={ProjectOne} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									LocalWire <br /> (Front-End API App)
								</h5>
								<a
									href="https://github.com/ZepCap/Project_One"
									target="_blank"
									className="btn btn-dark"
								>
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://zepcap.github.io/Weather_Dashboard/" target="_blank">
								<img className="card-img-top portPics" src={WeatherDashboard} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Weather Dashboard <br /> (Ajax API App)
								</h5>
								<a
									href="https://github.com/ZepCap/Weather_Dashboard"
									target="_blank"
									className="btn btn-dark"
								>
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://zepcap.github.io/Scheduler/" target="_blank">
								<img className="card-img-top portPics" src={Scheduler} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Scheduler <br /> (Dynamic JS App)
								</h5>
								<a href="https://github.com/ZepCap/Scheduler" target="_blank" className="btn btn-dark">
									Repo
								</a>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card text-center">
							<a href="https://zepcap.github.io/Password-Generator/" target="_blank">
								<img className="card-img-top portPics" src={PasswordGenerator} alt="Card image cap" />
							</a>
							<div className="card-body">
								<h5 className="card-title">
									Password Generator <br /> (HTML, CSS, & JS App)
								</h5>
								<a
									href="https://github.com/ZepCap/Password-Generator"
									target="_blank"
									className="btn btn-dark"
								>
									Repo
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
