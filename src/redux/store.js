import { createStore } from 'redux';
import root from './root-reducer'

const store = createStore(root);

export default store