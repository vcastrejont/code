const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    activeStatus: true
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'ACTIVE_STATUS':
            return {
                ...state,
                activeStatus: action.activeStatus
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType
            };
        default:
            return state;
    }
}
