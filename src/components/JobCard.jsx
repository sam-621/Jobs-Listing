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
                    <p>{enterprice}</p>
                    <p>{jobName}</p>
                    <p>{moreInfo}</p>
                </div>
            </div>
            <div className="Tags">
                {technology.map((string) => {
                    return <Tag technology={string} />
                })

                }
            </div>
        </article>
    );
}

export default JobCard;