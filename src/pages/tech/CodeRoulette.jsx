import React, { useEffect } from "react";
// import Button from '../../components/Button';

function CodeRoulette() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Team Formation Participants are initially grouped into random teams of 3-4 members. Each team is given a project topic or problem statement.",
    "The Twist  Every 15 minutes, a 'team shuffle' occurs are reassigned to new teams randomly. The shuffled teams must continue working on the project handed over by the previous group.",
    "Project Themes  Broad topics such as:  Social Good: A website or app addressing a community problem.  Game Development: A simple interactive game.",
    "Duration Total event time: 2–3 hours. 15-minute intervals for team switches. At the end of the event, each project is presented and evaluated.",
  ];

  const round1 = [
    "It will be a paper and pen round.",
    "25 multiple choice questions are provided.",
    "45 minutes for Round 1.",
    "From the first round, top 8 members or teams are selected.",
  ];

  const round2 = [
    "It will be a debugging of given code.",
    "3 questions with errors are given. You have to rectify the errors.",
    "30 minutes given for this round.",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">CodeRoulette</div>
        <div className="count-p">Coding</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/tech/event2.webp" width={450} alt="" />
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
              style={{ textAlign: "center", marginTop: 28, fontSize: 21 }}
            >
              +91 9514517428
            </h5>
            <h5  style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Shariga Thesnim M</h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Code Roulette is an exciting technical event where participants
              must collaboratively develop a project. The twist? Team members
              are randomly switched every 15 minutes, requiring participants to
              adapt quickly to new teammates, code styles, and ideas while
              staying focused on the project goal.
            </p>
            <h2>Rules</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-1</h2>
            <ul>
              {round1.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-2</h2>
            <ul>
              {round2.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Shariga Thesnim M</p>
              <p>Shameem Fathima M J</p>
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

export default CodeRoulette;
