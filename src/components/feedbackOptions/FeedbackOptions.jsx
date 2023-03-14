import React from 'react';
import css from './feedbackStyle.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonNames = Object.keys(options);
  return (
    <div className={css.btn_list}>
      {buttonNames.map(item => (
        <button
          onClick={onLeaveFeedback}
          className={css.feedback_btn}
          type="button"
          name={item}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
