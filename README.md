# Lab #3 Instructions:

You are tasked with creating a JavaScript program that will implement a basic form validation for a user registration form.

- Create a function called validateForm that takes no parameters. 
- Inside the validateForm function, get the value of the username, email, and password input fields.
- Use if-else statements to validate each input field. The validation rules are as follows:
- The username field must not be empty, and must contain only letters and numbers.
- The email field mustnot be empty, and must contain '@' character. (Bonus points for REGEX validation)
- The password field must not be empty, and must be at least 8 characters long.
- If all input fields are valid, console.log a message to the user saying "Form submitted successfully". If any input field is invalid, console.log a message to the user saying "Form submission failed".


You are tasked with creating a JavaScript program that will allow the user to search and filter a list of products. 

- Declare an array products that contains at least 10 products. Each product should be a string that represents the name of the product.
- Use a loop to display the list of products to the user. Each product should be displayed in a list item (<li>) element. The list should be displayed in an unordered list (<ul>) element.
- Create a function searchProducts that takes a string parameter query and returns an array of products that match the query. The function should search for products that contain the query in their name, and should be case-insensitive.
- Create an input field on the web page that allows the user to enter a search query. Use an event listener to call the searchProducts function whenever the user types in the input field.
- Use another loop to display the filtered list of products to the user. The filtered list should only include the products that match the search query.
