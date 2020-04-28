import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './App.css';
import HomePage from './containers/HomePage/HomePage';

import Navbar from './components/Navbar/Navbar';
import LoginForm from './containers/LoginForm/LoginForm';
import SignUpForm from './containers/SignUpForm/SignUpForm';

import HealthForm from './containers/ReportingForms/HealthForm/HealthForm.js';
import CrimeForm from './containers/ReportingForms/CrimeForm/CrimeForm';
import BenefactionForm from './containers/ReportingForms/BenefactionForm/BenefactionForm';

import DrugsForm from './containers/ReportingForms/DrugsForm/DrugsForm';
import ElectricityForm from './containers/ReportingForms/ElectricityForm/ElectricityForm';
import FireForm from './containers/ReportingForms/FireForm/FireForm';

import NaturalCalamitiesForm from './containers/ReportingForms/NaturalCalamitiesForm/NaturalCalamitiesForm';
import NeighbourRatingForm from './containers/ReportingForms/NeighbourRatingForm/NeighbourRatingForm';
import PollutionForm from './containers/ReportingForms/PollutionForm/PollutionForm';

import RoadConditionForm from './containers/ReportingForms/RoadConditionForm/RoadConditionForm';
import WasteDisposalForm from './containers/ReportingForms/WasteDisposalForm/WasteDisposalForm';
import WaterForm from './containers/ReportingForms/WaterForm/WaterForm';

class App extends Component {
    
  render() {

    return (
      <BrowserRouter>
        <div className="static">
          <Navbar classes="navbar"></Navbar>

          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            
            <Route path="/reporting/health" component={HealthForm} />
            <Route path="/reporting/crime" component={CrimeForm} />
            <Route path="/reporting/neighbourRating" component={NeighbourRatingForm} />

            <Route path="/reporting/drugs" component={DrugsForm} />
            <Route path="/reporting/benefaction" component={BenefactionForm} />
            <Route path="/reporting/roadCondition" component={RoadConditionForm} />

            <Route path="/reporting/water" component={WaterForm} />
            <Route path="/reporting/pollution" component={PollutionForm} />
            <Route path="/reporting/wasteDisposal" component={WasteDisposalForm} />

            <Route path="/reporting/naturalCalamities" component={NaturalCalamitiesForm} />
            <Route path="/reporting/electricity" component={ElectricityForm} />
            <Route path="/reporting/fire" component={FireForm} />
            
            <Route path="/" component={HomePage} />  
          </Switch>
          
          {/* <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
