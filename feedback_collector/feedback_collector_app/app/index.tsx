import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native'; 
import FeedbackInput from './feedback_input';

// import FeedbackButton from './button';
//import { feedbackStyles } from './styles/feedbackStyles';

export default function App() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const trimmed = feedback.trim();
    if (!trimmed) {
      Alert.alert('Empty Feedback', 'Please enter your feedback before submitting.', [{ text: 'OK' }]);
      return;
    }
    Alert.alert('Feedback Submitted', 'Feedback submitted successfully! 💙', [{ text: 'OK' }]);
    setFeedback('');
  };

  return (
  <View >
    <Text>💬 Feedback Collector</Text>
    <Text >By Team Delta 💙</Text> 
      <FeedbackInput
        feedback={feedback}
        onChangeFeedback={setFeedback}
        onSubmit={handleSubmit}
      />
      {/* <FeedbackButton onSubmit={handleSubmit} /> */}
    </View>
  );
}