async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Request failed with status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}

document
  .getElementById("postUser")
  .addEventListener("click", async function () {
    try {
      const user = {
        name: "Mikke Orava",
        job: "Developer",
      };

      const url = "https://reqres.in/api/users";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const userData = await fetchData(url, options);
      console.log("User Data:", userData);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  });
