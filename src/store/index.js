import { createStore } from "redux";
import { rootReduser } from "./rootReduser";
import { devToolsEnhancer } from 'redux-devtools-extension'


export const store = createStore(rootReduser, devToolsEnhancer())