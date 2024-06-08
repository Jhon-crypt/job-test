"use client"
import '../../styles/miniNavTav.css'
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { LuArchive } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";


export default function MiniNav() {

    const [activeTab, setActiveTab] = useState('Active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (

        <>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-2">
                <div className='d-flex align-items-center'>
                    <div className="mini-tab-switch">
                        <div className="mini-toggle-switch rounded" style={{ width: "100%" }}>
                            <button
                                className={`rounded mini-tab ${activeTab === 'Active' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Active')}
                                style={{ width: "50%" }}
                            >
                                Active
                            </button>
                            <button
                                className={`rounded mini-tab ${activeTab === 'Draft' ? 'active' : ''}`}
                                onClick={() => handleTabClick('Draft')}
                                style={{ width: "50%" }}
                            >
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 ms-4'>
                        <div className='position-relative'>
                            <IoIosSearch className='search-icon me-5' size={20}/>
                            <input type="text" class="form-control-plaintext" id="staticEmail" placeholder='Search from job postings' />
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <div className='me-2'>
                        <LuArchive size={25} className='text-muted' />
                    </div>
                    <div className='me-2'>
                        <CiFilter size={25} className='text-muted' />
                    </div>
                    <div>
                        <button className='btn text-white btn-md' style={{ backgroundColor: "#cd5439"}}>
                            <FaPlus className='me-1'/> Create a new job
                        </button>
                    </div>
                </div>
                
            </div>

        </>

    )

}