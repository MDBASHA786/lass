import React, { useEffect } from "react";
// import Button from '../../components/Button';

function BoxCricket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "⁠7 players in an team ( 6 playing - 1 impact player)",
    "⁠Every match is a knockout match",
    "Umpire decision is final",
    "⁠Argument with the umpire  will lead to disqualification of your team . ",
    "⁠Rules can be modified by the coordinators in between the event.",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">BoxCricket</div>
        <div className="count-p">Cricket</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/nontech/event2.webp" width={450} alt="" />
            <div
              className="btn-ly"
              style={{
                marginTop: 25,
                marginBottom: 12,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Button /> */}
            </div>
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 2, fontSize: 21 }}
            >
              +91 7339498258
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              Abinash
            </h5>
            {/* <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Closed)</h6> */}
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Box cricket is a modified version of traditional cricket, played
              in a confined or smaller area like a box or court. It is popular
              in urban areas where space is limited. The game typically has
              simplified rules and is faster-paced, making it an enjoyable and
              inclusive sport.
            </p>
            <h2>Rules</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Abinash</p>
              <p>Riyas</p>
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

export default BoxCricket;
