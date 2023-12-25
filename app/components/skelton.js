/*eslint-disable*/
import { Skeleton } from '@rneui/themed';
import {View} from 'react-native'
import Container from '../container/container';
export const SkeletonComp = ({type,width,height}) =>{
    return (

        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
            <Skeleton animation="wave" width={width} height={height} />
            
            <Skeleton animation="wave" width={width} height={height} />
        </View>
    )
}