import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

const Data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    company: "Manage",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["Python"]
  },
  {
    id: 3,
    company: "Account",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["CSS", "JavaScript"]
  },
  {
    id: 5,
    company: "Loop Studiosp",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["Ruby"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "JavaScript"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript", "Python"]
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App data={Data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
