import React from 'react';
import '../styles/jobCard.css';

import Tag from '../components/Tag';

const JobCard = (props) => {
    const { neww, featured, img, enterprice, jobName, postedAt, contract, location, technology} = props;
    return(
        <article>
            <div className="Info">
                <div className="img">
                    <img src={img} alt="an imge"/>
                </div>
                <div className="Text">
                    <p>{enterprice} {neww ? <strong className="new">NEW</strong> : ''} {featured ? <strong className="Featured">FEATURED</strong> : ''}</p>
                    <p>{jobName}</p>
                    <p>{postedAt} * {contract} * {location}</p>
                </div>
            </div>
            <div className="Tags">
                {technology.map((string, index) => {
                    return <Tag key={index} technology={string} />
                })
                }
            </div>
        </article>
    );
}

export default JobCard;