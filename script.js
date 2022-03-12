const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/assets?order_by=pk&order_direction=desc&limit=20&include_orders=true', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));