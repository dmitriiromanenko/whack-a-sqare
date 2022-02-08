import React, {useRef, useState, useEffect} from 'react'
import { StyleSheet, View, Dimensions,TouchableOpacity,TouchableWithoutFeedback, Animated, Text, Button } from 'react-native'
const DeviceHeight = Dimensions.get('window').height
import { useSelector, useDispatch } from 'react-redux'
import { setScore, setIsGameOver, setLives } from '../redux/actions.js'



export const GridContainer = ({navigation}) => { 
    //redux
    const {score, lives} = useSelector(state => state.useReducer)
    const dispatch = useDispatch()
    //arrays
    const componentArray = []

    //usestate
    const [index, setIndex] = useState(0)
    const [clickedOnce, setClickedOnce] = useState(true)
    //animation
    const fadeAnim = useRef(new Animated.Value(0)).current
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    
    function Counter() {
        useEffect(() => {
            const id = setInterval(() => {
                if(lives>0){
                    if(fadeAnim.__getValue()===0.6){
                        onTouch()

                    }else{
                        generateIndex()
                    }
                }
                else{
                    navigation.navigate('ExitRestart')
                }
            }, 700);
            return () => clearInterval(id);
        }, [lives]);

        return<Text style={{fontSize:DeviceHeight*0.03, fontWeight:'bold', color: 'blue', opacity: 0.4}}>Lives: {lives}</Text>

    }

    const fadeIn = () => {
    Animated.timing(fadeAnim, {
        toValue: 0.6,
        duration: 50,
        useNativeDriver: false
        }).start()        
    }


    const generateIndex = () => {
        setIndex(Math.floor(Math.random() * 9))
        fadeIn()
        setClickedOnce(true)
        
    }

    const onTouch = (i) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 50,
            useNativeDriver: false
            }).start(()=>{        
                if (index === i && clickedOnce===true) {
                    dispatch(setScore(score+1))
                }
                if(i === undefined && clickedOnce===true){
                    dispatch(setLives(lives-1)) 
                }
                
        })
        setClickedOnce(false)

    }

    for(let i=0;i<9;i++){
        if(i === index){
            componentArray.push(
                    <AnimatedTouchable  onPress={() => onTouch(i)} style={{opacity:fadeAnim,backgroundColor: 'pink', width: DeviceHeight*0.15, height: DeviceHeight*0.15, borderColor: 'black',}}/>
            )
        }
        else{
            componentArray.push(<TouchableOpacity  style={{width: DeviceHeight*0.15, height: DeviceHeight*0.15}}/>)
        }

    }
    


    return( 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: DeviceHeight*0.05}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ustifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
                    <Counter/>
                    <Text style={{fontSize:DeviceHeight*0.02, fontWeight:'bold', color: 'blue', opacity: 0.4}}>Score: {score}</Text>
                </View>
                <View style={{flexDirection: 'row' }}>             
                    <View> 
                        {componentArray[0]}
                        {componentArray[1]}
                        {componentArray[2]}
                    </View>
                    <View> 
                        {componentArray[3]}
                        {componentArray[4]}
                        {componentArray[5]}
                    </View>
                    <View> 
                        {componentArray[6]}
                        {componentArray[7]}
                        {componentArray[8]}

                    </View>             
                </View>  
            </View>           
        </View>
    )}


