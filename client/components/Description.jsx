import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ descriptionBody, toggle, showDescription }) => (
  <div className="description">

    <div className="description-top">
      {descriptionBody.split('.').slice(0, 5).join('.')}
    </div>

    <div className={`description-bottom-${showDescription}`}>
      {descriptionBody.split('\n').map(
        par => (
          <p>
            {par}
          </p>
        ),
      )}
    </div>

    <span role="button" tabIndex="0" className="read-more" onClick={() => { toggle(); }} onKeyPress={() => { toggle(); }}>
      {
        showDescription
          ? (
            <span className="bold">
              Read more about the space
            </span>)
          : (
            <span className="bold">
              Hide ^
            </span>
          )
      }
    </span>

    <div className="bold read-more contact-host">
      Contact Host
    </div>

    <div className="divider" />
  </div>
);

Description.defaultProps = {
  descriptionBody: 'FILL IN DESCRIPTION',
  toggle: () => { console.log('no toggle function'); },
  showDescription: () => {},
};

Description.propTypes = {
  descriptionBody: PropTypes.string,
  toggle: PropTypes.func,
  showDescription: PropTypes.func,
};

export default Description;
