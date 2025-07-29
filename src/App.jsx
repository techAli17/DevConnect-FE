import React from "react";
import Body from "./components/Body";
import appStore from "./redux/store";
import { Provider } from "react-redux";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Chat from "./components/Chat";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Connections" element={<Connections />} />
              <Route path="/Chat/:toUserId" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
};

export default App;
