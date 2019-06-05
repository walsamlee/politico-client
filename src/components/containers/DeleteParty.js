import { connect } from 'react-redux';
import DeleteParty from '../Parties/DeleteParty';
import partyAction from '../../actions/partyAction';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  deleteParty: (partyId, token) => {
    dispatch(partyAction.deleteParty(partyId, token));
  },
});

const DeleteAParty = connect(mapStateToProps, mapDispatchToProps)(DeleteParty);

export default DeleteAParty;
