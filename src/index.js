import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const getEvents = () => {
return (
  <ul>
  {events.map(item => {
    const date = new Date(item.date);

    if (date >= Date.now()) {
      return (
        <li key={item.id}>
          <strong>{item.name}</strong><br />
          Gdzie: {item.place}<br />
          Dnia: {item.date}, Godzina: {item.time}
        </li>
      );
    }

    return null;
  })}
</ul>
)
}

ReactDOM.render(getEvents(), document.getElementById('root'));
