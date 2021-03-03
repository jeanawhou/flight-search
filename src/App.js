import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faHotel,
  faPlaneDeparture,
  faCar,
  faShoppingBag,
  faTicketAlt,
  faShip
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Card from './components/Card';
import TextInput from './components/TextInput';
import CustomButton from './components/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const App = () => {
  const [roundTripActive, setRoundTripActive] = useState(true);
  const [oneWayActive, setOneWayActive] = useState(false);
  const [multiCityActive, setMultiCityActive] = useState(false);

  const [activeTab, setActiveTab] = useState(1);

  const setFlight = (flight) => {
    switch (flight) {
      case 0:
        setRoundTripActive(true);
        setOneWayActive(false);
        setMultiCityActive(false);
        break;
      case 1:
        setRoundTripActive(false);
        setOneWayActive(true);
        setMultiCityActive(false);
        break;
      case 2:
        setRoundTripActive(false);
        setOneWayActive(false);
        setMultiCityActive(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="card-container">
        <Card>
          <Tabs
            centered
            value={activeTab}
            className="card-tabs"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab
              onClick={() => setActiveTab(0)}
              label="Hotels"
              icon={<FontAwesomeIcon icon={faHotel} size="lg" />}
            />
            <Tab
              onClick={() => setActiveTab(1)}
              label="Flights"
              icon={<FontAwesomeIcon icon={faPlaneDeparture} size="lg" />}
            />
            <Tab
              onClick={() => setActiveTab(2)}
              label="Cars"
              icon={<FontAwesomeIcon icon={faCar} size="lg" />}
            />

            <Tab
              onClick={() => setActiveTab(3)}
              label="Packages"
              icon={<FontAwesomeIcon icon={faShoppingBag} size="lg" />}
            />

            <Tab
              onClick={() => setActiveTab(4)}
              label="Things to do"
              icon={<FontAwesomeIcon icon={faTicketAlt} size="lg" />}
            />

            <Tab
              onClick={() => setActiveTab(5)}
              label="Cruise"
              icon={<FontAwesomeIcon icon={faShip} size="lg" />}
            />
          </Tabs>
          <div className="flight-config-row">
            <div className="custom-button-group">
              <CustomButton
                active={roundTripActive}
                onClick={() => setFlight(0)}
                value="Roundtrip"
              />
              <CustomButton
                active={oneWayActive}
                onClick={() => setFlight(1)}
                value="One-way"
              />
              <CustomButton
                active={multiCityActive}
                onClick={() => setFlight(2)}
                value="Multi-city"
              />
            </div>
            <div className="select-section">
              <Select
                defaultValue="1 Traveler"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value="1 Traveler">1 Traveler</MenuItem>
              </Select>
            </div>
          </div>
          <form>
            <div className="input-forms">
              <TextInput
                className="place-textfield"
                placeholder="Leaving from"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                    </InputAdornment>
                  )
                }}
              />

              <TextInput
                className="place-textfield"
                placeholder="Going to"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                    </InputAdornment>
                  )
                }}
              />

              <TextInput label="" type="date" />

              <TextInput label="" type="date" />
            </div>

            <div className="checkbox">
              <FormControlLabel
                control={<Checkbox name="place" />}
                label="Add a place to stay"
              />
            </div>
            <CustomButton active type="submit" value="search" />
          </form>
        </Card>
      </div>
    </div>
  );
};

export default App;
