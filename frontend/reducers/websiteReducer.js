const initialStore = {
    showModal: false,
}

export default function reducer(store = initialStore, action) {
    const {type, payload} = action 
    switch(type) {
        case UPDATE_MODAL: {
            let showModal = payload ? false : true 
            return {showModal}
        }
        default: {
            return {...store}
        }
    }
}

export const UPDATE_MODAL = 'UPDATE_MODAL'

export const updateModal = (showModal) => {
    return {
        type: UPDATE_MODAL, 
        payload: showModal 
    }
}
