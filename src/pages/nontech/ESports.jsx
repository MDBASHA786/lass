import React, { useEffect } from "react";
// import Button from '../../components/Button';

function ESports() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Each team must consist of 2 to 3 members.",
    "Teams will be allotted slots on a first-come, first-served basis.",
    "All team members must adhere to the time limits for each round.",
    "Teams must follow instructions provided by the coordinators for each round.",
    "Any team arriving late to their scheduled round may forfeit their participation.",
    "Cheating, tampering with equipment, or unsportsmanlike behavior will lead to disqualification.",
    "The 'organizers’ decisions will be final in all matters.",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">ESports</div>
        <div className="count-p">BGMI</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/nontech/event3.webp" width={450} alt="" />
            <div
              className="btn-ly"
              style={{
                marginTop: -5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Button /> */}
            </div>
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 34, fontSize: 21 }}
            >
              +91 6380381466
            </h5>
            <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Mahadeer</h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Welcome to GameVerse! A thrilling team-based event packed with
              fun, excitement, and challenges that test your taste buds, skills,
              creativity, and teamwork. Compete with others in four engaging
              rounds and aim for victory in this ultimate gaming experience.{" "}
            </p>
            <h2>RULES</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <p style={{ margin: "12px 0" }}>
              <i style={{ color: "orange" }} className="bx bxs-notepad"></i>{" "}
              <strong>Note:</strong> Slight Modifications can be made for the
              competitive matches based on the registration count.
            </p>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Mahadeer</p>
              <p>Shahul</p>
              <p>Rilwan</p>
              <p>Shanjay Priyan</p>
              <p>Vigneshwaran</p>
            </ul>
          </div>
        </div>
        {/* <div style={{margin: 'auto', textAlign: 'center'}}>
                    <Button></Button>
                </div> */}
      </div>
    </>
  );
}

export default ESports;
