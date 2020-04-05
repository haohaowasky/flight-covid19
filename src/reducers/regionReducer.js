import { v1 as uuid } from 'uuid';

export const regionReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_REGION':
            return [...state, {
                name: action.region.name,
                status:action.region.status,
                id: uuid()
            }]
        case 'REMOVE_REGION':
            return state.filter(region => region.id !== action.id)
        default:
            return state
    }
}