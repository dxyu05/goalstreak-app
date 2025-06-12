export default function DashboardPage() {
    return (
    <>
      <header className="header">
              {/* Dashboard title remains in the header */}
              <h1 className="title">Dashboard Overview</h1>
              {/* Navigation is now in the sidebar, so it's removed from here */}
            </header>

            <main className="main">
              {/* Section for key performance indicator (KPI) cards */}
              <section className="cardRow">
                {/* Individual KPI card for Total Users */}
                <div className="biggerCard">
                  <h2 className="cardTitle">My Goals</h2>
                  <ul className="activityList"> {/* Reusing activityList for consistent list styling */}
                  <li className="goalItem">
                    <span>Finish React Native App</span>
                    <span className="goalProgress">60% <span className="goalDue">(Due: Jul 15)</span></span>
                  </li>
                  <li className="goalItem">
                    <span>Write Blog Post on AI</span>
                    <span className="goalProgress">20% <span className="goalDue">(Due: Aug 1)</span></span>
                  </li>
                  <li className="goalItem">
                    <span>Complete Fitness Challenge</span>
                    <span className="goalProgress">100% <span className="goalDue">(Completed)</span></span>
                  </li>
                </ul>
                </div>
                {/* Individual KPI card for Revenue */}
                <div className="smallerCard">
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
    </>
  );
}