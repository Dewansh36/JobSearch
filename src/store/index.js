import React from "react"
import { configure } from "mobx"
import { useLocalObservable } from "mobx-react-lite"
import LikeStore from "./likeStore"

configure({ enforceActions: "observed" })

const storeContext = React.createContext(null);

export const StoreProvider = (props) => {
    const { children } = props;

    const store = useLocalObservable(() => ({
        likeStore: LikeStore
    }));

    return <storeContext.Provider value={store}>{children}</storeContext.Provider>

}

export const useGlobalStore = () => React.useContext(storeContext);