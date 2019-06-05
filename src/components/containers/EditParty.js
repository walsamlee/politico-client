import { connect } from 'react-redux';
import EditParty from '../Parties/EditParty';
import partyAction from '../../actions/partyAction';

const mapStateToProps = state => ({
  data: state,
});

const matchDispatchToProps = dispatch => ({
  editParty: (partyName, partyId, token) => {
    dispatch(partyAction.editParty(partyName, partyId, token));
  },
});

const EditPartyContainer = connect(
  mapStateToProps,
  matchDispatchToProps,
)(EditParty);

export default EditPartyContainer;
