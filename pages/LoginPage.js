import React, { Component } from 'react';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export default class LoginPage extends Component<{}> {
  constructor(props)
  {
    super(props);
    this.state = {...props, username: "", password: ""};
  }

  componentWillMount(){
    console.log("Login", this)
  }

  Login()
  {
    console.log("You are about to sign in with the following credentials:"+
      `\nUsername: ${this.state.username}\n` +
      `Password: ${this.state.password}`
    );
    // CLEAR VARS
    this.setState({
      username: "",
      password: ""
    })

    Actions.replace('dashboard', {});
  }

  NavToRegister()
  {
    console.log("Navigating to register");
    Actions.register();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('../assets/WeTraq_logo.png')}
        />
        <FormLabel>Username</FormLabel>
        <FormInput
          value={this.state.username}
          onChangeText={(text)=>this.setState({username: text || ""})}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          value={this.state.password}
          onChangeText={(text)=>this.setState({password: text || ""})}
        />
        <Button
          raised
          icon={{name: 'person'}}
          title='Login'
          onPress={this.Login.bind(this)}/>
        <Text 
          style={{marginTop: 20, 
          textAlign: 'center'}}
          onPress={this.NavToRegister.bind(this)}>
            Register
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
    marginBottom: 30,
  },
});
