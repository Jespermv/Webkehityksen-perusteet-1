// TODO: Define the interface User with username, email, and optional bio
interface User {
    username: string;
    email: string;
    bio?: string; // Optional property
}

// TODO: Create a user object using the defined interface. Add all properties
const userWithBio: User = {
    username: "john_doe",
    email: "john@example.com",
    bio: "Web developer and coffee lover."
};

// TODO: Create another user object using the defined interface. Don't add bio
const userWithoutBio: User = {
    username: "jane_doe",
    email: "jane@example.com",
};

// Function to display user information
function displayUserInfo(user: User): void {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    // TODO: console log all properties of a user separately. Example: console.log(user.email)
    if (user.bio) {
        console.log(`Bio: ${user.bio}`);
    }
}

// Display user information
console.log("User with Bio:");
displayUserInfo(userWithBio);
console.log("\nUser without Bio:");
displayUserInfo(userWithoutBio);