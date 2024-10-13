// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // Step 4: Fetch Data Using try-catch
    try {
        // Try to fetch the data
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // Step 6: Create and Append User List
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem);    // Append the <li> to userList
        });
        
        dataContainer.appendChild(userList); // Append userList to dataContainer
        
    } catch (error) {
        // Step 7: Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Indicate an error occurred
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
