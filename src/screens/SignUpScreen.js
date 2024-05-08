import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpassword, setcomfirmpasworrd] = useState("");
    const onPress = () => {
        Alert.alert(`Đăng nhập thành công với tên người dùng ${email} và mật khẩu ${password}`);
    };
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                source={require('../assets/logox2.png')}
                style={styles.logo}
                resizeMode="contain"
                />
            <Text style={styles.logo}>SIGNUP</Text>
      </View>
         <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            value={email}
            placeholder="Email..." 
            placeholderTextColor="#9BA4B5"
            onChangeText={setEmail}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            secureTextEntry
            style={styles.inputText}
            value={password}
            placeholder="Password..." 
            placeholderTextColor="#9BA4B5"
            onChangeText={setPassword}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            secureTextEntry
            style={styles.inputText}
            value={confirmpassword}
            placeholder="Comfirm Password..." 
            placeholderTextColor="#9BA4B5"
            onChangeText={setcomfirmpasworrd}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} >
            <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Login')} >
            <Text style={styles.questions}>Already Registered? Click here to login</Text>
        </TouchableOpacity>
        </View>
    );
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 10,
        padding: 2,
        width: '90%',
        elevation: 5,
        borderWidth: 5, 
        borderColor: '#ffffff',
      },
    inputText:{
      height:50,
      color:"#003f5c"
    },
    forgot:{
      color:"#003f5c",
      fontSize:14,
      marginLeft:'60%'
    },
    loginBtn:{
      width:"90%",
      backgroundColor:"#fb5b5a",
      borderRadius:10,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginBottom:10
    },
    loginText:{
      color:"#fff",
      fontSize:20
    },
    questions:{
        color:"#003f5c"
    }
  });
export default SignUp;