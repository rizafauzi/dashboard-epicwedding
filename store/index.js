import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
// import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from "./reducers";

const enhancers = composeWithDevTools(
  applyMiddleware(thunk)
);

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(reducers, enhancers);
  } else {
    const persistConfig = {
      key: "nextjs",
      // whitelist: ["counter"],
      storage, 
    };
    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = createStore(
      persistedReducer,
      enhancers
    );

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
    return store;
  }
};


export const wrapper = createWrapper(makeStore, { debug: true });


// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }