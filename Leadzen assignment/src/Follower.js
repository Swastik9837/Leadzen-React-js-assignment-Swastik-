import React from "react";
import { useState } from "react";
import MoreInfo from "./MoreInfo";

const Follower = ({ id, name, username, email, phone, company, address , website}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        {company.name}
        <div>
          <h4>contact</h4>
          {name}
        </div>
        <div>
          <h4>city </h4>
          {address.city}
        </div>
        <div>
          <h4>state </h4>
          {address.street}
        </div>

        <button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "Hide Details" : "View Details"}
        </button>
      </header>
      {showInfo && (
        <MoreInfo
          company={company}
          phone={phone}
          id={id}
          username={username}
          email={email}
          address={address}
          name={name}
          website ={ website}
        />
      )}
    </article>
  );
};
export default Follower;
