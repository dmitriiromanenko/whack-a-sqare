import React,{useEffect} from 'react';
import { StyleSheet, View, Dimensions,Button, Text, TouchableOpacity } from 'react-native'
const DeviceHeight = Dimensions.get('window').height

import { useSelector, useDispatch } from 'react-redux'
import { setScore, setIsGameOver, setLives } from '../redux/actions.js'
import RNExitApp from 'react-native-exit-app';
import { BackHandler } from 'react-native';


export const Home = ({ navigation}) => { 
    const {isGameOver, score, lives} = useSelector(state => state.useReducer)
    const dispatch = useDispatch()


    const startGame = () =>{
        dispatch(setScore(0))
        dispatch(setIsGameOver(false))
        dispatch(setLives(3))
        navigation.navigate('GridContainer')     
    }




    return(
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',}}>
            <View style={{flexDirection: 'row'}}>             
                <View> 
                    <View style={{backgroundColor: 'pink', opacity: 0.6, justifyContent: 'center', alignItems: 'center',width: DeviceHeight*0.45, height: DeviceHeight*0.15}}>
                        <Text style={{ textAlign: 'center',fontSize:DeviceHeight*0.045, fontWeight:'bold', color: 'red'}}>WHACK A SQARE</Text>
                    </View>
                   <View style={{width: DeviceHeight*0.45, height: DeviceHeight*0.15,justifyContent: 'center', alignItems: 'center'}}>
                        <Text onPress={()=>startGame()} style={{textAlign: 'center',fontSize:DeviceHeight*0.025, fontWeight:'bold', color: 'red'}}>Start Game</Text>
                    </View>
                </View>
                <View > 
 
                </View>         
            </View>  
        </View> 

    )

}

