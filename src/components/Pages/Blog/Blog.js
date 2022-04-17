import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto  my-5'>
            <h1 className='text-center mb-5'>All Latest Blog</h1>
            <div className=" row row-cols-1 mx-md-5 px-md-5 g-4">
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Difference between authorization and authentication</h5>
                        <p className="card-text">Bacically authentication verify a user. Authentication check the user is known or unknown. It works with passwords, pins, biometric info provided by users. On the other hand Authorization define users capability. That means how many resources user can access. It works with settings of a system that are implemented by organization. </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
                        <p className="card-text">I use firebase for authentication system. They provide secured system to implement in any project and it also time saving. If i use my own made system like firebase authentication it will be less secure and also need so much time. In firebase authentication they provice email and password, phone and OTP, social login like googe, facebook, github, twitter, yahoo, microsoft, apple etc</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">What other services does firebase provide other than authentication?</h5>
                        <p className="card-text">They provide some services without authentication. Such as firebase database, realtime database, storage, hosting, functions and machine learning.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;