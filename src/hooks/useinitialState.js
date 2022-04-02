import {useState} from 'react';

const initialState = {
    serviceList: []
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const updateServiceList = (payload) => {
        const newState = {
            ...state,
            serviceList: payload
        };

        setState(newState);
    }

    return {state, updateServiceList};
};

export default useInitialState;