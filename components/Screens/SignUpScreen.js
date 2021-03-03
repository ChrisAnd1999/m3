import React from 'react';
import {styles} from 'CommunityRides/components/styles/stylesSheet.js'
import { useNavigation } from '@react-navigation/native'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native'


const SignUp = ({navigation}) => {

  return(
    <View style = {styles.container}>
      <Text style = {styles.HeaderText}>
      SignUp
      <TouchableOpacity style = {styles.transparentButton}
        onPress = {() => navigation.navigate('SignIn')}
        >
          <Text style = {styles.SignHeaderText}> SignIn</Text>
        </TouchableOpacity>
      </Text>
      <TextInput style={styles.boarder}
        placeholder = "Your Email Address"
        placeholderTextColor = "#FCFBFC"
        autoCapitalize = "none"
        //onChangeText = {text => this.setState({Username: text})}
        />
        <TextInput style={styles.boarder}
          placeholder = "Password"
          placeholderTextColor = "#FCFBFC"
          autoCapitalize = "none"
          //onChangeText = {text => this.setState({Username: text})}
          />
          <TextInput style={styles.boarder}
            placeholder = "Confirm Password"
            placeholderTextColor = "#FCFBFC"
            autoCapitalize = "none"
            //onChangeText = {text => this.setState({Username: text})}
            />

      <TouchableOpacity style = {styles.submitButton}
        //onPress = {this.userInfo.bind(this)}
        >
          <Text style = {styles.submitButtonText}> SignUp </Text>
        </TouchableOpacity>


      <Text style = {styles.companyName}>
      Community Rides
        </Text>

      </View>
    )

}

export default SignUp;
