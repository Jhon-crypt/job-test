// src/components/JobListing.tsx

import React from 'react';
import { SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

interface JobListingProps {
    role: string;
    pay: string;
    location: string;
    skills: string[];
    applicants: number;
    views: number;
}

const JobListing: React.FC<JobListingProps> = ({ role, pay, location, skills, applicants, views }) => {
    return (
        <div className="card mb-3 shadow border-0">
            <div className="card-body">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src="logo2.png" alt="..." width="60px" />
                            </div>
                            <div className="flex-grow-1 ms-4">
                                <span className='d-block mb-2' style={{ color: "grey", fontSize: "13px" }}>Role</span>
                                <span className='d-block text-muted' style={{ fontSize: "15px" }}>Full Stack Developer</span>
                            </div>
                        </div>
                        <div className="ms-4">
                            <div className="ms-4">
                                <span className='d-block mb-2' style={{ color: "grey", fontSize: "13px" }}>Pay</span>
                                <span className='d-block text-muted' style={{ fontSize: "15px" }}>$400k-$600k</span>
                            </div>
                        </div>
                        <div className="ms-4">
                            <div className="ms-4">
                                <span className='d-block mb-2' style={{ color: "grey", fontSize: "13px" }}>Pay</span>
                                <span className='d-block text-muted' style={{ fontSize: "15px" }}>$400k-$600k</span>
                            </div>
                        </div>
                        <div className="ms-4">
                            <div className="ms-4">
                                <span className='d-block mb-2' style={{ color: "grey", fontSize: "13px" }}>skIlls</span>
                                <span className='d-block text-muted d-flex' style={{ fontSize: "15px" }}>
                                    <SiTypescript className='ms-1' />
                                    <FaGolang className='ms-1' />
                                    <DiRuby className='ms-1' />
                                    <IoLogoJavascript className='ms-1' />
                                    <FaPython className='ms-1' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="ms-4">
                            <div className="ms-4">
                                <span className='d-block mb-2 text-end' style={{ color: "grey", fontSize: "15px" }}>
                                    <FaEllipsisVertical />
                                </span>
                                <span className='d-block text-muted' style={{ fontSize: "15px" }}>$400k-$600k</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobListing;
