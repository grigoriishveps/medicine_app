
import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
// import {whoami, getInitialInfo} from "../actions/app";
// import defectsReducer from "../reducers/defectsReducer";

const reducer = combineReducers({
    // form: reduxFormReducer, // mounted under "form",
    // app: appReducer,
    // users: usersReducer,
    // vehicles: vehiclesReducer,
    // driverSurvey: driverReducer,
    // depots: depotsReducer,
    // company: companyReducer,
    // tasks: tasksReducer,
    // infringements: infringementsReducer,
    // defects: defectsReducer,
});

// const composeEnhancers =
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk];
const store = createStore(reducer, compose(
    applyMiddleware(...middleware),
));

//store.dispatch(whoami())
//store.dispatch(getInitialInfo())

export default store;
