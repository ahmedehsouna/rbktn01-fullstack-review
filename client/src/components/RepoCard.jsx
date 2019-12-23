import React from 'react';

const RepoCard = (props) => (
  <div className="card col-3 m-2" style={{color : "black"}}>
  <div className="card-body">
<h5 className="card-title">{props.repo.name}</h5>
<h6 className="card-subtitle mb-2 text-muted">{props.repo.owner}</h6>
    <p className="card-text">{props.repo.description}</p>
    <a href={props.repo.html_url} target="_blank" className="card-link">GitHub link</a>
    <a href={props.repo.html_url + "/network/members"} target="_blank" className="card-link">forks : {props.repo.forks}</a>
  </div>
</div>
  // <div>
  //   <a href={props.repo.url}></a>
  // </div>
)

export default RepoCard;