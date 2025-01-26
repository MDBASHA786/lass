import React, { useEffect } from "react";
// import Button from '../../components/Button';

function BioScope() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Teams of 2-3 members can participate.",
    "Each team gets a limited time to guess the movie or song.",
    "No phones or outside help allowed",
    "Organizers’ decisions are final.",
  ];

  const round1 = [
    "Players will be given a combination of images and song lyrics as clues. Using these clues, they must figure out the name of the respective movie or song within the given time.",
  ];

  const round2 = [
    "Players will draw movie names from a bowl. One team member will then act out the movie name (without speaking) for their teammates to guess correctly within the time limit.",
  ];

  const round3 = [
    "A partially blank movie name will be shown to the players. They must fill in the blanks to identify the correct movie name. ( one general clues will be given )",
  ];

  const round4 = ["SURPRIZE ROUND"];

  return (
    <>
      <div className="events">
        <div className="count-h">BioScope</div>
        <div className="count-p">Connections</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/nontech/event4.webp" width={450} alt="" />
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
              +91 9150240636
            </h5>
            <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Naveeth</h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Bio Scope is a fun and simple game for all movie and music lovers!
              The goal is to guess the name of a movie or song within a limited
              time. Players will be given exciting hints, images, or clues to
              help them figure out the answer. The clues can be tricky, funny,
              or creative, making the game even more entertaining. It’s all
              about quick thinking and having fun with friends. If you love
              movies and music, this is your chance to show off your skills and
              enjoy the thrill of guessing!
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

            <h2>Round-3</h2>
            <ul>
              {round3.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-4</h2>
            <ul>
              {round4.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Naveeth</p>
              <p>Thamim</p>
              <p>Faizal</p>
              <p>Niyaz</p>
              <p>Aathika</p>
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

export default BioScope;
