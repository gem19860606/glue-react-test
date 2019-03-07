import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpin from 'react-loading-spin';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/postsActions';

import PostCard from '../PostCard';
import PostFilterForm from '../PostFilterForm';

export class PostsPage extends React.Component {
  fetchPosts = () => {
    this.props.actions.fetchPosts();
  }

  filterPost = (filterText) => {
    console.log(filterText);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const {
      posts: {
        isLoading,
        items: postList,
        isError,
      }
    } = this.props;
    return (
      <div className="container">
        {isLoading && 
          <div className="mt-4 d-flex justify-content-center">
            <LoadingSpin className="m-4" />
          </div>
        }
        {!isLoading && 
          <div>
            <div className="mt-4 d-flex justify-content-center row">
              <h2>
                Post Page
              </h2>
            </div>
            <div className="mt-4 d-flex justify-content-center row">
              <PostFilterForm  filterPost={this.filterPost}/>
            </div>
            <div className="row">
              {
                !isError &&
                postList.map(item => {
                  return (
                    <div className="col-12 col-lg-4 mt-4" key={item.id}>
                      <PostCard data={item} />
                    </div>
                  );
                })
              }
              {
                isError && 
                <h3>
                  There is some error when fetching posts
                </h3>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

PostsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.postsReducer
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
