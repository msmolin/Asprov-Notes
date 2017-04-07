import {combineReducers} from 'redux'
import NotesReducer from './reducer_notes'
import CurrentNoteReducer from './reducer_current'
import ApiReducer from './reducer_api'
const rootReducer = combineReducers({
    allNotes: NotesReducer,
    currentNote: CurrentNoteReducer,
    api: ApiReducer,
})

export default rootReducer
