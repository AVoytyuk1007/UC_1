const express = require('express');
const axios = require('axios');

const { filterCNameData } = require('./filter_by_cName'); // Importing the filter function from a separate file
const { filterCPopulationData } = require('./filter_by_cPopulation'); // Importing the filter function from a separate file
const { sortCNameData } = require('./sort_by_cName'); // Importing the sorting function from a separate file
const { paginationData } = require('./pagination'); // Importing the pagination function from a separate file

const app = express();
const port = 3000;

app.disable('x-powered-by');
// Endpoint that accepts four parameters
app.get('/api/data', async (req, res) => {
  const { FCName, CPopulation, SCName, Pagination } = req.query;

  try {
    // Fetch data from the public API
    const response = await axios.get('https://restcountries.com/v3.1/all');

    let filteredData = response.data;// Initialize filteredData with the original response

   
    // Check if FCName parameter is present and call the filter_by_cName function if necessary
    if (FCName) {
       filteredData = filterCNameData(filteredData, FCName);
    }
	 
	 // Check if CPopulation parameter is present and call the filter_by_cPopulation function if necessary
    if (CPopulation) {
       filteredData = filterCPopulationData(filteredData, CPopulation);
    }
	
	 // Check if SCName parameter is present and call the sort_by_cName function if necessary
    if (SCName) {
       filteredData = sortCNameData(filteredData, SCName);
    }
	
	if (Pagination) {
       filteredData = paginationData(filteredData, Pagination);
    }

    res.json(filteredData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred while retrieving the data.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});