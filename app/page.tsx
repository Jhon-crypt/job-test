"use client"
import { useEffect } from "react";
import Header from "./components/header/header";
import MiniNav from "./components/section/miniNavSection"
import JobListingsSection from "./components/section/jobListingSection";
import { BrowserView, MobileView } from 'react-device-detect';


export default function Home() {

  return (
    <>
      <BrowserView>
        <Header />
        <div className="container-fluid">
          <MiniNav />
          <JobListingsSection />
        </div>
      </BrowserView>

      <MobileView>
        <div style={{ height: "100vh", alignContent: "center" }}>
          <div className="d-flex justify-content-center">
            <p>Open only on Desktop for now</p>
          </div>
        </div>
      </MobileView>



    </>
  );
}
