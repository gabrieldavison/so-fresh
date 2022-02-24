import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header-K">
        <h2 className="text-K" id="soFresh-K">
          SO FRESH
        </h2>
        <div className="headerButtons-K">
          <Link className="text-K" id="AllSubscriptions-K" to="/">
            All Subscriptions
          </Link>
          <Link className="text-K" id="Account-K" to="/account">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
