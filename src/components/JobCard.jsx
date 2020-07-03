import React from 'react';
import '../styles/jobCard.css';

import Tag from '../components/Tag';

const JobCard = (props) => {
    const { img, enterprice, jobName, moreInfo, technology} = props;
    return(
        <article>
            <div className="Info">
                <div className="img">
                    <img src={img} alt="an imge"/>
                </div>
                <div className="Text">
                    <p key="1">{enterprice}</p>
                    <p key="2">{jobName}</p>
                    <p key="5">{moreInfo}</p>
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