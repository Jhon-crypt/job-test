"use client";
import "../../styles/header.css";
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";
import { PiBellSimpleLight } from "react-icons/pi";
import { PiCaretDownBold } from "react-icons/pi";


export default function Header() {
    const [activeTab, setActiveTab] = useState("Jobs");

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <nav className="d-flex align-content-center navbar navbar-expand-lg navbar-light bg-white shadow px-3 py-1">
            <a className="navbar-brand" href="#">
                <img src="logo.png" className="d-inline-block align-top" alt="Logo" />
            </a>

            <div className="collapse navbar-collapse justify-content-center tab-switch mb-3">
                <div className="toggle-switch">
                    <button
                        className={`tab ${activeTab === "Jobs" ? "active" : ""}`}
                        onClick={() => handleTabClick("Jobs")}
                    >
                        <FaBriefcase className="align-icons" />
                        <span>Jobs</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "Messages" ? "active" : ""}`}
                        onClick={() => handleTabClick("Messages")}
                    >
                        <TiMessages className="align-icons" />
                        <span>Messages</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "Applicants" ? "active" : ""}`}
                        onClick={() => handleTabClick("Applicants")}
                    >
                        <BsPeopleFill className="align-icons"/>
                        <span>Applicants</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "Matches" ? "active" : ""}`}
                        onClick={() => handleTabClick("Matches")}
                    >
                        <RiUserStarLine className="align-icons" />
                        <span>Matches</span>
                    </button>
                </div>
            </div>
            <div className="mt-4 d-flex align-items-center">
                <div className="me-2">
                    <PiBellSimpleLight size={25}/>
                </div>
                <div className="me-2">
                    <img src="profile.png" />
                </div>
                <div>
                    <PiCaretDownBold size={25} />
                </div>
            </div>
        </nav>
    );
}
