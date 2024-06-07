import {createStore} from "redux"
import userReduser from "./Redux/Reducer"


const store = createStore(userReduser,window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION)

export default store