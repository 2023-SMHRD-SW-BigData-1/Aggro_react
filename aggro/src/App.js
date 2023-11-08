import React from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";

import Community from "./pages/community/Community";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityEdit from "./pages/community/CommunityEdit";
import CommunityWrite from "./pages/community/CommunityWrite";
import Home from "./pages/home/Home";
import Intro from "./pages/info/Intro";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";
import Ranking from "./pages/ranking/Ranking";
import Summoner from "./pages/summoner/Summoner";
import My from "./pages/my/My";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} exact={true} />
      <Route path="/" component={Home} exact={true} />
      <Route path="/ranking/:searchName" component={Ranking} />
      <Route path="/community/:id" component={CommunityDetail} />
      <Route path="/community" component={Community} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/intro" component={Intro}/>
      <Route path="/write" component={CommunityWrite} />
      <Route path="/mypage" component={My} />
      <Route path="/summoner/:username" component={Summoner} />
      <Route path="/summoner" component={Summoner} />
      <Route path="/edit" component={CommunityEdit} exact={true} />

    </Switch>
  );
}

export default App;
