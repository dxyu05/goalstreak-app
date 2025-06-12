"use client";

import Image from "next/image";
import DashboardPage from "./dashboard/page";
import React, { useState } from 'react';
import ProfilePage from "./profile/page";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="outerContainer">
      {/* Head component for title and meta tags is removed for this environment */}
      {/* In a full Next.js project, you would uncomment the following: */}
      {/*
      <Head>
        <title>Minimalist Dashboard</title>
        <meta name="description" content="A minimalist dashboard built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      */}

      {/* Sidebar component */}
      <aside className="sidebar">
        <h2 className="sidebarTitle">App Name</h2>
        <nav className="sidebarNav">
                    <a
            href="#"
            className={`sidebarNavItem ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentPage('dashboard')}
          >
            Dashboard
          </a>
          <a href="#" className="sidebarNavItem">Goals</a>
          <a href="#" className="sidebarNavItem">Feed</a>
          <a
            href="#"
            className={`sidebarNavItem ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentPage('profile')}
          >
            Profile
          </a>
          <a href="#" className="sidebarNavItem">Reports</a>
          <a href="#" className="sidebarNavItem">Settings</a>
        </nav>
      </aside>

      {/* Main content area wrapped to accommodate the sidebar */}
      <div className="mainContentContainer">
        {/* New wrapper to hold the dashboard content and profile section side-by-side */}
        <div className="dashboardAndProfileWrapper">
            {currentPage === 'dashboard' && (
            <div className="dashboardMainArea">
              <DashboardPage />
            </div>
          )}

            {currentPage === 'profile' && (
            <div className="dashboardMainArea"> {/* Reusing dashboardMainArea for layout */}
              <ProfilePage />
            </div>
          )}

          {/* Profile Section on the right */}
          <aside className="profileSection">
            <div className="profilePicture">
              {/* Placeholder for profile image, you can replace with an actual <img> tag */}
              <span>JD</span>
              {/* <img src="https://placehold.co/120x120/A2D2FF/000?text=JD" alt="Profile Picture" /> */}
            </div>
            <h3 className="profileName">John Doe</h3>

            <h4 className="friendsListTitle">Friends</h4>
            <ul className="friendsList">
              <li className="friendItem">
                <div className="friendAvatar">JS</div>
                {/* <img src="https://placehold.co/40x40/FFC7EA/000?text=JS" alt="Friend Avatar" /> */}
                <span className="friendName">Jane Smith</span>
              </li>
              <li className="friendItem">
                <div className="friendAvatar">MA</div>
                {/* <img src="https://placehold.co/40x40/B3E0C1/000?text=MA" alt="Friend Avatar" /> */}
                <span className="friendName">Mike Adams</span>
              </li>
              <li className="friendItem">
                <div className="friendAvatar">EM</div>
                {/* <img src="https://placehold.co/40x40/FFF8DC/000?text=EM" alt="Friend Avatar" /> */}
                <span className="friendName">Emily White</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      </div>

  );
}
