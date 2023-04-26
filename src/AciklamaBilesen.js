import React from "react";
import "./AciklamaBilesen.css"

function TarihBilesen(props) {
  return (
    <div className="aciklama">
      <p><strong>Açıklama:</strong> {props.aciklama}</p>
    </div>
  );
}
export default TarihBilesen;