import React, {PureComponent} from "react";
import  {connect} from "react-redux";
import '../scss/app.scss'

class HomePage extends PureComponent {
    render() {
        return (
            <div className='not-found'>
                <div className='not-found__content'>
                    <h3 className='not-found__info asas'>Welcome Back!</h3>
                </div>
            </div>
        )
    }
}

// export default connect(null, null)(HomePage)
export default (HomePage)


