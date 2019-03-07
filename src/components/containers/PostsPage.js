import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/postsActions';

export class PostsPage extends React.Component {
  savePostsPage = () => {
    this.props.actions.savePostsPage(this.props.PostsPage);
  }

  calculatePostsPage = e => {
    this.props.actions.calculatePostsPage(this.props.PostsPage, e.target.name, e.target.value);
  }

  render() {
    return (
      <div className="m-4">
        <h2>
          Posts Page
        </h2>
      </div>
    );
  }
}

PostsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  PostsPage: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    PostsPage: state.PostsPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
