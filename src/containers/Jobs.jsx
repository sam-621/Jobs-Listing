import React from 'react';
import '../styles/app.css'

import JobCard from '../components/JobCard';
import account from '../images/account.svg';

const Jobs = () => {
    return(
        <>
            <JobCard 
                img={account}
                enterprice="Account"
                jobName="Backend developer"
                moreInfo="1d ago * Full time * USA only"
                technology={["JS", "HTML"]}
            />
            <JobCard 
                img={account}
                enterprice="Account"
                jobName="Backend developer"
                moreInfo="1d ago * Full time * USA only"
                technology={["HTML"]}
            />
        </>
    );
}

export default Jobs;