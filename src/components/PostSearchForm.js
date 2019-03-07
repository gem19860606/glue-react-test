
import React from 'react';
class PostSearchForm extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
      </form>
    );
  }
}

export default PostSearchForm;
