import * as api from '../lib/api'
export const ADD_NOTES = 'ADD_NOTES'
export const FETCH_SINGLE = 'FETCH_SINGLE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const LOAD_STORED = 'LOAD_STORED'
export const DELETE_NOTE = 'DELETE_NOTE'
export const SOUND_IS_LOADING = 'SOUND_IS_LOADING'
export const SOUND_LOADED = 'SOUND_LOADED'
export function addNote(newNote) {
  return {
    type: ADD_NOTES,
    payload: newNote
  }
}

export function updateNote(updatedNote) {
  return {
    type: UPDATE_NOTE,
    payload: updatedNote
  }
}

export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    payload: noteId
  }
}

export function getSound(text) {
  return (dispatch, getState) => {
    dispatch({type: SOUND_IS_LOADING})
    return api.getSound(text)
        .then(
            result => {
                dispatch({
                    type: SOUND_LOADED,
                    result
                })
            }
        )
  }
}

