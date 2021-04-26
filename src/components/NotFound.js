import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'

export default class NotFound extends PureComponent {
    render() {
        return (
            <div className='not-found'>
                <div className='not-found__content'>
                    <h3 className='not-found__info'>Not found</h3>
                    <Link className='btn btn-primary' to='/'>Back Home</Link>
                </div>
            </div>
        )
    }
}
