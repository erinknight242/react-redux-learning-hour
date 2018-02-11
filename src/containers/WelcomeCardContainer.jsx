import { connect } from 'react-redux';
import WelcomeCard from '../components/WelcomeCard';

const mapStateToProps = state => ({ ...state.welcomeCard });

// connect returns a function that is immediately invoked by passing it the component
export default connect(mapStateToProps)(WelcomeCard);
