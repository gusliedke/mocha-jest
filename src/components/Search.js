import React, { Component } from 'react';

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val);
  }
  render() {
    return (
      <form>
        <input type="text" ref={ (value) => {this.myValue = value}} placeholder="Type to filter" onChange={this.filterUpdate.bind(this)} />
      </form>
    )
  }
}

export default Search;