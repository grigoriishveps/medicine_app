import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./app/ScrollToTop";
import {Provider} from "react-redux";
import App from "./app/App";
import React from "react";
// import store from "./app/store";
import {render} from "react-dom";
// render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <ScrollToTop>
//                 <App/>
//             </ScrollToTop>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );

// render(
//         <BrowserRouter>
//             <ScrollToTop>
//                 <App/>
//             </ScrollToTop>
//         </BrowserRouter>,
//     document.getElementById('root')
// );
render(
    <App/>,
    document.getElementById('app')
);
