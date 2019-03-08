import React from 'react';
import PropTypes from 'prop-types';

function CreateList(Component, contents) {
  const contentsList = contents.map(content => 
    <li key={content.id}>
      <Component {...content} />
    </li>
  );

  return (
    <ul>
      {contentsList}
    </ul>
  );
}

CreateList.propTypes = {
  contents: PropTypes.array.isRequired
};

export default CreateList;
