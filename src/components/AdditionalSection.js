import { useContext } from "react";
const rowStyle = {
  display: "flex",
  justifyContent: "space-evenly",
};
const AdditionalSection = () => {
  return (
    <>
      <div style={rowStyle} className="row">
        <p>Sunrise</p>
        <p>Sunset</p>
      </div>
      <div style={rowStyle} className="row">
        <p>Humidity</p>
        <p>Wind</p>
      </div>
    </>
  );
};
export default AdditionalSection;
