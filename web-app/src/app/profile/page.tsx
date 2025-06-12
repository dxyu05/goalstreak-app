export default function ProfilePage() {
    return (
    <>
      <header className="header">
        <h1 className="title">My Profile</h1>
      </header>
      <main className="main">
        <section className="profileDetailCard card">
          <div className="profilePicture" style={{ margin: '0 auto 1.5rem auto' }}>
            <span>JD</span>
          </div>
          <h3 className="profileName" style={{ marginBottom: '1rem' }}>John Doe</h3>
          <p className="profileInfo">Email: john.doe@example.com</p>
          <p className="profileInfo">Member Since: January 2023</p>
          <p className="profileInfo">Location: San Francisco, CA</p>
          <button className="editProfileButton">Edit Profile</button>
        </section>

        <section className="goalsListCard" style={{ marginTop: '2rem' }}>
          <h2 className="sectionTitle">My Top Goals</h2>
          <ul className="activityList">
            <li className="goalItem">
              <span>Launch Startup MVP</span>
              <span className="goalProgress">75% <span className="goalDue">(Due: Sep 30)</span></span>
            </li>
            <li className="goalItem">
              <span>Read 12 Books This Year</span>
              <span className="goalProgress">50% <span className="goalDue">(7/12 Read)</span></span>
            </li>
            <li className="goalItem">
              <span>Run a Marathon</span>
              <span className="goalProgress">30% <span className="goalDue">(Training In Progress)</span></span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}