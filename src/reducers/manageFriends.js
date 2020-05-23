export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
            break;
        case "REMOVE_FRIEND":
            const hasID = (element) => element.id == action.id
            const friendIndex = state.friends.findIndex(hasID)
            return {friends: [...state.friends.slice(0, friendIndex), ...state.friends.slice(friendIndex + 1, state.friends.length)]}
            break;
        default:
            return state
            break;
    }
}
