import React, { useState } from 'react'
import './Services.css'

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">My Personal Projects</span>

			<div className="services__container container grid">
				<div className="services_content">
					<div>
						<i className="uil uil-web-grid services_icon"></i>
						<h3 className="services_title">Weather <br /> App</h3>
					</div>

					<span onClick={() => toggleTab(1)} className="services_button"
					> View More
						<i className="uil uil-arrow-right 
				services_button-icon"></i></span>

					<div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
						<div className="services_modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times 
						services_modal-close"></i>

							<h3 className="services_modal-title">Weather App</h3>
							<p className="services_modal-description">
							"Developed a fully responsive weather application using React.js"
							
							</p>
							<ul className="services_modal-services grid">
								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon" >
										<p className="services_modal-info">
											Developed the modular and scalable application.
										</p>
									</i>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Integrated with weather APIs to dynamically fetch and display real-time weather data
										</p>
									</i>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Provides users accurate and up-to-date information about latest weather.
										</p>
									</i>
								</li>

								{/* <li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
											I position your company brand.
										</p>
									</i>
								</li> */}

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Utilized CSS media queries and responsive design techniques to optimize the app's layout
										</p>
									</i>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services_content">
					<div>
						<i className="uil uil-arrow services_icon"></i>
						<h3 className="services_title">Portfolio <br /> Project</h3>
					</div>

					<span className="services_button" onClick={() => toggleTab(2)}>View More
						<i className="uil uil-arrow-right 
				services_button-icon"></i></span>

					<div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
						<div className="services_modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times 
						services_modal-close"></i>

							<h3 className="services_modal-title">Portfolio Project</h3>
							<p className="services_modal-description">
							"Showcases a diverse range of professional accomplishments, skills, and projects"
							</p>
							<ul className="services_modal-services grid">
								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Demonstrated proficiency in front-end technologies 
										</p>
									</i>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Created a visually appealing and functionally robust portfolio
										</p>
									</i>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										It effectively highlights professional expertise and achievements
										</p>
									</i>
								</li>

								{/* <li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
											I position your company brand.
										</p>
									</i>
								</li> */}

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Employed version control systems, such as Git, for collaborative developement.
										</p>
									</i>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services_content">
					<div>
						<i className="uil uil-edit services_icon"></i>
						<h3 className="services_title">Share Market <br /> Trading App</h3>
					</div>

					<span className="services_button" onClick={() => toggleTab(3)}>View More
						<i className="uil uil-arrow-right 
				services_button-icon"></i></span>

					<div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
						<div className="services_modal-content">
							<i onClick={() => toggleTab(0)} className="uil uil-times 
						services_modal-close"></i>

							<h3 className="services_modal-title">Share market Trading App</h3>
							<p className="services_modal-description">
						    "Developed a sophisticated share market trading application utilizing React.js"
							</p>
							<ul className="services_modal-services grid">
								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										 Implemented real-time data integration from market APIs 
										</p>
									</i>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Provide users with up-to-date stock information and analytics, enabling informed investment decisions
										</p>
									</i>
								</li>

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Ensures a seamless and efficient trading experience
										</p>
									</i>
								</li>

								{/* <li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
											I position your company brand.
										</p>
									</i>
								</li> */}

								<li className="services_modal-service">
									<i className="uil uil-check-circle services_modal-icon">
										<p className="services_modal-info">
										Ability to deliver scalable and innovative solutions in a dynamic market environment.
										</p>
									</i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services