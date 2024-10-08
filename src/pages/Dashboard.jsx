import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Siidebar from "../components/Siidebar";
import Profile from "../components/Profile";

const Dashboard = () => {
  const location = useLocation();
  const [r, setR] = useState("");
  console.log(location);
  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);

    const tabfromurl = urlparams.get("tab");
    if (tabfromurl) {
      setR(tabfromurl);
    }
    // setR(()=>r=tabfromurl)
    console.log(tabfromurl);
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* sidebar */}
    
      <div className="w-56">
      <Siidebar />
      </div>
      {/* profile page */}
      <div>{r === "profile" && <Profile />}</div>
    </div>
  );
};

export default Dashboard;
