import {createStore,applyMiddleware,compose} from 'redux';

import thunk from 'redux-thunk';   //使action创建函数可以返回一个function代替一个action对象

import reducer from '../reducers'


const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)


// const createStoreWithMiddleware = compose(
//     applyMiddleware(
//         thunk
//     ),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore)


export default function configureStore(initialStore){
  const store = createStoreWithMiddleware(reducer,initialStore)

  if(module.hot){
    module.hot.accept('../reducers',() => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
