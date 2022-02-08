export const SET_SCORE = 'SET_SCORE'
export const SET_IS_GAME_OVER = 'SET_IS_GAME_OVER'
export const SET_LIVES = 'SET_LIVES'


export const setScore = score => dispatch =>{
    dispatch({
        type: SET_SCORE,
        payload: score,
        
    })
}

export const setIsGameOver = isGameOver => dispatch =>{
    dispatch({
        type: SET_IS_GAME_OVER,
        payload: isGameOver,
    })
}

export const setLives = lives => dispatch =>{
    dispatch({
        type: SET_LIVES,
        payload: lives,
    })
}