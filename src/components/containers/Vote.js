import { connect } from 'react-redux';
import voteAction from '../../actions/voteAction';
import Vote from '../Vote/Vote';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  castVote: (voteDate, token) => {
    dispatch(voteAction.castVote(voteDate, token));
  },
});

const vote = connect(mapStateToProps, mapDispatchToProps)(Vote);

export default vote;
