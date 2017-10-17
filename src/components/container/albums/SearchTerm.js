import React,{ Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadSearchTerm, removeSearchTerm } from '../../../store/albumActions';

class SearchTerm extends Component {

  componentDidMount() {
    store.dispatch( loadSearchTerm() );
  }

  render() {
    let searchTerm = this.props.searchterm ? this.props.searchterm : null;
    return (
      <div className="">
        {searchTerm.length > 0 &&
          <div className="chip search-chip">
            {searchTerm}
            <i className="close material-icons" onClick={this.props.removeSearchTerm}>close</i>
          </div>
        }
      </div>
    );
  }
};


const mapStateToProps = state => ({
  searchterm: state.searchterm
});

const mapDispatchToProps = dispatch => {
  return {
    removeSearchTerm: (album) => dispatch( removeSearchTerm() )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTerm);
