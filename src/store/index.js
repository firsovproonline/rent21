import { createStore } from 'vuex'
import {treeModule} from '@/store/treeModule'
import {rentModule} from '@/store/rentModule'
export default createStore({
  state: {
  },
  modules: {
    tree:treeModule,
    rent:rentModule
  }
})
