import Image from "next/image";

export default function Home() {
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
          <a href="#" className="sidebarNavItem">Dashboard</a>
          <a href="#" className="sidebarNavItem">Goals</a>
          <a href="#" className="sidebarNavItem">Feed</a>
          <a href="#" className="sidebarNavItem">Reports</a>
          <a href="#" className="sidebarNavItem">Settings</a>
        </nav>
      </aside>

      {/* Main content area wrapped to accommodate the sidebar */}
      <div className="mainContentContainer">
        {/* New wrapper to hold the dashboard content and profile section side-by-side */}
        <div className="dashboardAndProfileWrapper">
          <div className="dashboardMainArea">
            <header className="header">
              {/* Dashboard title remains in the header */}
              <h1 className="title">Dashboard Overview</h1>
              {/* Navigation is now in the sidebar, so it's removed from here */}
            </header>

            <main className="main">
              {/* Section for key performance indicator (KPI) cards */}
              <section className="cardRow">
                {/* Individual KPI card for Total Users */}
                <div className="card">
                  <h2 className="cardTitle">My Goals</h2>
                </div>
                {/* Individual KPI card for Revenue */}
                <div className="card">
                  <h2 className="cardTitle">Goals Completed</h2>
                  <p className="cardValue">12,345</p>
                </div>
              </section>

              {/* Section for a chart or visual representation of data */}
              <section className="chartSection">
                <h2 className="sectionTitle">Activity Trend</h2>
                {/* Placeholder for where a charting library (e.g., Recharts, Chart.js) would be integrated */}
                <div className="placeholderChart">
                  <p>Chart goes here</p>
                </div>
              </section>

              {/* Section for displaying recent activities or logs */}
              <section className="recentActivity">
                <h2 className="sectionTitle">Recent Activity</h2>
                <ul className="activityList">
                  {/* Example activity items */}
                  <li className="activityItem">User 'John Doe' logged in. <span className="activityTime">2 mins ago</span></li>
                  <li className="activityItem">User 'Mike Adams' completed goal 'Study for Finals'.<span className="activityTime">1 hour ago</span></li>
                  <li className="activityItem">Order #1001 placed. <span className="activityTime">3 hours ago</span></li>
                  <li className="activityItem">User 'Jane Smith' updated profile. <span className="activityTime">Yesterday</span></li>
                </ul>
              </section>
            </main>
          </div>

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
