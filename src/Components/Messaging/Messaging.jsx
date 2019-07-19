import React from "react";
import "./Messaging.css";
import Contact from "./Contact/Contact";
import Convesation from "./conversation";

export default function Messaging() {
  return (
    <div>
      <div className="col-md-4 col-xl-3 chat">
        <div className="card mb-sm-3 mb-md-0 contacts_card">
          <Contact />
        </div>
      </div>
      <Convesation />
    </div>
  );
}
