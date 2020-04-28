import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import { Link } from  "react-router-dom";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import ReportIcon from '@material-ui/icons/Report';

import './NaturalCalamitiesForm.css';

    
const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

class NaturalCalamitiesForm extends Component {


    static contextTypes = {
        router: PropTypes.object
      }
    
    
    state= {
        controls: {
            name: null,
            area: null,
            type: null,
            rating: null
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

        axios.post('http://localhost:5000/naturalCalamityData', data)
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
                            Natural Calamities
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
                                    label="Area"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "area") }
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.type}
                                    defaultValue="Volcano Erruption"
                                    onChange={ event => this.inputChangedHandler(event, "type") }
                                >
                                    <MenuItem value="Volcano Erruption">Volcano Erruption</MenuItem>
                                    <MenuItem value="Water Flood">Water Flood</MenuItem>
                                    <MenuItem value="Earthquake">Earthquake</MenuItem>
                                    <MenuItem value="Land Slide">Land Slide</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div className="form-group">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend">Scale</Typography>
                                <StyledRating
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<ErrorIcon fontSize="2rem"></ErrorIcon>}
                                onChange={ event => this.inputChangedHandler(event, "rating") }
                                />
                            </Box>
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

export default NaturalCalamitiesForm;