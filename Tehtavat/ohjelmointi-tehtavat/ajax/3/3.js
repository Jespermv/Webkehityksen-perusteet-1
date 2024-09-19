document.getElementById("getRequest").addEventListener("click", fetchGet);
document.getElementById("postRequest").addEventListener("click", fetchPost);
document.getElementById("putRequest").addEventListener("click", fetchPut);
document.getElementById("deleteRequest").addEventListener("click", fetchDelete);

async function fetchGet() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23"); // Non-existent URL
    if (!response.ok) {
      throw new Error(`GET Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log("GET Data:", data);
  } catch (error) {
    console.error("GET Request Failed:", error.message);
  }
}

async function fetchPost() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Mikke", job: "Developer" }),
    });
    if (!response.ok) {
      throw new Error(`POST Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log("POST Data:", data);
  } catch (error) {
    console.error("POST Request Failed:", error.message);
  }
}

async function fetchPut() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Mikke", job: "Developer" }),
    });
    if (!response.ok) {
      throw new Error(`PUT Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log("PUT Data:", data);
  } catch (error) {
    console.error("PUT Request Failed:", error.message);
  }
}

async function fetchDelete() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23", {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(
        `DELETE Error: ${response.status} ${response.statusText}`
      );
    }
    console.log("DELETE Request successful");
  } catch (error) {
    console.error("DELETE Request Failed:", error.message);
  }
}
