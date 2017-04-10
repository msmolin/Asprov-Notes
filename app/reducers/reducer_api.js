/**
 * Created by denissamohvalov on 07.04.17.
 */
import {SOUND_IS_LOADING, SOUND_LOADED} from '../actions'

const initialState = {
    isLoading: false,
    sound: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SOUND_IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case SOUND_LOADED:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}