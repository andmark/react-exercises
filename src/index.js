import ReactDOM from 'react-dom';

import events from './data/events.json';
// import getEvents from './events.js' // default
import { getEvents } from './events.js'
ReactDOM.render(getEvents(events), document.getElementById('root'));
