import React, { useEffect, useState } from "react";
// import Button from "../../components/Button";

function TechQuest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [display, setDisplay] = useState(false);

  const rules = [
    " Participants can compete individually or in teams.",
    "Each challenge must be completed in sequence to move to the next.",
    "External help or unauthorized tools are not allowed.",
    "Tampering with equipment or sabotaging other teams is strictly prohibited.",
    "Fair play and teamwork are required at all times.",
    "Respect the event timeline and instructions from organizers.",
    "Use only the tools and resources provided or explicitly allowed.",
    "The first team or participant to solve all challenges and find the final prize wins.",
  ];

  const round1 = [
    "Coding Challenge",
    "Debugging",
    "Crypo-graphic word puzzles",
    "Data Exploration",
    "HTML, CSS",
    "Networking",
  ];

  const round2 = [
    "It will be a debugging of given code.",
    "3 questions with errors are given. You have to rectify the errors.",
    "30 minutes given for this round.",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">TechQuest</div>
        <div className="count-p">Treasure Hunt</div>
        <div className="d-flex">
          <div className="img">
            <img src="/imgs/tech/event5.webp" width={450} alt="" />
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
              +91 8870866844
            </h5>
            <h5
              style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}
            >Ayesha Afrin</h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              TechQuest is an exciting, technology-focused treasure hunt that
              challenges participants with a series of technical puzzles and
              tasks. The event starts with a QR code that leads to the first
              clue, followed by a sequence of challenges involving encryption,
              command-line skills, coding, and web development. Each clue must
              be solved to progress to the next, culminating in an interactive
              sensor-based task that reveals the final clue. Designed for tech
              enthusiasts, students, and professionals, TechQuest offers a fun
              and educational experience, combining problem-solving and
              technical skills in a competitive, team-based environment.{" "}
            </p>
            <h2>Challenges</h2>
            <ol>
              {round1.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ol>
            <div
              className="ribbon-particles"
              style={{ display: `${display && "block"}` }}
            ></div>

            <h2>Rules</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <div className="treasure">
              <button
                onClick={() => console.log("%cﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ", "color: red")}
                style={{
                  padding: 8,
                  backgroundImage:
                    "linear-gradient(to right, #613aeb, #9e00b7)",
                  display: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                }}
              >
                Treasure
              </button>
              <button
                onClick={() => window.prompt("Are You having Fun")}
                style={{
                  padding: 8,
                  backgroundImage:
                    "linear-gradient(to right, #613aeb, #9e00b7)",
                  display: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                }}
              >
                Treasure
              </button>
              <button
                onClick={() => console.log("%c✩ ♬ ₊.🎧⋆☾⋆⁺₊✧", "color: yellow")}
                style={{
                  padding: 8,
                  backgroundImage:
                    "linear-gradient(to right, #613aeb, #9e00b7)",
                  display: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                }}
              >
                Treasure
              </button>
              <button
                onClick={() => console.log("My Mind Flies !")}
                style={{
                  padding: 8,
                  backgroundImage:
                    "linear-gradient(to right, #613aeb, #9e00b7)",
                  display: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                }}
              >
                Treasure
              </button>
              <button
                onClick={() => {
                  setDisplay(true);
                  console.log(
                    "%cIt's the most common vowel sound used when a baby starts babbling",
                    "color: gold"
                  );
                }}
                style={{
                  padding: 8,
                  backgroundImage:
                    "linear-gradient(to right, #613aeb, #9e00b7)",
                  display: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                }}
              >
                Treasure
              </button>
              <button
                onClick={() =>
                  console.log("%cThanks for Playing : )", "color: pink")
                }
                style={{
                  padding: 8,
                  backgroundImage:
                    "linear-gradient(to right, #613aeb, #9e00b7)",
                  display: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                }}
              >
                Treasure
              </button>
            </div>
            <ul className="students">
              <h2>Coordinators</h2>
              <p>Ayesha Afrin </p>
              <p>Ruwaida Fatima J</p>
              <p>Afrin</p>
              <p>Nivetha</p>
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

export default TechQuest;
