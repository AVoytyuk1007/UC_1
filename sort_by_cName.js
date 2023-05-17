function sortCNameData(data, sortOrder) {
  // Sorting logic here
   const order = sortOrder.toLowerCase() === 'ascend' ? 1 : -1;
   
     data.sort((a, b) => {
    const nameA = a.name?.common?.toLowerCase();
    const nameB = b.name?.common?.toLowerCase();
    
    if (nameA < nameB) {
      return -1 * order;
    }
    if (nameA > nameB) {
      return 1 * order;
    }
    return 0;
  });

  return data;
}

module.exports = { sortCNameData };