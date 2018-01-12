import React from 'react';

const getEvents = (events) => {
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
      );
};

// export default getEvents;
export { getEvents };