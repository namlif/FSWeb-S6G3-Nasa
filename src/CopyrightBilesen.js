import React from "react";
import "./CopyrightBilesen.css";


function CopyrightBilesen(props) {
  return (
    <div className="copyright">
      <p><strong>Copyright:</strong> {props.copyright}</p>
    </div>
  );
}
export default CopyrightBilesen;