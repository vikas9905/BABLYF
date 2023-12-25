/*eslint-disable*/
import React, {useState,useEffect} from 'react';
import {View, Pressable,StatusBar,StyleSheet} from 'react-native';
import Container from '../container/container';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SocialIcon, SocialIconProps } from '@rneui/themed';
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,Text,Button
} from "@react-native-material/core";
import {Dimensions} from 'react-native';
import { CustomSocialButton } from '../components/socialButton';
import {USER_DETAILS_SUCCESS} from '../../actions/actionTypes';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,useTheme
} from "@react-navigation/native";
import { TextInput,Snackbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";

export default function Login({navigation}) {
   
    const windowHeight = Dimensions.get('window').height;
    const[otpScreen,setOtpScreen] = useState(false);
    const[phoneNumber,setPhoneNumber] = useState();
    const[otp,setOtp] = useState();
    const isLoggedIn = false;
    const userDetails = {loading: false};
    console.log(isLoggedIn)
    const [phoneNumberError,setPhoneError] = useState(false);
    const [otpError,setOtpError] = useState(false)
    const[confirm,setConfirm] = useState();
    const[showSanck,setSnack] = useState(false);
    const[snackMsg,setSnackMsg] = useState('');
    const[isLoading,setLoading] = useState(true);
    const onPhoneNumberChange = (num) =>{
      if(isNaN(num)){
        setPhoneError(true);
      }else{
        setPhoneError(false)
      }
      setPhoneNumber(num);
    }
    const onOtpChange = (num) =>{
      if(isNaN(num)){
        setOtpError(true);
      }else{
        setOtpError(false)
      }
      setOtp(num);
    }
    getCurrentUserInfo = async () => {
      try {
        const user_details = {
          user_name: "vikash",
          user_id: 10,
          email: 'test@gmail.com',
          profile_pic: null,
        }
        setLoading(false);
        // dispatch({type:USER_DETAILS_SUCCESS,payload:user_details})
        dispatch(getUserDetails(userInfo.user.id))
        await AsyncStorage.setItem('isLoggedIn','true');
        await AsyncStorage.setItem('user_details',JSON.stringify(user_details));
      } catch (error) {
        setLoading(false);
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // user has not signed in yet
        } else {
          // some other error
        }
      }
    };
    signIn = async () => {
      try {
        
        // dispatch({type:USER_DETAILS_SUCCESS,payload:user_details})
        // dispatch(setUserDetails(user_details));
        await AsyncStorage.setItem('isLoggedIn','true');
        await AsyncStorage.setItem('user_details',JSON.stringify(user_details));
        if(userDetails.data.status != 200) {
          setSnack(true)
          setSnackMsg("Sign in Cancelled")
        }
        console.log("userinfo in sign in>>>",userInfo)
      } catch (error) {
        console.log("Error>>",error)
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          setSnack(true)
          setSnackMsg("Sign in Cancelled")
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log("In progress")
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          setSnack(true)
          setSnackMsg("PLAY STORE NOT AVAILABLE")
        } else {
          // some other error happened
        }
      }finally{

      }
    };

    const setUser = async() =>{
      if(!phoneNumber.includes('+91')){

      }
      const user_details = {
        data:{
          user:{
            user_id: phoneNumber,
            user_name: "Guest",
            email: null,
            profile_pic: null
          },
          paymentdetails:null
        }
      }
      try{
        dispatch(setUserDetails(user_details.data.user));
        // dispatch({type:USER_DETAILS_SUCCESS,payload:user_details})
        await AsyncStorage.setItem('isLoggedIn','true')
        await AsyncStorage.setItem('user_details',JSON.stringify(user_details.data.user));
      }catch(e){
        console.log("in login set user>>",e)
        setSnack(true)
        setSnackMsg("Some Error occured");
      }
      
    }
  
    // Handle login
    const onAuthStateChanged = (user) => {
      if (user) {
          console.log("user loged in",user);
          setPhoneNumber(user.phoneNumber);
          setOtpScreen(false)
          setUser();
          // dispatch(getUserDetails(userInfo.user.id))
          setLoading(false);
      }
    }
  
    // useEffect(() => {
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    // }, []);

    // useEffect(()=>{
    //   setPhoneNumber('')
    //   getCurrentUserInfo();
    // },[])
  
    // Handle the button press
    const signInWithPhoneNumber = async () => {
      if(!phoneNumberError){
        if(phoneNumber.length < 10){
          console.log(phoneNumber.length)
          setSnack(true);
          setSnackMsg("Not Valid number");
          return;
        }
        try{
          const phone = '+91'+phoneNumber;
          const confirmation = await auth().signInWithPhoneNumber(phone);
          setConfirm(confirmation);
          setOtpScreen(true);
        }catch(e){
          console.log("phone auth err>>",e)
          setSnack(true);
          setSnackMsg("Some error occured");
        }
        
      }else{

      }
    }
  
    const confirmCode = async(code) => {
      try {
        if(!otpError) {
          const resp = await confirm.confirm(otp);
          console.log("confirm>>",resp)
          setUser();
        }
      } catch (error) {
        setSnack(true);
        setSnackMsg("Wrong Otp Entered");
        console.log("eeor in sign in otp>>",error)
      }
    }
    if(userDetails.loading) {
      return (
            <Container>
                <View
                  style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                >
                  <ActivityIndicator size="large" />
                </View>
            </Container>
          )
    }
    
  return (
    
    <>
    <Backdrop
      revealed={true}   
      backLayer={<View style={{ height: windowHeight/3 }} >
        <View style={{alignItems:'center',justifyContent:'center',flex:1}} >
          <Text  color='#fff' style={{fontSize:30,fontWeight:500}}>LOGIN</Text>
        </View>
      </View>}
    >
    </Backdrop>
    <View style={styles.container}>
    <View style={{ marginTop: 0 }}>
      {!otpScreen && <TextInput error={phoneNumberError} onChangeText={text => onPhoneNumberChange(text)} mode="outlined" label="NUMBER" style={{ marginTop: 10 }}/>}
      {otpScreen && <TextInput error={otpError} onChangeText={text => onOtpChange(text)} mode="outlined" label="OTP" style={{ marginTop: 10 }} />}          
                
    </View>
      {otpScreen && <Button variant="text" title="resend" style={{padding:0,justifyContent:'flex-start',width:100,marginLeft:-20}} />}
      {!otpScreen && <CustomSocialButton name='phone'   title='Login with Phone' onPress = {()=>{signInWithPhoneNumber()}} />}
      {otpScreen && <CustomSocialButton   title='Verify' onPress = {()=>{confirmCode()}} />}
      {otpScreen && <CustomSocialButton name='pencil-square-o'   title='change number' onPress = {()=>{setOtpScreen(false)}} />}
      <CustomSocialButton name='google'   title='Login with Google' onPress = {()=>{signIn()}} />
    </View>
    <View >
              <Snackbar
                visible={showSanck}
                onDismiss={() => {setSnack(false)}}
                action={{
                  label: 'OK',
                  onPress: () => {
                    setSnack(false)
                  },
                }}>
                {snackMsg}
              </Snackbar>
            </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:30,
  },
})
