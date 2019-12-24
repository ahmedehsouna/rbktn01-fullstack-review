import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

function post(word, callback){
  $.ajax("https://aqueous-cliffs-53654.herokuapp.com/repos", {
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
  $.ajax(`https://aqueous-cliffs-53654.herokuapp.com/repos?page=` + page, {
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
    get(this.page, (err,data) => {
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
  changePage(bool){
    this.setState({
      page: bool?page+1 : page-1
    })
    get(this.page, (err,data) => {
      if(err) console.log(err)
      else {
        this.setState({
          repos : data
        })
      }
    })
  }
  render () {
    return (<div className="  container " style={{background : "black", color : "white"}}>
      <div className="row justify-content-center">
      <h1 className="col-4">Github Fetcher</h1>
      <div className="col-12">
        <button onClick={changePage.bind(this,true)}>next</button>
        <button onClick={changePage.bind(this,false)}>next</button>
      </div>
      <Search  onSearch={this.search.bind(this)}/>
      <RepoList  repos={this.state.repos}/>

      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));