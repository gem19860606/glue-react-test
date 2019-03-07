import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpin from 'react-loading-spin';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/usersActions';

export class UsersPage extends React.Component {
  fetchUsers() {
    this.props.actions.fetchUsers();
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const {
      users: {
        isLoading,
        items: userList
      }
    } = this.props;
    console.log(userList);
    return (
      <div className="container">
        {isLoading && 
          <div className="mt-4 d-flex justify-content-center">
            <LoadingSpin className="m-4" />
          </div>
        }
        {!isLoading &&
          <div className="mt-4 d-flex justify-content-center row">
            <h2>
              User Page
            </h2>
          </div>
        }
      </div>
    );
  }
}

UsersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.usersReducer
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
)(UsersPage);
