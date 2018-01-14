import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import Events from './events.js' // default
// import { Events } from './events.js'
ReactDOM.render(<Events happening={events} />, document.getElementById('root'));
