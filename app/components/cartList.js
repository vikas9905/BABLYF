/*eslint-disable*/
import {View,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {AirbnbRating,Image,Skeleton,Text,Button} from '@rneui/themed';
import {ActivityIndicator,TextInput} from '@react-native-material/core';
import {Environment} from '../../environment';
import Container from '../container/container';
import { REVIEWS } from '../utils/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from "@react-native-material/core";
import axios from 'axios';




export const CartItem = ({navigation,item}) =>{
    const {width} = Dimensions.get('window');
    const ImageWidth = ((width-30)/2)
    const base_url =Environment.BASE_URL;
    const product_url = 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg';

    // console.log(item)
    return (
        <View style={{flexDirection:'row',marginTop:5}}>
                <View style={{flexDirection:'column'}}>
                  <Image source={{uri:product_url}} style={{width:60,height:60}}
                    PlaceholderContent={<Skeleton animation="wave" width={60} height={60} />}
                  />
                  <View>
                        <AirbnbRating
                        type='star'
                        isDisabled={true}
                        defaultRating={3}
                        size={10}
                        starContainerStyle ={{marginTop:-15}}
                        reviewSize={10}
                        reviews={REVIEWS}
                        reviewColor='#6E3CBC'
                        selectedColor='#6E3CBC'
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column'}}>
                        <Text>Cloth name</Text>
                        <Text>Size: small</Text>
                        <Text>₹300</Text>
                        <Text>Quantity:3</Text>
                    </View>
                    {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                    <Button    loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#6E3CBC',
                            borderRadius: 100,
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 30 }}
                        onPress={()=>console.log("BUY")}>
                            <Ionicons name='add' color={'#fff'} size={16} />
                        </Button>
                        <Text>3</Text>
                        <Button  loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#6E3CBC',
                            borderRadius: 50,
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 30 }}
                        onPress={()=>console.log("BUY")}>
                            <AntDesign name='minus' color={'#fff'} size={16} />
                        </Button>
                </View> */}
                   
                </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
        color: '#27ae60',
      },
      subtitleText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
        color: '#34495e',
      },
})