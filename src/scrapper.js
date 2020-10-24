const config = require("../config/config.json");
const axios = require("axios");

const url = config.website.url;

function scrapper() {
    
    const getData = async url => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    getData(url);
}

module.exports = scrapper