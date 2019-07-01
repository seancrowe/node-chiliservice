ChiliService
=========

A small library that allows you to easily make web service calls to your CHILI Server

## Installation

  `npm install soap-chiliservice`

## Usage

    let ChiliSerivce = require('soap-chiliservice');

    let chiliService = new ChiliService("http://www.crowe.chili/5.5/main.asmx?wsdl");
    
    async function Main() {
        try {
            let apiKey = (await cs.GenerateApiKeyAsync("admin", "admin", "admin")).key;

            console.log(apiKey);
        }
        catch (error)
        {
            console.log(error);
        }
    }
  
  Output should be an apiKey or an error if you had the wrong password of username


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
