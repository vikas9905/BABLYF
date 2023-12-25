/*eslint-disable*/
import React, {component, useState, useEffect,createRef,useRef } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity,Pressable,StyleSheet,Dimensions,ScrollView,useCallback,TouchableWithoutFeedback } from "react-native";
import { Card} from "@rneui/base";
import { Image, Input, Chip,Button } from '@rneui/themed';
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
import { TextInput,Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Skeleton } from '@rneui/themed';
import { Rating, AirbnbRating } from '@rneui/themed';
import PagerView from 'react-native-pager-view';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import Carousel from 'react-native-reanimated-carousel';
import { SkeletonComp } from "../components/skelton";
import Container from "../container/container";
import Header from "../components/header";
import { ListProduct } from "../components/listProducts";
import { RadioButton } from "react-native-paper";
import { routes } from "../utils/constants";
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters';



const BusyIndicator = ({navigation }) =>{
    let data = []
    for(let i =0;i<20;i++){
      data.push({id:i+1})
    }
    return (
      <>
        <Header name="Address" icon="arrow-back" navigation={navigation} />
          <Container>
            {
                data.map((item,index)=>{
                    return (
                        <>
                            <Address/>
                        </>
                    )
                })
            }
          </Container>
        </>
    )
}
export default Address = ({navigation}) => {
    const {width,height} = Dimensions.get('window');
    const ImageWidth = (width-30)
    let viewPagerRef =  React.createRef();
    const dispatch = useDispatch();
    const [addresses,setAddress] = useState(0)
    const [addNewAddress,setNewAddress] =useState(false)
    const [name,setName] =useState()
    const [mobNum,setMobNum] =useState('')
    const [pincode,setPincode] =useState('')
    const [state,setState] =useState('')

    const [city,setCity] =useState('')
    const [landMark,setLandMark] =useState('')
    const [validations,setValidation] = useState({})
    const stateList = {
        "AN":"Andaman and Nicobar Islands",
        "AP":"Andhra Pradesh",
        "AR":"Arunachal Pradesh",
        "AS":"Assam",
        "BR":"Bihar",
        "CG":"Chandigarh",
        "CH":"Chhattisgarh",
        "DN":"Dadra and Nagar Haveli",
        "DD":"Daman and Diu",
        "DL":"Delhi",
        "GA":"Goa",
        "GJ":"Gujarat",
        "HR":"Haryana",
        "HP":"Himachal Pradesh",
        "JK":"Jammu and Kashmir",
        "JH":"Jharkhand",
        "KA":"Karnataka",
        "KL":"Kerala",
        "LA":"Ladakh",
        "LD":"Lakshadweep",
        "MP":"Madhya Pradesh",
        "MH":"Maharashtra",
        "MN":"Manipur",
        "ML":"Meghalaya",
        "MZ":"Mizoram",
        "NL":"Nagaland",
        "OR":"Odisha",
        "PY":"Puducherry",
        "PB":"Punjab",
        "RJ":"Rajasthan",
        "SK":"Sikkim",
        "TN":"Tamil Nadu",
        "TS":"Telangana",
        "TR":"Tripura",
        "UP":"Uttar Pradesh",
        "UK":"Uttarakhand",
        "WB":"West Bengal"
    }
    const stateArr = Object.values(stateList)
    const [addressType,setAddressType] = useState('home')
    const onBlurValidation = (value,key) =>{
        switch(key) {
            case 'name':
                setValidation({...validations,[key]:value==''})
                break;
            case 'mob':
                let val = value == '' || value.length != 10;
                setValidation({...validations,[key]:val})
                break;
            case 'pin':
                let pin = value == '' || value.length != 6;
                setValidation({...validations,[key]:pin})
                break;
            case 'city':
                setValidation({...validations,[key]:value==''})
                break;
            case 'landmark':
                setValidation({...validations,[key]:value==''})
                break;

        }
    }
   return (
    <>
        <Header name="Address" icon="arrow-back" navigation={navigation} />
        <Container style={styles.container} isScrollable={true}>
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',marginTop:20}}>
                <TextInput error={validations['name']} mode="outlined" label="Full Name (Required)" style={{ marginTop: 3 }} 
                    keyboardType="text"
                     onChangeText={text => {setName(text);onBlurValidation(text,'name')}}
                />
                <TextInput error={validations['mob']} mode="outlined" label="Mobile Number" style={{ marginTop: 3 }} 
                    keyboardType="number-pad"
                    onChangeText={text => {setMobNum(text);onBlurValidation(text,'mob')}}
                />
                <View style={styles.dropdownsRow}>
                    <SelectDropdown
                        data={stateArr}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={'Select State'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            setState(selectedItem)
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                        buttonStyle={styles.dropdown1BtnStyle}
                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                    />
                </View>
                <TextInput error={validations['pin']} mode="outlined" label="Pin Code" style={{ marginTop: 3 }} 
                    keyboardType="number-pad"
                    onChangeText={text => {setPincode(text);onBlurValidation(text,'pin')}}
                />

                <TextInput error={validations['city']} mode="outlined" label="City" style={{ marginTop: 3 }} 
                    keyboardType="text"
                    onChangeText={text => {setCity(text);onBlurValidation(text,'city')}}
                />
                <TextInput error={validations['landmark']} mode="outlined" label="Landmark" style={{ marginTop: 3 }} 
                    keyboardType="text"
                    onChangeText={text => {setLandMark(text);onBlurValidation(text,'landmark')}}
                />
                <View style={{flexDirection:'row'}}>
                    <Chip
                        onPress={()=>setAddressType('home')}
                        title="Home"
                        type= {addressType=='home'? 'solid':'outline'}
                        icon={{
                        name: 'home',
                        type: 'font-awesome',
                        size: 20,
                        color: addressType=='home'? '#fff':'#444',
                        }}
                        containerStyle={{ marginVertical: 15 }}
                    />
                    <Chip
                        title="Work"
                        type= {addressType=='work'? 'solid':'outline'}
                        onPress={()=>setAddressType('work')}
                        icon={{
                        name: 'building',
                        type: 'font-awesome',
                        size: 20,
                        color: addressType=='work'? '#fff':'#444',
                        }}
                        containerStyle={{ marginVertical: 15,marginLeft:15 }}
                    />
                </View>

                
            </View>

        </Container>
        <View style={{flexDirection:'row',alignItems:'center',bottom:10,backgroundColor:'#fff',paddingLeft:10,paddingRight:10,paddingHorizontal:scale(20)}}>
            <Button  title="SAVE"  loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#6E3CBC',
                borderRadius: 0,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 30 }}
              containerStyle={{
                height: 45,
                width: '100%',
                backgroundColor:'#6E3CBC'
              }} onPress={()=>{navigation.navigate('checkout')}} />
              
        </View>
    </>
   )
};

const styles = StyleSheet.create({
  box:{
    width:120,
    height: 120,
    flex:1
  },
  list: {
    width: '100%',
  },
  fix_at_bottom: {
    position: 'absolute',
    bottom:0,
    left:0,
   },
   container:{
    flex:1
   },
   item:{
    width: '100%',
    height:260,
    flex:1,
    backgroundColor:'pink'
   },
   pagerView: {
    height: 300
   },
   shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width:'50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width:'50%', backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
  },
  dropdownsRow: {flexDirection: 'row', width: '100%', marginTop:5},

  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#fff'
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#fff'},
  dropdown1RowStyle: {backgroundColor: '#fff', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  divider: {width: 12},
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
})