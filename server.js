const express = require('express');
const axios = require('axios');
const { filterCNameData } = require('./filter_by_cName'); // Importing the filter function from a separate file

const app = express();
const port = 3000;

// Endpoint that accepts four parameters
app.get('/api/data', async (req, res) => {
  const { FCName, CPopulation, SCName, Pagination } = req.query;

  try {
    // Fetch data from the public API
    const response = await axios.get('https://restcountries.com/v3.1/all');

    //let filteredData = JSON.parse(JSON.stringify(response.data)); // Initialize filteredData with the original response
	let filteredData = response.data;

   
    // Check if FCName parameter is present and call the filter_by_cName function if necessary
    if (FCName) {
       filteredData = filterCNameData(filteredData, FCName);
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