import { SET_FILE, RESET_FILE } from './Type'

export const setFile = (data: any) => {
  return {
    type: SET_FILE,
    payload: data,
  }
}

export const resetFile = () => {
  return {
    type: RESET_FILE,
  }
}
