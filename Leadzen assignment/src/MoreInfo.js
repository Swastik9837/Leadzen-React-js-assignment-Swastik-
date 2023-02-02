import React from "react";

const MoreInfo = ({ company, address, phone, email, name, website }) => {
  return (
    <section className="reviewh">
      <span className="moreinfoheader">
        <h4>Description</h4>
        <p className="pp">
          {`${company.name} ${""}${company.catchPhrase}${company.bs}`}
        </p>
      </span>
      <div className="content">
        <div className="left">
          <h4>Contact Person</h4>
          {name}
          <h4 className="moreinfoheader">Emails</h4>
          {email}
          <h4 className="moreinfoheader">Phones</h4>
          {phone}
        </div>
        <div className="right">
          <h4>Address</h4>
          {`${address.suite} ${address.street} ${address.city} ${address.zipcode}`}
          <h4>website</h4>
          {website}
          <h4>street</h4>
          {address.street}
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
