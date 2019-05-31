import { connect } from 'react-redux';
import Candidates from '../Candidates/Candidates';
import fetchCandidates from '../../actions/candidateAction';

const mapStateToProps = state => ({
  data: state,
});

const matchDispatchToProps = dispatch => ({
  fetchCandidates: (token) => {
    dispatch(fetchCandidates(token));
  },
});

const CandidatesContainer = connect(
  mapStateToProps,
  matchDispatchToProps,
)(Candidates);

export default CandidatesContainer;
