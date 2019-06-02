import { connect } from 'react-redux';
import getOfficesAction from '../../actions/getOfficesAction';
import GetOffices from '../Office/GetOffices';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  getOffices: () => {
    dispatch(getOfficesAction.getOffices());
  },
});

const GetOfficesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetOffices);

export default GetOfficesContainer;
