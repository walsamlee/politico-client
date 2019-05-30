import { connect } from 'react-redux';
import CreateParty from '../Parties/CreateParty';
import partyAction from '../../actions/partyAction';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  createParty: (partyData, token) => {
    dispatch(partyAction.createParty(partyData, token));
  },
});

const createNewParty = connect(mapStateToProps, mapDispatchToProps)(CreateParty);

export default createNewParty;
