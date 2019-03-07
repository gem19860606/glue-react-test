import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpin from 'react-loading-spin';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/usersActions';

import UserCard from '../UserCard';
import { isError } from 'util';

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
        items: userList,
        isError
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
          <div>
            <div className="mt-4 d-flex justify-content-center row">
              <h2>
                User Page
              </h2>
            </div>
            <div className="row">
              {
                !isError &&
                userList.map(item => {
                  return (
                    <div className="col-12 col-lg-4 mt-4" key={item.id}>
                      <UserCard data={item} />
                    </div>
                  );
                })
              }
              {
                isError && 
                <h3>
                  There is some error when fetching users
                </h3>
              }
            </div>
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
