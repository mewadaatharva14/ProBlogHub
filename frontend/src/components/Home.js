import React from 'react';
import { Link } from 'react-router-dom';


const home = () => (
    <div className='container'>
       
            <div className="jumbotron mt-5">
                <h1 className="display-4" style={{fontFamily:'cursive'}}>Welcome to Blogging hub!</h1> 
                <p className="lead">You will get various blog related to all current topics</p>
                <hr className="my-4" />
                <p>Click the button below to check out our awesome blog.</p>
                <Link className="btn btn-danger btn-lg" to='/blog' role="button">Check out our Blog</Link>
            </div>
       
    </div>
);

export default home;
