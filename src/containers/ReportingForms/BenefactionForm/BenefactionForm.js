import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';

import './BenefactionForm.css';

    

class BenefactionForm extends Component {

    static contextTypes = {
        router: PropTypes.object
      }
    
    
    state= {
        controls: {
            name: null,
            product: null,
            location: null,
            type: null,
            contact: null
        }
    };

    componentDidMount() {
        
        fetch("https://geoplugin.p.rapidapi.com/ip/json.gp?ip=IPv4%2520or%2520IPv6%2520address", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "geoplugin.p.rapidapi.com",
                "x-rapidapi-key": "423d9df077msh1fc33ec17baeee6p11f236jsn4276124b51d9"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    
    redirectToTarget = () => {
        this.context.router.history.push(`/`)
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: event.target.value
        }
        this.setState( { controls: updatedControls } );
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        
        const data = {
            ...this.state.controls
        }

        console.log(data);

        axios.post('http://localhost:5000/benefactionData', data)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {

        return (
            <Aux classes='HealthFormContainer'>
                <div className="HealthForm">
                    <div className="Header-Login-HealthForm">    
                        <h1 className="Form-header">
                            Benefaction
                        </h1>
                    </div>

                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextField
                                    fullWidth
                                    id="standard-error-helper-text"
                                    label="Name"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "name") }
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextField
                                    fullWidth
                                    multiline
                                    id="standard-error-helper-text"
                                    label="Location"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "location") }
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextField
                                    fullWidth
                                    multiline
                                    id="standard-error-helper-text"
                                    label="Product"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "product") }
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    defaultValue="Donate"
                                    value={this.state.type}
                                    onChange={ event => this.inputChangedHandler(event, "type") }
                                >
                                    <MenuItem value="Donate">Donate</MenuItem>
                                    <MenuItem value="Receive">Receive</MenuItem>
                                </Select>
                            </div>

                            <div className="form-group col-md-6">
                                <TextField
                                    fullWidth
                                    id="standard-error-helper-text"
                                    label="Contact"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "contact") }
                                />
                            </div>
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ReportIcon>Report</ReportIcon>}
                            className="btn"
                            onClick={this.onSubmitForm}
                        >
                            Send
                        </Button>
                    </form>

                </div>
            </Aux>
        );
    }
}

export default BenefactionForm;