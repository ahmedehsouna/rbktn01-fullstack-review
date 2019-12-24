import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

var prod = "https://aqueous-cliffs-53654.herokuapp.com"

function post(word, callback){
  $.ajax( "/repos", {
    type : "POST",
    data : {username : word},
    success: (result) =>{
      callback(null, result)
      // console.log(result)
      // this.setState({
      //   repos : result
      // })
  },
  error: function (jqXhr, textStatus, errorMessage) {
    callback(errorMessage, null)
}

});
}
function get(page, callback){
  $.ajax(`/repos?page=` + page, {
    type : "GET",
    success: (result) =>{
      callback(null, result)
      // console.log(result)

  },
  error: function (jqXhr, textStatus, errorMessage) {
    callback(errorMessage, null)
}

});
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      page: 0
    }

  }

  componentDidMount(){
    get(this.state.page, (err,data) => {
      if(err) console.log(err)
      else {
        this.setState({
          repos : data
        })
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    post(term, (err, result) => {
      if(err) console.log(err)
      // else get((err,data) => {
        // if(err) console.log(err)
      else{
      this.setState({
        repos : result
      })
        }
      // })
    })

  }
  changePage(number){
    get(this.state.page + number, (err,data) => {
      if(err) console.log(err)
      else {
        this.setState({
          repos : data,
          page: this.state.page + number
        })
      }
    })

  }
  render () {
    return (<div className="  container " style={{background : "linear-gradient(to right, #0f0c29, #302b63, #24243e)", color : "white"}}>
      <div className="row justify-content-center">
      <h1 className="col-4">Github Fetcher</h1>
      <div className="col-12">
        <h3 className="mx-2">page : {this.state.page}</h3>
        <button disabled={this.state.repos.length < 25} className="mx-2 btn-sm" onClick={this.changePage.bind(this,1)}>next</button>
        <button disabled={this.state.page == 0} className="mx-2 btn-sm" onClick={this.changePage.bind(this,-1)}>previous</button>
      </div>
      <Search  onSearch={this.search.bind(this)}/>
      <RepoList  repos={this.state.repos}/>

      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));