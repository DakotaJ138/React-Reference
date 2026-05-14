import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
// Text styling
text: {
fontSize: 16,
color: '#333',
fontFamily: 'System',
},
// Image styling
image: {
width: 100,
height: 100,
borderRadius: 8,
},
// Button/Container styling
button: {
backgroundColor: '#007AFF',
padding: 12,
borderRadius: 5,
alignItems: 'center',
},
// Link styling (Text with specific decoration/color)
link: {
color: '#007AFF',
textDecorationLine: 'underline',
fontWeight: 'bold',
},
// CUSTOM: center column container
centerColumn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
});