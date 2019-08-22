import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'> 
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                <h1 className='title'>Adults</h1>
                <span className='title'>Register Now</span>
                </div>
            </div>
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>Kids</h1>
            <span className='title'>Register Now</span>
        </div>
    </div>
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>Families</h1>
            <span className='title'>Register Now</span>
        </div>
    </div>
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>Private Lesson</h1>
            <span className='title'>Register Now</span>
        </div>
    </div>
</div>
</div>
)

export default HomePage;