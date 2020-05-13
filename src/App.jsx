import React from 'react';
import { getContacts } from './services/api';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      contacts: [],
    };
  }

  async handleGetContacts() {
    this.setState({ loading: true });

    const contacts = await getContacts();
    console.log(contacts);

    this.setState({ contacts, loading: false });
  }

  componentDidMount() {
    this.handleGetContacts();
  }

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts contacts={contacts} />
      </React.Fragment>
    )
  }
}

export default App;
