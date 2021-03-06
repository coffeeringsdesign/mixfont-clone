import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import AboutUs from './AboutUs';



function App(){
  return (
    <div>

      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
