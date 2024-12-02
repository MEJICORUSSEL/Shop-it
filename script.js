let basket = []; // Array to store basket items

// Open the popup with product details
function openPopup(title, price, description, imageUrl) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-price').innerText = price;
  document.getElementById('popup-description').innerText = description;
  document.getElementById('popup-image').src = imageUrl;

  // Show the popup
  document.getElementById('popup').style.display = 'flex';
}


// Close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Add product to basket
function addToBasket() {
  const title = document.getElementById('popup-title').innerText;
  const price = document.getElementById('popup-price').innerText;
  const description = document.getElementById('popup-description').innerText;

  // Add the product to the basket array
  basket.push({ title, price, description });

  // Update basket count
  document.getElementById('basket-count').innerText = basket.length;

  // Close popup
  closePopup();
}

// Show the basket
function showBasket() {
  const basketPopup = document.getElementById('basket-popup');
  const basketItems = document.getElementById('basket-items');

  // Clear current basket items
  basketItems.innerHTML = '';

  // Populate basket items
  basket.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${item.title}</strong><br>
      <em>${item.price}</em><br> 
        <button class="btn remove-btn" onclick="removeFromBasket(${index})">Remove</button>
    `;
    basketItems.appendChild(li);
  });

  // Show the basket popup
  basketPopup.style.display = 'flex';
}

// Remove product from basket
function removeFromBasket(index) {
  basket.splice(index, 1); // Remove the product at the specified index

  // Update basket count
  document.getElementById('basket-count').innerText = basket.length;

  // Refresh the basket view
  showBasket();
}

// Close the basket
function closeBasket() {
  document.getElementById('basket-popup').style.display = 'none';
}
let users = []; // Array to store registered users

// Open the form
function openForm(formId) {
  document.getElementById(formId).style.display = 'flex';
}

// Close the form
function closeForm(formId) {
  document.getElementById(formId).style.display = 'none';
}

// Register a user
function registerUser() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    alert('Username already exists. Please choose another.');
    return;
  }

  // Add new user to the array
  users.push({ username, password });
  alert('Sign up successful! You can now log in.');
  closeForm('signup-form');
}

// Log in a user
function loginUser() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Validate credentials
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert(`Welcome back, ${username}!`);
    closeForm('login-form');
    // Implement further functionality (e.g., show user-specific content)
  } else {
    alert('Invalid username or password.');
  }
}
let userProfile = {
  username: "", // Default example data
  age: 25,
  location: "",
  dob: "1999-01-01",
  bio: "  "
};

// Open the profile modal and pre-fill the form with user info
function openProfileModal() {
  document.getElementById('profile-username').value = userProfile.username;
  document.getElementById('profile-age').value = userProfile.age;
  document.getElementById('profile-location').value = userProfile.location;
  document.getElementById('profile-dob').value = userProfile.dob;
  document.getElementById('profile-bio').value = userProfile.bio;

  document.getElementById('profile-modal').style.display = 'flex';
}

// Close the profile modal
function closeProfileModal() {
  document.getElementById('profile-modal').style.display = 'none';
}

// Save profile changes
function saveProfile() {
  const username = document.getElementById('profile-username').value;
  const age = document.getElementById('profile-age').value;
  const location = document.getElementById('profile-location').value;
  const dob = document.getElementById('profile-dob').value;
  const bio = document.getElementById('profile-bio').value;

  // Update the user profile data
  userProfile = { username, age, location, dob, bio };

  alert('Profile updated successfully!');
  closeProfileModal();
}

// Get references to buttons and the header
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const authButtons = document.querySelector(".auth-buttons");
const header = document.querySelector(".com");

// Create a "Log Out" button
const logoutButton = document.createElement("button");
logoutButton.textContent = "Log Out";
logoutButton.style.padding = "0.5rem 1rem";
logoutButton.style.margin = "0 0.7rem";
logoutButton.style.border = "none";
logoutButton.style.borderRadius = "5px";
logoutButton.style.cursor = "pointer";
logoutButton.style.backgroundColor = "rgb(225, 171, 7)";
logoutButton.style.display = "none"; // Initially hidden
logoutButton.addEventListener("click", logoutUser);

// Append "Log Out" button to the header
header.appendChild(logoutButton);

// Mock function to simulate login
function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    alert("Login successful!");
    toggleAuthState(true); // Switch to logged-in state
    closeForm("login-form"); // Close login form
  } else {
    alert("Please fill in both fields.");
  }
}

// Mock function to simulate logout
function logoutUser() {
  alert("Logged out successfully!");
  toggleAuthState(false); // Switch to logged-out state
}

// Function to toggle UI elements based on login state
function toggleAuthState(isLoggedIn) {
  if (isLoggedIn) {
    authButtons.style.display = "none"; // Hide "Log In" and "Sign Up" buttons
    logoutButton.style.display = "inline-block"; // Show "Log Out" button
  } else {
    authButtons.style.display = "flex"; // Show "Log In" and "Sign Up" buttons
    logoutButton.style.display = "none"; // Hide "Log Out" button
  }
}

// Function to open forms
function openForm(formId) {
  const form = document.getElementById(formId);
  form.style.display = "flex"; // Show the form
}

// Function to close forms
function closeForm(formId) {
  const form = document.getElementById(formId);
  form.style.display = "none"; // Hide the form
}


