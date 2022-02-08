import { SET_IS_GAME_OVER, SET_SCORE, SET_LIVES } from './actions';


const initialState = {
    score: 0,
    isGameOver: false,
    lives: 3,
}

function useReducer(state = initialState, action){
    switch(action.type){
        case SET_IS_GAME_OVER:
            return {...state, isGameOver: action.payload}
        case SET_SCORE:
            return {...state, score: action.payload}
        case SET_LIVES:
            return {...state, lives: action.payload}    
        default: 
            return state
    }
}

export default useReducer