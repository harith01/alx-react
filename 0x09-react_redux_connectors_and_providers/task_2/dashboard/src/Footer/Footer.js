import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from "react-redux";

function Footer({ user }) {
  
  return (
    <div className="footer">
      {user.isLoggedIn && 
        <p><a href="#">Contact us</a></p>
      }
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export const mapStateToProps = (state) => ({
  user: state.get('user')
})

export default connect(mapStateToProps)(Footer);
