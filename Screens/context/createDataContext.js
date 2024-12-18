
import React, { useReducer } from 'react';

export default (reducer, actions, initialValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialValue)

        //actions == {addPost: dispatch => return () => {}, 
        // editPost: dispatch => return () => {} 
        // }
        const boundActions = {}
        for (let key in actions) {
            // key == addPost 
            //boundActions["addPost"] = dispatch => return () => {}
            boundActions[key] = actions[key](dispatch);
        }

        return (
        <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
        );
    };

    return { Context, Provider };
}