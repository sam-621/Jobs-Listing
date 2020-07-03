import React from 'react';
import '../styles/app.css'

import JobCard from '../components/JobCard';
import photo from '../images/photosnap.svg'
// const Logos = [
//     "../images/manage.svg",
//     "../images/account.svg",
// ]
// var count = 0;

class Jobs extends React.Component {
    render() {
        let jobsFounded = [];
        this.props.data.forEach((job, index) => {
            console.log(job.id.toString())

            if(job.company.indexOf(this.props.value) === -1) {
                return
            }
            jobsFounded.push(
                <JobCard 
                    key={index}
                    img={photo}
                    enterprice={job.company}
                    jobName={job.position}
                    moreInfo={job.postedAt}
                    technology={job.languages}
                />
            );
        })
        return(
            <>
                {jobsFounded}
            </>
        );
    }
}

export default Jobs;