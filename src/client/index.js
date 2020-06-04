import { application } from './js/application.js'
import {StartCountdownTimer} from './js/countdownTimer.js'
// Styles used
import './styles/style.scss'

// Event listeners used to populate dropdown and get API data
document.getElementById('submit-country-button').addEventListener('click', () => {
  application(event);
});

document.getElementById('submit-area-button').addEventListener('click', () => {
  application(event);
});

export { application}
