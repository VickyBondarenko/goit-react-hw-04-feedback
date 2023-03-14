import { Component } from 'react';
import { Section } from './section/Section ';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistic/Statistics';
import styled from 'styled-components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    const positiveFeedback = Math.round(
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
        100
    );

    return positiveFeedback;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Wraper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Wraper>
    );
  }
}

const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px 50px;
`;
