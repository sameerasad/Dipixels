import React from "react";
import { Wave, } from "react-animated-text";

const exampleStyle = {
  display: 'flex',
  textTransform: 'uppercase',
  fontSize: '70px',
  color: '#00f3f4',
  fontFamily: 'Monument Extended Regular',
  alignItems: 'center',
  justifyContent: 'center',
};


const Waves = () => (
 <div style={exampleStyle}>
   <Wave text="start a project" effect="fadeOut" effectChange={1.0} />
 </div>
);

export default Waves