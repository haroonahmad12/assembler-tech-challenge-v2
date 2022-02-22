import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as ROUTES from "./Routes";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import ResetPassword from "./pages/ResetPassword";
import Login from "./components/Pages/Login";

import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut } from "./redux/auth-reducer/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn());
      } else {
        dispatch(signOut());
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [dispatch]);

  return (
    <div className="App__container">
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        {/* <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
        <Route path={ROUTES.HOME} component={Home} exact /> */}
      </Routes>
    </div>
  );
}

export default App;
