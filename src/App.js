import React from 'react';
import './App.css';
import Home from './components/home';
import StageOne from './components/stageOne';
import StageTwo from './components/stageTwo';
import StageThree from './components/stageThree';
import StageFour from './components/stageFour';
import StageFive from './components/stageFive';
import StageSix from './components/stageSix';
import StageSeven from './components/stageSeven';
import FinishLine from './components/finishLine';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/abc' component={StageOne}/>
      <Route path='/ghi' component={StageTwo}/>
      <Route path='/xyz' component={StageThree}/>
      <Route path='/mno' component={StageFour}/>
      <Route path='/rst' component={StageFive}/>
      <Route path='/def' component={StageSix}/>
      <Route path='/jkl' component={StageSeven}/>
      <Route path='/fl' component={FinishLine}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
