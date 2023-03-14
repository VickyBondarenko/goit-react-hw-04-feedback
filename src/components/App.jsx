import { useState } from 'react';
import { Section } from './section/Section ';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistic/Statistics';
import styled from 'styled-components';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const mapState = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const addFeedback = event => {
    const { name } = event.target;
    mapState[name](prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good / (bad + neutral + good)) * 100);
  };

  return (
    <Wraper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={mapState} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Wraper>
  );
}

export default App;

const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px 50px;
`;
