const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Choose the desired port number

app.get('/api/data', (req, res) => {
  const { FCName, CPopulation, SCName, Pagination } = req.query;  
  if (!FCName && !CPopulation && !SCName && !Pagination)  {
// Make an API request
axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
		//console.log(response.data);
      const responseData = response.data;
      
      // Parse the response data as JSON
      const parsedData = JSON.parse(JSON.stringify(responseData));

      // You can now work with the parsed data as a JavaScript object or variable
      console.log(parsedData);

      res.json(parsedData);// Send the API response back to the client
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
} else {
// Handle the case where the parameters are provided
    // Add your logic here to filter the data based on the provided parameters
    // Make the appropriate API request and send the filtered data back to the client
}
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});