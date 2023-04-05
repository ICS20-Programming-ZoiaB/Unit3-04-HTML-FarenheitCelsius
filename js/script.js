// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

// Function
function temperatureCalculate() {

// Get user input
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

// Calculation
  let celsius = 5 / 9 * (fahrenheit - 32);
  let celsiusRounded = celsius.toFixed(1)

// Display results
  document.getElementById("results").innerHTML = "The temperature in Celsius is " + celsiusRounded + " degrees Celsius."
}