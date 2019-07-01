ChiliService
=========

A small library that allows you to easily make web service calls to your CHILI Server

This module was developed for servers running CHILI Publisher >5.4

It will work with old CHILI installs, but some functions (like DocumentProcessServerSide) will cause a "Error! Function does not exist" error.

## Installation

  `npm install chiliservice`

## Usage

    let cs = require('chiliservice');

    let connector = new cs.ChiliConnector("http://www.crowe.chili/5.5/main.asmx?wsdl");
    
    async function Main() {
        try {
            let apiKey = (await connector.GenerateApiKeyAsync("admin", "admin", "admin")).key;

            console.log(apiKey);
        }
        catch (error)
        {
            console.log(error);
        }
    }
  
  Output should be an apiKey or an error if you had the wrong info


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
