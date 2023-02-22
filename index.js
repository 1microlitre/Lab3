//Create a function called validateForm that takes no parameters
function validateForm (){

    //Inside the validateForm function, get the value of the username, email, and password input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //username should only contain letters and numbers
    const usernameConditions = /^[a-zA-Z0-9]+$/;

    //Set-up for typical email formatting that includes value@value2.value3
    const emailConditions = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //If else statements | if value given is empty OR doesn't pass the given conditions, outputs "Form submission failed"
    if (username.trim() === '' || !usernameConditions.test(username)) {
        console.log('Form submission failed');
        return;
    }

    if (email.trim() === '' || !emailConditions.test(email)) {
        console.log('Form submission failed');
        return;
    }

    //Password must be at least 8 characters long
    if (password.trim() === '' || password.length < 8) {
        console.log('Form submission failed');
        return;
    }

    else {
      console.log('Form submitted successfully');
    }
}

//Declare an array products that contains at least 10 products. Each product should be a string that represents the name of the product
const products = [
    'Tablet',
    'Phone',
    'Television',
    'Headset',
    'Monitor',
    'Speaker',
    'Keyboard',
    'Mouse',
    'Microphone',
    'Laptop'
];

//Use a loop to display the list of products to the user. Each product should be displayed in a list item (<li>) element. The list should be displayed in an unordered list (<ul>) element
const productList = document.getElementById('product-list');
for (let i=0; i<products.length; i++){
    const product = products[i];
    const listItem = document.createElement('li');
    listItem.textContent = product;
    productList.appendChild(listItem);
}

//Create a function searchProducts that takes a string parameter query and returns an array of products that match the query. The function should search for products that contain the query in their name, and should be case-insensitive
function searchProducts(query){
    return products.filter(product => product.toLowerCase().includes(query.toLowerCase()));

}

//Create an input field on the web page that allows the user to enter a search query. Use an event listener to call the searchProducts function whenever the user types in the input field
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {

    //The filtered list should only include the products that match the search query
    const query = searchInput.value;
    const filteredProducts = searchProducts(query);
    productList.innerHTML = '';
    
    //Use another loop to display the filtered list of products to the user
    for (let i=0; i<filteredProducts.length; i++){
        const product = filteredProducts[i];
        const listItem = document.createElement('li');
        listItem.textContent = product;
        productList.appendChild(listItem);
    }
});
