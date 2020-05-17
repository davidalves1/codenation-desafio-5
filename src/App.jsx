import React from 'react';
import { getContacts } from './services/api';
import { orderBy } from './utils/list';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      search: '',
      contacts: [],
    };

    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleOrderContacts = this.handleOrderContacts.bind(this);
  }

  async handleGetContacts() {
    this.setState({ loading: true });
    const contacts = await getContacts();
    this.setState({ contacts, loading: false });
  }

  handleUpdateSearch(search) {
    this.setState({ search });
  }

  handleOrderContacts(key) {
    const { contacts } = this.state;
    const ordenedContacts = orderBy(contacts, key);

    this.setState({ contacts: ordenedContacts });
  }

  componentDidMount() {
    this.handleGetContacts();
  }

  render() {
    const { contacts, search } = this.state;

    const filteredContacts = search
      ? contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
      : contacts;

    return (
      <React.Fragment>
        <Topbar />
        <Filters updateSearch={this.handleUpdateSearch} updateOrder={this.handleOrderContacts} />
        <Contacts contacts={filteredContacts} filter={search} />
      </React.Fragment>
    )
  }
}

export default App;
