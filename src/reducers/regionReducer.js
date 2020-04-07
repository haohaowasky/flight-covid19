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
        case 'DERISK_REGION':
            let deRiskRegion = state.filter(region => region.id === action.id)
            deRiskRegion[0].status = "risk: low"
            console.log("down risk deducer called", deRiskRegion)
            return [...state, deRiskRegion]
        default:
            return state
    }
}