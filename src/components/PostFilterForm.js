
import React from 'react';
import PropTypes from 'prop-types';

class PostFilterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }

  filterTextChange(event) {
    this.setState({
      filterText: event.target.value
    });
  }

  render() {
    const {
      filterPost
    } = this.props;
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input className="form-control" id="post-filter" onChange={this.filterTextChange.bind(this)} placeholder="Filter Post ..." />
        </div>
        <button
          className="btn btn-primary mb-2"
          onClick={(e) => { e.preventDefault(); filterPost(this.state.filterText); }
        }>
          Filter Post
        </button>
      </form>
    );
  }
}

PostFilterForm.propTypes = {
  filterPost: PropTypes.func.isRequired
}

export default PostFilterForm;
