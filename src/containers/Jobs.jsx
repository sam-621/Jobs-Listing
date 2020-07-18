import React from 'react';

import JobCard from '../components/JobCard';
import photosnap from '../images/photosnap.svg';
import manage from '../images/manage.svg'
import account from '../images/account.svg';
import myHome from '../images/myhome.svg';
import loopStudio from '../images/loop-studios.svg';
import faceit from '../images/faceit.svg';
import shortly from '../images/shortly.svg';
import insure from '../images/insure.svg';
import eyeCamp from '../images/eyecam-co.svg';
import filterEye from '../images/the-air-filter-company.svg'

class Jobs extends React.Component {
    render() {
        const Logos = [
            photosnap,
            manage,
            account,
            myHome,
            loopStudio,
            faceit,
            shortly,
            insure,
            eyeCamp,
            filterEye
        ]

        let jobsFounded = [];
        this.props.data.forEach((job, index) => {

            if(job.company.indexOf(this.props.value) === -1) {
                return
            }
            jobsFounded.push(
                <JobCard 
                    key={job.id}
                    img={Logos[job.id-1]}
                    enterprice={job.company}
                    neww= {job.new}
                    featured= {job.featured}
                    jobName={job.position}
                    postedAt={job.postedAt}
                    contract={job.contract}
                    location={job.location}
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