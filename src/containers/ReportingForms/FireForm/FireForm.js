import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import { Link } from  "react-router-dom";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import './FireForm.css';

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  

class FireForm extends Component {


    static contextTypes = {
        router: PropTypes.object
      }
    
    
    state= {
        controls: {
            name: null,
            area: null,
            location: null,
            rating: null
        }
    };

    
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

        axios.post('http://localhost:5000/fireData', data)
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
                            Fire Accident
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
                            <div className="form-group col-md-6">
                                <TextField
                                    fullWidth
                                    id="standard-error-helper-text"
                                    label="Area"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "area") }
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <TextField
                                    fullWidth
                                    id="standard-error-helper-text"
                                    label="Location"
                                    defaultValue=""
                                    onChange={ event => this.inputChangedHandler(event, "location") }
                                />
                            </div>
                        </div>

                        
                        <div className="form-group">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend">Damage Rating</Typography>
                                <StyledRating
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<WhatshotIcon fontSize="2rem"></WhatshotIcon>}
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

export default FireForm;