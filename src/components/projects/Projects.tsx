import React, { useState, useEffect } from 'react';

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import Project from "./Project";

interface Proj {
	title: string;
	techStack: string[];
	description: string;
	launchable: boolean;
	launchUrl?: string;
	codeUrl: string;
}

function Projects() {
	const [activeTab, setActiveTab] = useState('1');
	const [mobProj, setMobProj] = useState<Proj[]>([]);

	const API_URL = 'https://lewiscodesapi-env.eba-ufjsyfvc.eu-west-2.elasticbeanstalk.com';
	// const API_LOCAL = 'http://localhost:8080'

	useEffect(() => {
		loadMobProj();
	}, []);


	const loadMobProj = async () => {
		const response = await fetch(API_URL + "/api/projects/mobile");
		const data: Proj[] = await response.json();
		setMobProj(data);
	}

	const toggle = (tab: string) => {
		if(activeTab !== tab) setActiveTab(tab);
	}
	return (
		<div className="mb-5">
			<h1 className="alert alert-primary">Projects</h1>
			<Nav tabs className="nav-fill">

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => { toggle('1'); }}
					>
						Web
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => { toggle('2'); }}
					>
						Desktop
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '3' })}
						onClick={() => { toggle('3'); }}
					>
						Mobile
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<div className="row align-content-center">
						{webProjects.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl || ""}
									techStack={i.techStack}
									launchable={i.launchable}
									key={i.title}
								/>
							);
						})}
					</div>
				</TabPane>
				<TabPane tabId="2">
					<div className="row">
						{desktopProjects.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl || ""}
									techStack={i.techStack}
									launchable={i.launchable}
									key={i.title}
								/>
							);
						})}
					</div>
				</TabPane>
				<TabPane tabId="3">
					{/*<div className="row">*/}
					{/*	{mobileProjects.map((i) => {*/}
					{/*		return (*/}
					{/*			<Project*/}
					{/*				title={i.title}*/}
					{/*				description={i.description}*/}
					{/*				codeUrl={i.codeUrl}*/}
					{/*				launchUrl={i.launchUrl || ""}*/}
					{/*				techStack={i.techStack}*/}
					{/*				launchable={i.launchable}*/}
					{/*				key={i.title}*/}
					{/*			/>*/}
					{/*		);*/}
					{/*	})}*/}
					{/*</div>*/}
					<div className="row">
						{mobProj.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl || ""}
									techStack={i.techStack}
									launchable={i.launchable}
									key={i.title}
								/>
							);
						})}
					</div>
				</TabPane>
			</TabContent>
		</div>
	);
}


const webProjects = [
	{
		title: "Code Share",
		description: "A web app for storage and retrieval of code snippets. Includes a REST API and React web view",
		codeUrl: "https://github.com/codeslewis/Code_Share_React",
		launchable: true,
		launchUrl: "https://youtu.be/EY8chA5bSfc",
		techStack: ["java", "spring", "react"],
	},
	{
		title: "Cinema Booking API",
		description: "A RESTful web API that handles the booking and returning of theatre seats.",
		codeUrl: "https://github.com/codeslewis/Cinema_API",
		launchable: false,
		launchUrl: "",
		techStack: ["java", "spring"],
	},
	{
		title: "Bake Buddy",
		description: "A conversion app for common baking ingredients.",
		codeUrl: "https://github.com/codeslewis/Baking_Conversions",
		launchable: true,
		launchUrl: "https://bake-buddy.netlify.app/",
		techStack: ["react", "js"],
	},
	{
		title: "Lewis Codes",
		description: "This site. A React SPA",
		codeUrl: "https://github.com/codeslewis/Lewis-Codes",
		launchable: false,
		launchUrl: "",
		techStack: ["react", "ts", "node"],
	}
];

// const mobileProjects = [
// 	{
// 		title: "Bake Buddy (Android)",
// 		description: `A baking ingredient conversion app. This Android app converts Imperial and US Legal baking ingredient measurements into the metric system.`,
// 		codeUrl:
// 			"https://github.com/codeslewis/Bake_Buddy_Android/tree/master/app/src",
// 		launchable: false,
// 		launchUrl: null,
// 		techStack: ["android", "java"],
// 	},
// ];

const desktopProjects = [
	{
		title: "JSON Database",
		description: "A multithreaded document database that stores data in a json file. Includes a command line client",
		codeUrl:
			"https://github.com/codeslewis/Json_Database/tree/master/JSON%20Database/task/src",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
	{
		title: "Text Encryption",
		description: "Encrypt and Decrypt text via files or command line arguments using a shift or a unicode encryption algorithm",
		codeUrl:
			"https://github.com/codeslewis/encryptor",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
	{
		title: "Matrix Calculator",
		description: "Performs math operations on numeric matrices",
		codeUrl:
			"https://github.com/codeslewis/Matrix_Calculator",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
	{
		title: "Noughts and Crosses",
		description: `Java Desktop Noughts and Crosses game using the swing library for GUI`,
		codeUrl:
			"https://github.com/codeslewis/DesktopNoughtsAndCrosses",
		launchable: true,
		launchUrl: "https://youtu.be/1PjB4aNRjBU",
		techStack: ["java"],
	},
	{
		title: "Minesweeper",
		description: "Command Line Minesweeper game",
		codeUrl:
			"https://github.com/codeslewis/Minesweeper/tree/master/Minesweeper/task/src/minesweeper",
		launchable: false,
		launchUrl: null,
		techStack: ["kotlin"],
	},
	{
		title: "Battleships",
		description: "A Battleship game for terminal.",
		codeUrl:
			"https://github.com/codeslewis/Battleship/tree/master/Battleship/task/src/battleship",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
];

export default Projects;
