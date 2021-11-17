import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { UserContext } from "./util/userContext";
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import Login from './containers/Login/Login';
import ShoppingList from './containers/ShoppingList/ShoppingList';
import Messenger from './containers/Messenger/Messenger';
import Settings from './containers/Settings/Settings';

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  const checkLogin = () => {

    const userInfoResult = {
      "id": 1,
      "userName": "emit",
      "firstName": "عماد",
      "lastName": "آرمون",
    };
    setUserInfo(userInfoResult);
    setIsLoggedIn(true);

  };

  useEffect(() => {

    checkLogin();
    // X return () => {}

  }, []);

  const mainRoutes = () => (
    <Switch>
      <Route exact path="/" component={ShoppingList} />
      <Route exact path="/messenger" component={Messenger} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/404" component={NotFoundPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );

  return (
    <div className="container mx-auto h-full bg-white" data-test="app-wrapper">
      <BrowserRouter>
        <UserContext.Provider value={userInfo}>
          {isLoggedIn
            ? mainRoutes()
            : <Switch>
              <Route exact path="*" component={Login} />
            </Switch>}
          <ToastContainer
            rtl draggable closeOnClick position="bottom-center"
            className="toast-box" />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
