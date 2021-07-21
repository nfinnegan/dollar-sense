import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import { FaTimes } from "react-icons/fa";
import moment from "moment"
import * as LDClient from "launchdarkly-js-client-sdk";
import { auth } from "../../Firebase";

const Goals = ({ id, title, emoji, amount, saveBy, onDelete }) => {
  const [featureFlag, setFeatureFlag] = useState()

  const formatDate =  (date) => {
    let convertedDate =  `${new Date(date).getMonth() + 1}/${
      new Date(date).getDate() + 1
    }/${new Date(date).getFullYear()}`;

    return convertedDate;
  };

  useEffect(() => {
    var user = {
      "key": `${auth.currentUser.email}`
    };
    const ldclient = LDClient.initialize('60f750d5b1a03d26078523a7', user);

    ldclient.on('ready', function() {
       
      var showFeature = ldclient.variation("allow-specific-users-access-to-delete-goal");
      setFeatureFlag(showFeature)
      console.log("It's now safe to request feature flags", showFeature);
      if (showFeature) {
        console.log("showing feature")
      } else {
        console.log("not showing feature")
      }
     })
  }, [])


  const daysLeftToSave = () => {
    let x = moment(saveBy)
    let currentDate = moment()
    let daysLeft = (x.diff(currentDate,"days")) + 2
    return daysLeft
  };

  return (
    <div>
      
      <Container className="d-flex align-items-center justify-content-center goalsPage">
        <Card className="goalsCard" style={{ maxWidth: "540px" }}>
          <Card.Body>
            <div className="row goalBody">
              <h3 className="card-title text-center goalTitle">
                {" "}
                {emoji} {title}{" "}
                <div id="deleteBtn">
               {featureFlag && <FaTimes
                  className="deleteIcon"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => onDelete(id)}
                /> }
                </div>
              </h3>
              <p className="card-text">
                <strong>Total to Save:</strong> ${amount}
              </p>
              <p className="card-text">
                <strong>Save this amount by:</strong> {formatDate(saveBy)}
              </p>
              <p className="card-text">
                <strong>Days Left to Save: {daysLeftToSave()}</strong>
                {} 
              </p>
            </div>
        
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Goals;
