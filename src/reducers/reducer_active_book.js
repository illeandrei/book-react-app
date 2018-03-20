//State argument is not the whole application state, only
// the piece of state that this reducer is responsible for

export default function (state = null, action) {
    switch (action.type) {
        case 'SELECTED-BOOK' :
            return action.payload;
    }

    return state
}