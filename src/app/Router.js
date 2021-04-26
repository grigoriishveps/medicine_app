import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// import MainWrapper from './MainWrapper';
import {connect} from "react-redux";
// import constants from 'Constants'

import NotFound from '../components/NotFound';
import HomePage from "../components/HomePage";


// const isRootRoute = (path) => {
//   return path.includes('companies')
// };
//
// const isDepotRoute = (path) => {
//   return path.includes('depot')
// };
//
// const isManagerRoute = (path) => {
//     let managerRoutes = ['checklist','profile','users','vehicles','deleted-user-list','deleted-vehicle-list', 'done-defects', 'active-defects','unsigned-infringements','signed-infringements'];
//     return managerRoutes.findIndex((item)=>{return path.includes(item)}) >=0;
// };
//
// const isDriverRoute = (path) => {
//   return path.includes('driver')
// };
//
// const isStaffRoute = (path) => {
//   return path.includes('tasks')
// }

// const isAdministratorRoute = (path) => {
//     let administratorRoutes = ['/companies','/surveys-system','/surveys-add','/surveys-clone','profile'];
//     return (administratorRoutes.findIndex((item)=>{return path.includes(item)}) >=0 || path.match(/surveys\/\d+/)!==null);
// }
//
// const PrivateRoute = ({data, component: Component, ...rest}) => (
//   <Route {...rest}
//
//          render={props => {
//              const {isDeletedList} = rest;
//            if (!data.user) {
//              return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>;
//            }
//            const path = props.location.pathname;
//            const role = data.user.role;
//            if (isRootRoute(path) && role !== constants.userTypes.ADMINISTRATOR) {
//              return <Redirect to={{pathname: "/not-found", state: {from: props.location}}}/>;
//            }
//            if (isDepotRoute(path) && role !== constants.userTypes.ADMINISTRATOR && role !== constants.userTypes.EMPLOYEES_ADMIN && role !== constants.userTypes.COMPANY_OWNER) {
//              return <Redirect to={{pathname: "/not-found", state: {from: props.location}}}/>;
//            }
//            if (!isAdministratorRoute(path) && role===constants.userTypes.ADMINISTRATOR)
//                  return <Redirect to={{pathname: "/companies", state: {from: props.location}}}/>;
//            return <Component {...props} key={props.location.pathname} isDeletedList={isDeletedList}/>;
//
//          }}
//   />
// );
//
// const NotLoggedRoute = ({data, component: Component, ...rest}) => (
//   <Route {...rest}
//          render={props => {
//            if (data.user) {
//              return <Redirect to={{pathname: "/", state: {from: props.location}}}/>;
//            }
//            return <Component {...props} key={props.location.pathname}/>;
//          }}
//   />
// );

const MainRouter = (props) => {
  // const {user} = props;
  // const data = {
  //   user: user
  // };
  return (
    <>
      <Switch>
        {/*<NotLoggedRoute data={data} path='/reset-password/:token' component={ResetPassword}/>*/}
        {/*<NotLoggedRoute data={data} exact path='/login' component={SignIn}/>*/}
        {/*<PrivateRoute data={data} exact path='/deleted-user-list' component={UserList} isDeletedList />*/}

        {/*<PrivateRoute data={data} exact path='/unsigned-infringements' component={InfringementsList}/>*/}
        {/*  <PrivateRoute data={data} exact path='/signed-infringements'component={InfringementsList} isDeletedList />*/}
        <Route exact path='/' component={HomePage}/>
        <Route component={NotFound}/>
      </Switch>
    </>)
};

// function mapStateToProps(state) {
//   return {
//     user: state.app.user,
//     appReady: state.app.appReady
//   };
// }

// export default connect(mapStateToProps, null, null, {pure: false})(MainRouter);
export default (MainRouter);
