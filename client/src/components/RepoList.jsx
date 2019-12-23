import React from 'react';
import RepoCard from './RepoCard.jsx';

const RepoList = (props) => (
  <div className="col-12">
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div className="row justify-content-around">
    {props.repos.map(one => (<RepoCard repo={one} key={one._id}/>))}
    </div>
  </div>
)

export default RepoList;