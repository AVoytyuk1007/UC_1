function filterCPopulationData(data, CPopulation) {
  // Filtering logic here
   
   const filteredData = data.filter(item => item.population && item.population < CPopulation*1000000);
    
  return filteredData;
}

module.exports = { filterCPopulationData };
