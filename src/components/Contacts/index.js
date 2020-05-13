import React from "react";
import PropTypes from 'prop-types';

import Contact from '../Contact';

class Contacts extends React.Component {
	render() {
    const { contacts } = this.props;

    return (
      <div className="container">
        <section className="contacts">
          <Contact />
          { contacts.map(contact => <Contact key={contact.id} contact={contact} />) }
        </section>
      </div>
    );
	}
}

Contacts.prototypes = {
  contacts: PropTypes.array,
};

export default Contacts;
