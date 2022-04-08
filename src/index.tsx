// i18n
import "./locales/i18n";

// highlight
import "./utils/highlight";

// scroll bar
import "simplebar/src/simplebar.css";

// map
import "mapbox-gl/dist/mapbox-gl.css";

// lightbox
import "react-image-lightbox/style.css";

// lazy image
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";
import "lazysizes/plugins/object-fit/ls.object-fit";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Check our docs
// https://minimal-docs.vercel.app/authentication/ts-version

// import { AuthProvider } from "./contexts/JWTContext";
// import { AuthProvider } from './contexts/AwsCognitoContext';
// import { AuthProvider } from './contexts/Auth0Context';
// import { AuthProvider } from './contexts/FirebaseContext';

//
import Providers from "Providers";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ----------------------------------------------------------------------

ReactDOM.render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
