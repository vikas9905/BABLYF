/*eslint-disable*/
import {View,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {AirbnbRating,Image,Skeleton,Text} from '@rneui/themed';
import {ActivityIndicator,Button} from '@react-native-material/core';
import {Environment} from '../../environment';
export const ListProduct = ({navigation,item}) =>{
    const {width} = Dimensions.get('window');
    const ImageWidth = ((width-30)/2)
    const base_url =Environment.BASE_URL;
    const product_url = 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg';
    // console.log(item)
    return (
        <View style={{justifyContent:'center',flex:1,paddingLeft:15,marginBottom:15}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('product')}}>
                <View style={{width:ImageWidth-10,height:ImageWidth-15,flexDirection:'row',justifyContent:'center',marginBottom:1,alignItems:'center',backgroundColor:'pink'}}>
                  <Image source={{uri:product_url}} style={{width:ImageWidth-10,height:ImageWidth-10}}
                    PlaceholderContent={<Skeleton animation="wave" width={ImageWidth-10} height={ImageWidth-10} />}
                  />
                </View>
              </TouchableOpacity>
              <View style={{marginBottom:2}}>
                <AirbnbRating
                  type='star'
                  reviewSize={0}
                  isDisabled={true}
                  defaultRating={3}
                  size={10}
                  starContainerStyle ={{marginTop:-15,justifyContent:'flex-end'}}
                  selectedColor='#6E3CBC'
                />
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                <Text style={{color:'#6E3CBC', fontSize:14}}> 44% Off</Text>
                <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize:14}}>1999</Text>
                <Text style={{fontSize:16,fontWeight:'bold'}}>₹999</Text>
              </View>
        </View>
    )
}