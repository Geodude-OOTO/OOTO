import React from 'react';
import header from '../../assets/header.png';

// const styles = {
//     headerContainer: {
//         backgroundImage: `url(${header})`,
//         backgroundSize: '100%'
//     }
// };
// className='header' style={styles.headerContainer}

//<img src={header}/>

const Benefits = () => {
    return (
        <div>
            <div className='header'>
             <img src={header}/>
                <h1>See where your entire team is at a glance!</h1>
                <h3>Take the guesswork out of knowing who is in the office,
                    taking vacation, or working remote. 
                </h3>
            </div>
            <div className='benefits-container'>
                <div className='tile'>
                    <h2>Smooth Updates</h2>
                    <h3>Alert your team when you'll be out of the office or working remotely. 
                    Manage expectations easily, even across different time zones.
                    </h3>
                </div>
                <div className='tile'>
                    <h2>Real-Time Team Visibility</h2>
                    <h3>Improved team coordination: Know when teammates are on leave, 
                    working from home, or in different time zones. 
                    Enhace coordination and avoid miscommunications effortlessly.
                    </h3>
                </div>
            </div>
        </div>
    )
};

export default Benefits