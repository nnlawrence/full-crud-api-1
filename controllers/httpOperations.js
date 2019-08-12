const axios = require('axios');

const getSwapiCharacters = (req, res) => {
    const {page} = req.params;
    console.log(req.params)
    let swapiPromise = axios.get(`https://swapi.co/api/people/?page=${page}`);
    swapiPromise.then(response => {
        res.status(200).send(response.data.results)
    })
    .catch(error => {
        res.status(500).send(error);
    })
};

module.exports = {
    getSwapiCharacters
}