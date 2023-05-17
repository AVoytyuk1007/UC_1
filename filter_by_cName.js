function filterCNameData(data, CName) {
  // Filtering logic here
   
   const filteredData = data.filter(item => item.name?.common?.toLowerCase()?.includes(CName.toLowerCase()));
    
  return filteredData;
}

module.exports = { filterCNameData };
