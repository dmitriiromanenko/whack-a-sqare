import React,{useEffect} from 'react';
import { StyleSheet, View, Dimensions,Button, Text, TouchableOpacity } from 'react-native'
const DeviceHeight = Dimensions.get('window').height

import { useSelector, useDispatch } from 'react-redux'
import { setScore, setIsGameOver, setLives } from '../redux/actions.js'
import RNExitApp from 'react-native-exit-app';
import { BackHandler } from 'react-native';


export const ExitRestart = ({ navigation}) => { 
    const {isGameOver, score, lives} = useSelector(state => state.useReducer)
    const dispatch = useDispatch()


    const backAction = () => {
        BackHandler.exitApp() 

    }

    const restartGame = () =>{
        dispatch(setScore(0))
        dispatch(setIsGameOver(false))
        dispatch(setLives(3))
        navigation.navigate('GridContainer')     
    }




    return(
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',}}>
            <View style={{flexDirection: 'row'}}>             
                <View> 
                    <View  style={{width: DeviceHeight*0.15, height: DeviceHeight*0.15}}/>
                    <View  style={{width: DeviceHeight*0.15, height: DeviceHeight*0.15}}/>
                    <View style={{opacity:0.6, width: DeviceHeight*0.15, height: DeviceHeight*0.15,justifyContent: 'center', alignItems: 'center'}}>
                        <Text onPress={()=>backAction()} style={{fontSize: DeviceHeight*0.025, fontWeight:'bold',color: 'blue', opacity: 0.6}}>Exit</Text>
                    </View>
                </View>
                <View> 
                    <View  style={{opacity:0.6, width: DeviceHeight*0.15, height: DeviceHeight*0.15}}/>
                    <View style={{opacity:0.6, width: DeviceHeight*0.15, height: DeviceHeight*0.15,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{textAlign: 'center',fontSize:DeviceHeight*0.025, fontWeight:'bold', color: 'red', opacity: 0.6}}>Game Over</Text>
                        <Text style={{textAlign: 'center',fontSize:DeviceHeight*0.015, fontWeight:'bold', color: 'red', opacity: 0.6}}>Your score is {score}</Text>
                    </View>
                    <View  style={{opacity:0.6, width: DeviceHeight*0.15, height: DeviceHeight*0.15}}/>
                </View>
                <View > 
                    <TouchableOpacity style={{opacity:0.6, width: DeviceHeight*0.15, height: DeviceHeight*0.15,justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() =>restartGame()}><Text style={{textAlign: 'center', fontSize: DeviceHeight*0.025, fontWeight:'bold',color: 'blue', opacity: 0.6}}>Restart</Text></TouchableOpacity>
                    </TouchableOpacity>
                </View>         
            </View>  
        </View> 

    )

}

