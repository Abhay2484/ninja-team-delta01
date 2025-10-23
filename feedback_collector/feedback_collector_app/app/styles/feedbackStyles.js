import { StyleSheet } from 'react-native';

export const feedbackStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#E0F2FF', // light blue background
  },

  heading: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Arial',
    color: '#003366', // dark navy text for good contrast
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  Subheading: {
    fontSize: 20,
    marginBottom: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Arial',
    color: '#003366', // dark navy text for good contrast
  },

  teamName: {
    fontSize: 18,
    color: '#007ACC',
    marginBottom: 30,
    fontFamily: 'Verdana',
    fontWeight: '500',
  },

  inputBox: {
    width: '10%',
    height: '20%',
    minHeight: '10%',
    borderWidth: 2,
    borderColor: '#00A36C', // soft green border
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },

  button: {
    width: 120,
    backgroundColor: '#007ACC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
    alignSelf: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  feedbackList: {
    width: '100%',
    marginTop: 30,
  },

  feedbackCard: {
    backgroundColor: '#F0FFFF',
    padding: 15,
    borderRadius: 12,
    borderColor: '#B3E5FC',
    borderWidth: 2,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },

  feedbackText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
