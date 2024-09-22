// Add google gemeni api after that the project will work

let prompt = document.querySelector(".input");
let btn = document.querySelector(".btn");
let container = document.querySelector(".middle");
let userMessage = null;
let apiUrl =
 

// Function to create a chat box
function createChatBox(html, className) {
  let div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = html;
  return div;
}

// Function to call API and handle the response
async function getApiResponse(aiChatBox) {
  let textElement = aiChatBox.querySelector(".text");
  try {
    let response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: userMessage }] }],
      }),
    });

    // Check for response success
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data); // Debug: Check full API response structure

    // Accessing the correct response structure based on your screenshot
    let apiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (apiResponse) {
      textElement.innerText = apiResponse; // Display AI response
    } else {
      textElement.innerText = "No response from API.";
    }
  } catch (error) {
    console.error("Error fetching API response:", error);
    textElement.innerText = "Failed to fetch API response.";
  } finally {
    // Hide loading spinner
    aiChatBox.querySelector(".loading").style.display = "none";
  }
}

// Function to show loading spinner for AI response
function showLoading() {
  let html = `<div
        class="ai mt-5 w-[70%] text-black text-2xl flex items-start justify-end border border-black rounded-r-3xl rounded-tl-3xl py-5 bg-gray-300"
        >
        <img
          class="ml-2 w-12 h-12 rounded-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eaZ79mc8I7PUH8h70t4BvuolBeEwmeE75w&s"
          alt="Assistant Image"
        />
        <p class="text px-8">
          <img class="loading h-8 w-8" src="loading gif.gif" alt="Loading Image">
        </p>
      </div>`;
  let aiChatBox = createChatBox(html, "ai");
  container.appendChild(aiChatBox); // Add AI chat box to the container
  getApiResponse(aiChatBox); // Fetch API response
}

// Handle user input and show user's message
btn.addEventListener("click", () => {
  userMessage = prompt.value;
  if (!userMessage) return;

  // Create the user message box
  let html = ` <div
        class="user mt-5 w-[70%] text-black text-2xl flex items-start justify-end border border-black rounded-l-3xl rounded-tr-3xl py-5 bg-gray-500"
        >
         <img
        class="ml-2 w-12 h-12"
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
        alt="User Icon"
      />
        <p class="text px-8">${userMessage}</p>
      </div>`;
  let userChatBox = createChatBox(html, "user");
  container.appendChild(userChatBox); // Display user message in chat box

  prompt.value = ""; // Clear input field
  setTimeout(showLoading, 500); // Show AI response after 500ms
});
