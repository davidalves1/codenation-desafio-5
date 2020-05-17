import React from 'react';

import './styles.css';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleChangeSearch(e) {
    this.setState({ search: e.target.value });
    this.props.updateSearch(e.target.value);
  }

  handleSearch() {
    const { search } = this.state;
    this.props.updateSearch(search);
  }

  handleOrder(key) {
    this.props.updateOrder(key);
  }

	render() {
		return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={this.handleChangeSearch} />

            <button className="filters__search__icon" onClick={this.handleSearch}>
              <i className="fa fa-search" />
            </button>
          </div>

          <button className="filters__item is-selected" onClick={() => this.handleOrder('name')}>
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={() => this.handleOrder('country')}>
            País <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={() => this.handleOrder('company')}>
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={() => this.handleOrder('department')}>
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" onClick={() => this.handleOrder('admissionDate')}>
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
	}
}

export default Filters;
