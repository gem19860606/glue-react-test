import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/usersActions';

export class UsersPage extends React.Component {
  saveUsersPage = () => {
    this.props.actions.saveUsersPage(this.props.UsersPage);
  }

  calculateUsersPage = e => {
    this.props.actions.calculateUsersPage(this.props.UsersPage, e.target.name, e.target.value);
  }

  render() {
    return (
      <div className="m-4">
        <h2>
          User Page
        </h2>
      </div>
    );
  }
}

UsersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  UsersPage: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    UsersPage: state.UsersPage
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
