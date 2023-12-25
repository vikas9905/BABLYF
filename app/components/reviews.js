/*eslint-disable*/
import {View,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {AirbnbRating,Image,Skeleton,Text} from '@rneui/themed';
import {ActivityIndicator,Button} from '@react-native-material/core';
import {Environment} from '../../environment';
import Container from '../container/container';
import { REVIEWS } from '../utils/constants';
export const Reiviews = ({navigation,item}) =>{
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
                  {/* <View>
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
                    </View> */}
                </View>
              <View style={{flexDirection:'column'}}>
                    <Text>Review content</Text>
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