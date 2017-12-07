import React, { Component } from 'react';
import CommandList from './components/commandsList.js';
import Search from './components/Search.js';
import Shortlist from './components/shortList.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      favourites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  addFavourite(id) {
    const favList = this.state.favourites.concat([id]);
    this.setState({
      favourites: favList
    })
  }

  render() {
    return (
      <div className="body">
        <header>
          <h1>Mocha-Jest helper</h1>
          <Search
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </header>
        <main>
          <Shortlist
            favourites={this.state.favourites}
            data={this.props.data}
          />
          <CommandList
            data={this.props.data}
            filterText={this.state.filterText}
            addFavourite={this.addFavourite.bind(this)}
          />
        </main>
        <footer>
          <p>You can find more suggestions <a href="https://github.com/sapegin/jest-cheat-sheet" target="_blank">here</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
