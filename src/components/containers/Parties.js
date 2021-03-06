import { connect } from 'react-redux';
import Parties from '../Parties/Parties';
import partyAction from '../../actions/partyAction';

const mapStateToProps = state => ({
  data: state,
});

const matchDispatchToProps = dispatch => ({
  fetchParties: () => {
    dispatch(partyAction.fetchParties());
  },
});

const PartiesContainer = connect(
  mapStateToProps,
  matchDispatchToProps,
)(Parties);

export default PartiesContainer;
