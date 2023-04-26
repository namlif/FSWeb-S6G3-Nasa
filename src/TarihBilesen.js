import React from "react";
import "./TarihBilesen.css";


function TarihBilesen(props) {
  return (
    <div className="tarih">
      <p><strong>Tarih:</strong> {props.tarih}</p>
    </div>
  );
}
export default TarihBilesen;