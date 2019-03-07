import React from 'react';
import PropTypes from 'prop-types';

const PostCard = (props) => { 
  const {
    data: {
      title,
      body
    },
  } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostCard;
