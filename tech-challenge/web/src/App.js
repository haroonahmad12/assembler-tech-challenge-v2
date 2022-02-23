import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as ROUTES from "./Routes";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import ResetPassword from "./pages/ResetPassword";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";

import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut } from "./redux/auth-reducer/actions";
import { authSelector } from "./redux/auth-reducer/selectors";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(authSelector);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.LOGIN);
    }
  }, [isAuthenticated]);

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

        {isAuthenticated && (
          <>
            <Route path={ROUTES.HOME} element={<Dashboard />} />
            {/* <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} /> */}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
