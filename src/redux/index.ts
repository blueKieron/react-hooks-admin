import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";

import global from "./modules/global/reducer";

//创建reducer 拆分reducer
const reducer = combineReducers({
	global
});

//redux持久化配置
const persistConfig = {
	key: "redux-state",
	storage: storage
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

//开启redux-devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//使用redux中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

//创建store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares));

//创建持久化store
const persistor = persistStore(store);

export { store, persistor };
