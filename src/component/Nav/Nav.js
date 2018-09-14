import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Connect } from 'react-redux'




function Nav(props) {
    console.log(props.location)
    


    return (
        <section>
            <div>
                <p>
                    Nav
                </p>
                <Link to={'/Dashboard'}>
                    <button>Home</button>
                </Link>
                <Link to={'/newpost'}>
                    <button>New Post</button>
                </Link>
                <Link to={'/'}>
                    <button>Logout</button>
                </Link>
            </div>

        </section>
    )
}

export default withRouter(Nav)