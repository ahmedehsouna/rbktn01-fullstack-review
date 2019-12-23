import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });

  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div className="col-12 row justify-content-center">
      <h5 className="col-5 m-0 my-auto" >Add more repos! Enter a github username:</h5>
       <input className="col-3" value={this.state.terms} onChange={this.onChange.bind(this)}/>
      <button className="col-1" onClick={this.search.bind(this)}> Add Repos </button>
    </div>)
  }
}

export default Search;