/*eslint-disable*/
import React, {component, useState, useEffect,createRef,useRef } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity,Pressable,StyleSheet,Dimensions,ScrollView,useCallback,TouchableWithoutFeedback } from "react-native";
import { Card} from "@rneui/base";
import { Image, Input, Chip,Button,Rating } from '@rneui/themed';
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
import { TextInput,Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Skeleton } from '@rneui/themed';
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
        <Header name="Help" icon="arrow-back" navigation={navigation} />
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
export default Review = ({navigation}) => {
    const {width,height} = Dimensions.get('window');
    const ImageWidth = (width-30)
    let viewPagerRef =  React.createRef();
    const dispatch = useDispatch();
    const [addresses,setAddress] = useState(0)
    const [addNewAddress,setNewAddress] =useState(false)
    const [name,setName] =useState()
    const [comments,setComments] =useState('')
    const [pincode,setPincode] =useState('')
    const [state,setState] =useState('')

    const [city,setCity] =useState('')
    const [landMark,setLandMark] =useState('')
    const [validations,setValidation] = useState({})
    const [ratingValue,setRating] = useState(5);
    const orderList = [
         "ABC Product",
         "DEF Product",
         "GHI Product",
         "JKL Product"
    ]
    const query = ["Exchange","Return"]
    const orderArr = orderList
    const [addressType,setAddressType] = useState('home')
    const onBlurValidation = (value,key) =>{
        switch(key) {
            case 'name':
                setValidation({...validations,[key]:value==''})
                break;
            case 'comments':
                let val = value == '';
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
        <Header name="Review" icon="arrow-back" navigation={navigation} />
        <Container style={styles.container} isScrollable={true}>
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',marginTop:20}}>
               
                <View style={styles.dropdownsRow}>
                    <SelectDropdown
                        data={orderArr}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={'Select Order'}
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
                <TextInput error={validations['comments']} mode="outlined" label="Comments" style={{ marginTop: 3 }} 
                    keyboardType="text"
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={text => {setComments(text);onBlurValidation(text,'comments')}}
                />
                   <Rating
                       showRating
                       type="star"
                       fractions={1}
                       startingValue={ratingValue}
                       ratingColor="#6E3CBC"
                       ratingBackgroundColor="#393E46"
                       imageSize={40}
                       onFinishRating={(ratingVal)=>setRating(ratingVal)}
                       style={{ paddingVertical: 10,marginTop:15 }}
                   />
            </View>

        </Container>
        <View style={{flexDirection:'row',alignItems:'center',bottom:10,backgroundColor:'#fff',paddingLeft:10,paddingRight:10,paddingHorizontal:scale(20)}}>
            <Button  title="SUBMIT"  loading={false}
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