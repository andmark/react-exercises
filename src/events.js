import React from 'react';
import PropTypes from 'prop-types';

class Events extends React.Component {
    static propTypes = {
        happening: PropTypes.array.isRequired
    };
    render() {
        return (
            <ul>
                {this.props.happening.map(item => {
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
    }
};

export default Events;
// export { Events };