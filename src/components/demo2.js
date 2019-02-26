import React from 'react';
import PropTypes from 'prop-types';

//title='my title' is a prop
function Demo() {
  return (
    <>
      <Header title="My Title" />
      {SubHeader && <SubHeader subHeader="My subHeader"/>}
      <Dogs />
    </>
  );
}
//wrapped in{} if only there is a SubHeader. remember isRequired part in propTypes
//prop type = title 
function Header({ title }) {
  return (
    <h1>{title}</h1>
  );
}

function SubHeader({ subHeader }){
  return (
    <h4>{subHeader}</h4>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

SubHeader.propTypes = {
  subHeader: PropTypes.string
};

function Dogs({ dogs }) {
  const dogsList = dogs.map(dogName => {
    return <li key={dogName}>{dogName}</li>;
  });

  return (
    <ul>
      {dogsList}
    </ul>
  );
}
Dogs.propTypes = {
  dogs: PropTypes.array
};

export default Demo;
