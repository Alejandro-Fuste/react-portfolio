import React from 'react';
import './style.css';
import Orlando from '../../assets/orlando.jpg';

const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<h2>Contact Info</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-sm-6 leftCol">
						<div>
							<p className="info">
								<i className="fas fa-envelope" />Email:{' '}
								<a href="mailto: afuste7@gmail.com">afuste7@gmail.com</a>
							</p>
						</div>

						<div>
							<p className="info">
								<i className="fas fa-mobile" />Phone: <a href="tel:+14074962033">(407) 496-2033</a>
							</p>
						</div>

						<div>
							<p className="info">
								<i className="fas fa-map-marker-alt" />Location: Orlando, FL
							</p>
						</div>

						<div className="picDiv">
							<img className="orlandoPic" src={Orlando} alt="Orlando" />
						</div>
					</div>

					<div className="col-sm-6">
						<form>
							<p className="info">Leave me a note:</p>

							<div className="form-group">
								<div className="col-sm-10">
									<label htmlFor="name">Name</label>
									<input type="text" className="form-control" name="name" />
								</div>

								<br />

								<div className="form-group">
									<div className="col-sm-10">
										<label htmlFor="email">Email</label>
										<input type="email" className="form-control" name="email" />
									</div>
								</div>

								<div className="form-group">
									<div className="col-sm-10">
										<label htmlFor="message">Message</label>
										<textarea className="form-control" aria-label="With textarea" />
									</div>
								</div>

								<button type="submit" className="btn btn-dark">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
