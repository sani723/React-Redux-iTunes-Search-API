import React,{ Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadMessage } from '../../../store/messageActions';

class Messages extends Component {

  componentDidMount() {
    store.dispatch( loadMessage() );
  }

  render() {

    let displayMessage = this.props.message ? this.props.message : null;

    return (
      <div className="application-message">
        {displayMessage.length > 0 &&
          <p className="application-message__content">{displayMessage}</p>
        }
      </div>
    );
  }
};


const mapStateToProps = state => ({
    message: state.message
  });

export default connect(mapStateToProps)(Messages);
