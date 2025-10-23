import React from 'react';
import { Text, TextInput, View } from 'react-native';
//import { feedbackStyles } from './styles/feedbackStyles';

type FeedbackInputProps = {
  feedback: string;
  onChangeFeedback: (text: string) => void;
  onSubmit: () => void;
};

const FeedbackInput = ({ feedback,onChangeFeedback, onSubmit }: FeedbackInputProps) => {

  return (
    <View>
      <Text >FEEDBACK PLEASE</Text> {/*style={feedbackStyles.Subheading}*/}
      <TextInput
       // style={feedbackStyles.inputBox}
        placeholder="Type your feedback here..."
        placeholderTextColor="#666"
        value={feedback}
        onChangeText={onChangeFeedback}
        multiline={false}
        returnKeyType="send"
        onSubmitEditing={onSubmit}
      />
     
    </View>
  );
};

export default FeedbackInput;
