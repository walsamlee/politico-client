import { connect } from 'react-redux';
import aspirantRequest from '../../actions/aspirantRequestAction';
import Run from '../Aspirants/Run';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  runForOffice: (aspirantData, token) => {
    dispatch(aspirantRequest.runForOffice(aspirantData, token));
  },
});

const vote = connect(mapStateToProps, mapDispatchToProps)(Run);

export default vote;
