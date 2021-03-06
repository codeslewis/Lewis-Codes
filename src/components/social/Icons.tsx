import React from "react";
import "./Icons.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";


const Icons = () => {
	return (
		<div className="wrapper">
			<a
				className="icon github"
				href="https://github.com/codeslewis"
				target="_blank"
				rel="noreferrer"
			>
				<div className="tooltip">Github</div>
				<span>
        		<FaGithub />
      		</span>
			</a>
			<a
				className="icon linkedin-in"
				href="https://www.linkedin.com/in/lsneddoncodes/"
				target="_blank"
				rel="noreferrer"
			>
				<div className="tooltip">LinkedIn</div>
				<span>
        		<FaLinkedin />
      		</span>
			</a>
		</div>
	);
};

export default Icons;
