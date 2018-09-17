import React, { Component } from 'react';

import Header from './Header';
import HomeHighlights from './HomeHighlights';
import Description from './Description';
import Amenities from './Amenities';
import AmenitiesModal from './AmenitiesModal';
import SleepingArrangements from './SleepingArrangements';
import HouseRules from './HouseRules';
import Location from './Location';

import utility from '../clientHelpers';

import styles from '../../public/styles/app.css';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();

    this.toggleDescription = this.toggleDescription.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleHouseRules = this.toggleHouseRules.bind(this);

    this.state = {
      listing: {},
      description: '',
      homeHighlights: [],
      amenities: {},
      houseRules: {},
      showDescription: true,
      showHouseRules: false,
      showAmenitiesModal: false,
    };
  }

  componentDidMount() {
    const roomId = window.location.pathname.split('/')[2];

    axios.get(`/rooms/${roomId}/x`)
      .then((res) => {
        const { data } = res;

        this.setState({
          listing: data.listing,
          homeHighlights: utility.formatHomeHighlights(data),
          amenities: utility.formatAmenities(utility.collectAmenities(data)),
          houseRules: utility.formatHouseRules(data.house_rules),
          description: data.listing.description.split('||').join('\n').split('/').join(','),
        });
      });
  }

  toggleDescription() {
    const { showDescription } = this.state;
    this.setState({
      showDescription: !showDescription,
    });
  }

  toggleModal() {
    const { showAmenitiesModal } = this.state;
    this.setState({
      showAmenitiesModal: !showAmenitiesModal,
    });
  }

  toggleHouseRules() {
    const { showHouseRules } = this.state;
    this.setState({
      showHouseRules: !showHouseRules,
    });
  }

  render() {
    const {
      showAmenitiesModal,
      listing,
      description,
      showDescription,
      homeHighlights,
      amenities,
      houseRules,
      showHouseRules,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        {
          showAmenitiesModal
          && <AmenitiesModal toggleModal={this.toggleModal} amenities={amenities} />
        }
        <Header listing={listing} />
        <HomeHighlights highlights={homeHighlights} />
        <Description
          descriptionBody={description}
          toggle={this.toggleDescription}
          showDescription={showDescription}
        />
        <Amenities
          amenities={amenities}
          showModal={showAmenitiesModal}
          toggleModal={this.toggleModal}
        />
        <SleepingArrangements beds={listing.beds} />
        <HouseRules
          toggleHouseRules={this.toggleHouseRules}
          showHouseRules={showHouseRules}
          rules={houseRules}
        />
        <Location city={listing.city} state={listing.state} />
      </div>
    );
  }
}

export default App;
