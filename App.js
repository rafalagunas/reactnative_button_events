import React from 'react';
import { StyleSheet, Alert, Text, Button, Image, View } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text> Haz click en la imagen! </Text>
        <View style={styles.box}>
          <Image
             style={styles.image}
             source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>
          </View>
          <Button
        onPress={this._onPressButton}
        title="Press Me"
        color="#841584"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#ffbb00',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderRadius: 20,
  },
  textocuadro: {
    fontSize: 24,
  },
  image: {
    width:200,
    height: 200,
  },
});
