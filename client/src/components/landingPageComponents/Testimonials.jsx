import React from 'react';
import avatar from '../../assets/avatar.png';
import avatar1 from '../../assets/avatar-1.png';
import avatar2 from '../../assets/avatar-2.png';



const Testimonials = () => {
    return (
        <div className='testimonial-container-container'>
            <h2>Here is what our customers say about OOTO</h2>
            <div className='testimonial-container'>
            <div className="tile">
                <p>With a hybrid work schedule, it can be hard to see who is working, 
                    but now with OOTO I know that my team is hard at work wherever they are.
                </p>
                <img src={avatar} />
                <h3>Michael</h3>
                <h4>Regional Manager</h4>
            </div>
            <div className="tile">
                <p>My manager always forgets when I am traveling in a different timezone for work. 
                    Now with OOTO I do not get calls in the middle of the night!
                </p>
                <img src={avatar1} />
                <h3>Jim</h3>
                <h4>International Paper Salesman</h4>
            </div>
            <div className="tile">
                <p>I broke my leg which meant I had to be on short-term disability. 
                    With OOTO my team can tell the difference between when I am on sick leave not working, 
                    vs. when I am working from home.
                </p>
                <img src={avatar2} />
                <h3>Dwight</h3>
                <h4>Assistant to the Regional Manager</h4>
            </div>
            </div>
        </div>
    )
};

export default Testimonials