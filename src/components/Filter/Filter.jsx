import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <label className={css.filter__label}>
      Find contacts by name
      <input
        className={css.filter__input}
        value={value}
        onChange={onChange}
        type="text"
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
