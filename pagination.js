function paginationData(data, rows) {
  // Filtering logic here
     
  return data.slice(0, rows);;
}

module.exports = { paginationData };
