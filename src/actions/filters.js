export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

export const activeStatus = (activeStatus) => {
  console.log(activeStatus);
  return{
    type: 'ACTIVE_STATUS',
    activeStatus
    }
};

export const sortBy = (sortType) => ({
    type: 'SORT_BY',
    sortType
});


export const searchByStatus = (sortType) => ({
    type: 'SORT_BY',
    sortType
});
