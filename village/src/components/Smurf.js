import React from 'react';


const Smurf = props => {
  return (
    <div className="Smurf">
      {/* <img src='../../public/assets/smurf1.jpg' alt='' /> */}
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={e => props.setUpdateSmurf(e, props)}>Update</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

