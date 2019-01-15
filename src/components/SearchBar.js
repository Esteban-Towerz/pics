import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment" >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="wrap field fluid ui massive action input">
            <label className="label" htmlFor="search">

            </label>
            <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} id="search" name="search" type="text" placeholder="Search..." />
            <button className="ui button massive">Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;