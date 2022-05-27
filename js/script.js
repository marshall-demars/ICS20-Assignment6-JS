// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment6-JS", {
    scope: "/ICS20-Assignment6-JS/",
  });
}

/**
<<<<<<< HEAD
 * Get API info.
*/
const getQuote = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress);
    const jsonData = await result.json();
    console.log(jsonData);
    const quote = jsonData.sentence;
    const character = jsonData.character.name;
    const house = jsonData.character.house.name;
    document.getElementById("game-of-thrones").innerHTML =
      character + ": " + quote + " " + house;
  } catch (err) {
    console.log(err);
    document.getElementById("game-of-thrones").innerHTML =
      "Error fetching quotes.";
  }
};

getQuote("https://api.gameofthronesquotes.xyz/v1/random");
