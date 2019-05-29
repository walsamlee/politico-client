import { connect } from 'react-redux';
import CreateOffice from '../Office/CreateOffice';
import officeAction from '../../actions/officeAction';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  createOffice: (officeData, token) => {
    dispatch(officeAction.createOffice(officeData, token));
  },
});

const createNewOffice = connect(mapStateToProps, mapDispatchToProps)(CreateOffice);

export default createNewOffice;
