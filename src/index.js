import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

const Data = [
  {
    id: 1,
    company: "Photosnap",
    new: true,
    featured: true,
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
    new: true,
    featured: true,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python", "React"]
  },
  {
    id: 3,
    company: "Account",
    new: true,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript", "React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"]
  },
  {
    id: 5,
    company: "Loop Studiosp",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["Ruby", "Ruby", "Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["HTML", "JavaScript", "RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python", "Sass"]
  },
  {
    id: 8,
    company: "Insure",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["Vue", "Sass", "JavaScript"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["Django", "JavaScript", "Python"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    new: false,
    featured: false,
    logo: "../images/photosnap.svg", 
    position: "Senior Frontend Developer", 
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["React", "Sass", "JavaScript"]
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
