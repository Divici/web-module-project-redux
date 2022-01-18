
const initialState = {
    favorites: [{title: "Fav Movie", id:1}],
    displayFavorites: true
}

const favoritesReducer = (state= initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default favoritesReducer;