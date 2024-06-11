const appReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANGAUGE': {
            return {
                ...state,
                language: action.payload,
            };
        }
    }
};

export default appReducer;
