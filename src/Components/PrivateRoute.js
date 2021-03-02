import { Redirect } from 'react-router-dom';
import { isTokenValid } from '../Actions/users.js';

const PrivateRoute = ({ component: Component, authenticatedUser, ...rest }) => {
  console.log(isTokenValid());
  let authUser = isTokenValid();
  if (authUser) {
    return <Component />;
  } else return <Redirect to='/' />;
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default PrivateRoute;
