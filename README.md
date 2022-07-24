# CL-FEWD2-FInalproject
Final project for Front end web development course 2 at Code Louisville

*** There is one deviation from my original project submission. Instead of doing a "days until" feature, I will be doing applying regular expressions to the second and third inputs.

Project Description:

Three requirements included the project:
1. Retrieve data from an external API and display data in your app (such as with fetch() or AJAX)
    - using fetch() to call the OpenWeather API
2. Build a conversion tool that converts user input to another type and display it
    - Celsius to Fahreneheit Converter
    - Km/h to MPH Converter
3. Implement a regular expression (regex) to ensure a field is always stored in the same format **APPROVED BY DON HANSEN**
    - used regex to ensure that input in the two converters were only numbers up to 2 decimal places since the values returned are rounded to two decimal places

How to run project:
The project will default to the weather in Louisville with a Louisville associated background. To run the project, simply type a city name into the search bar in the first box. This will give the weather for that city and change the background to something related to that city. The weather information is returned in metric values which was done on purpose to incorporate the conversion tools. 
In the second box, type any Celsius tempurature up to two decimal places, click the thermometer button, and it will return that value in degrees Fahrenheit. 
In the last box, type any wind speed in kh/m, click the speed gauge button, and it will return that speed in Miles per Hour. 
