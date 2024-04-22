/* 
		"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",


*/

/* async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

query({ "inputs": "Astronaut riding a horse" }).then(async (response) => {
    // Create object URL for the blob
    const imageURL = URL.createObjectURL(response);
    
    // Get the image element
    const imgElement = document.createElement('img');
    
    // Set the image source
    imgElement.src = imageURL;
    
    // Append the image to the body or any other container
    document.body.appendChild(imgElement);
});
 */

/* const API_TOKEN = "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";

// Preload the loading GIFs
const loadingGif = new Image();
const loadingGif2 = new Image();
loadingGif.src = "./git_image/Loading.gif";
loadingGif2.src = "./git_image/load3.gif";

// Get elements
const inputText = document.getElementById("input");
const genBtn = document.getElementById("gen-btn");
const imageContainer = document.getElementById("image-container");

async function query(input) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: "POST",
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate images.");
    }

    // Return image data directly
    return await response.blob();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Additional fetch request
async function additionalQuery(data) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate images.");
    }

    // Return image data directly
    return await response.blob();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Event listener for button click
genBtn.addEventListener("click", async () => {
  try {
    // Clear previous images
    imageContainer.innerHTML = "";

    // Generate and display 25 images in a 5x5 grid
    const imagePromises = [];
    for (let i = 0; i < 25; i++) {
      // Create a div to contain each image and loading indicator
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Append loading indicator to grid item
      const loadingIndicator = document.createElement("img");
      loadingIndicator.src = loadingGif.src;
      loadingIndicator.alt = "Loading...";
      gridItem.appendChild(loadingIndicator);

      // Append grid item to image container
      imageContainer.appendChild(gridItem);

      // Generate image data
      const imageData = await additionalQuery(inputText.value + "-" + i); // Append a unique identifier
      const imageURL = URL.createObjectURL(imageData);

      // Create and append image element
      const imgElement = document.createElement("img");
      imgElement.src = imageURL;
      imgElement.alt = `Generated image ${i + 1}`;

      // Replace loading indicator with generated image
      loadingIndicator.remove();
      gridItem.appendChild(imgElement);

      // Create download button
      const downloadBtn = document.createElement("a");
      downloadBtn.classList.add("button-33");
      downloadBtn.href = imageURL;
      downloadBtn.download = `generated_image_${i + 1}.jpg`;
      downloadBtn.textContent = "Download";

      // Append download button to grid item
      gridItem.appendChild(downloadBtn);
    }
  } catch (error) {
    alert(error.message);
  }
});

// Initial random image generation when the page loads
window.addEventListener("load", async () => {
  try {
    // Generate and display 20 random images in a grid
    const initialImagePromises = [];
    for (let i = 0; i < 20; i++) {
      // Create a div to contain each image and loading indicator
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Append loading indicator to grid item
      const loadingIndicator = document.createElement("img");
      loadingIndicator.src = loadingGif2.src;
      loadingIndicator.alt = "Loading...";
      gridItem.appendChild(loadingIndicator);

      // Generate image data
      const imageDataPromise = additionalQuery("random-" + i) // Pass a unique identifier
        .then((imageData) => {
          // Create and append image element
          const imageURL = URL.createObjectURL(imageData);
          const imgElement = document.createElement("img");
          imgElement.src = imageURL;
          imgElement.alt = `Generated image ${i + 1}`;
          gridItem.replaceChild(imgElement, loadingIndicator);

          // Create download button
          const downloadBtn = document.createElement("a");
          downloadBtn.classList.add("button-33");
          downloadBtn.href = imageURL;
          downloadBtn.download = `generated_image_${i + 1}.jpg`;
          downloadBtn.textContent = "Download";
          gridItem.appendChild(downloadBtn);
        })
        .catch((error) => {
          console.error(`Error generating image ${i + 1}:`, error);
          alert(`Error generating image ${i + 1}: ${error.message}`);
        });

      initialImagePromises.push(imageDataPromise);

      // Append grid item to image container
      imageContainer.appendChild(gridItem);
    }

    // Wait for all initial image generation promises to resolve
    await Promise.all(initialImagePromises);
  } catch (error) {
    console.error("Error generating initial random images:", error);
    alert("Error generating initial random images: " + error.message);
  }
});

// Add event listener to input field for 'keypress' event
inputText.addEventListener("keypress", function (e) {
  // Check if Enter key is pressed (key code 13)
  if (e.key === "Enter") {
    // Prevent default behavior of the Enter key (form submission)
    e.preventDefault();
    // Trigger a click event on the Generate Images button
    genBtn.click();
  }
});
 */



// 

const API_TOKEN = "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";

// Preload the loading GIFs
const loadingGif = new Image();
const loadingGif2 = new Image();
loadingGif.src = "./git_image/Loading.gif";
loadingGif2.src = "./git_image/load3.gif";

// Get elements
const inputText = document.getElementById("input");
const genBtn = document.getElementById("gen-btn");
const imageContainer = document.getElementById("image-container");

// Additional fetch request
async function additionalQuery(data) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate images. Please try again later.");
    }

    // Return image data directly
    return await response.blob();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Event listener for button click
genBtn.addEventListener("click", async () => {
  try {
    // Clear previous images
    imageContainer.innerHTML = "";

    // Generate and display 25 images in a 5x5 grid
    const imagePromises = [];
    for (let i = 0; i < 25; i++) {
      // Create a div to contain each image and loading indicator
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Append loading indicator to grid item
      const loadingIndicator = document.createElement("img");
      loadingIndicator.src = loadingGif.src;
      loadingIndicator.alt = "Loading...";
      gridItem.appendChild(loadingIndicator);

      // Append grid item to image container
      imageContainer.appendChild(gridItem);

      // Generate image data
      const imageData = await additionalQuery(inputText.value + "-" + i); // Append a unique identifier
      const imageURL = URL.createObjectURL(imageData);

      // Create and append image element
      const imgElement = document.createElement("img");
      imgElement.src = imageURL;
      imgElement.alt = `Generated image ${i + 1}`;

      // Replace loading indicator with generated image
      loadingIndicator.remove();
      gridItem.appendChild(imgElement);

      // Create download button
      const downloadBtn = document.createElement("a");
      downloadBtn.classList.add("button-33");
      downloadBtn.href = imageURL;
      downloadBtn.download = `generated_image_${i + 1}.jpg`;
      downloadBtn.textContent = "Download";

      // Append download button to grid item
      gridItem.appendChild(downloadBtn);
    }
  } catch (error) {
    alert(error.message);
  }
});

// Initial random image generation when the page loads
window.addEventListener("load", async () => {
  try {
    // Generate and display 20 random images in a grid
    const initialImagePromises = [];
    for (let i = 0; i < 20; i++) {
      // Create a div to contain each image and loading indicator
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Append loading indicator to grid item
      const loadingIndicator = document.createElement("img");
      loadingIndicator.src = loadingGif2.src;
      loadingIndicator.alt = "Loading...";
      gridItem.appendChild(loadingIndicator);
      const prompt = [
        "Robot playing the guitar",
        "Alien surfing on a pizza",
        "Cyborg gardening in space",
        "Octopus wearing a top hat",
        "Wizard cooking pancakes",
        "Vampire riding a skateboard",
        "Dinosaur driving a car",
        "Unicorn playing basketball",
        "Ninja riding a unicorn",
        "Zombie painting a rainbow",
        "Fairy riding a rocket",
        "Mermaid playing chess",
        "Pirate playing soccer",
        "Superhero knitting a scarf",
        "Ghost riding a bicycle",
        "Dragon reading a book",
        "Alien playing the saxophone",
        "Robot dancing in the rain",
        "Astronaut playing the harmonica",
        "Wizard juggling fireballs",
        "Ninja doing yoga on a mountain",
        "Pirate playing the accordion",
        "Robot walking a dog",
        "Alien fishing on a cloud",
        "Vampire knitting a sweater"
    ]
      // Generate image data
      const imageDataPromise = additionalQuery(`random-${prompt[i]}`) // Pass a unique identifier
        .then((imageData) => {
          // Create and append image element
          const imageURL = URL.createObjectURL(imageData);
          const imgElement = document.createElement("img");
          imgElement.src = imageURL;
          imgElement.alt = `Generated image ${i + 1}`;
          gridItem.replaceChild(imgElement, loadingIndicator);

          // Create download button
          const downloadBtn = document.createElement("a");
          downloadBtn.classList.add("button-33");
          downloadBtn.href = imageURL;
          downloadBtn.download = `generated_image_${i + 1}.jpg`;
          downloadBtn.textContent = "Download";
          gridItem.appendChild(downloadBtn);
        })
        .catch((error) => {
          console.error(`Error generating image ${i + 1}:`, error);
          alert(`Error generating image ${i + 1}: ${error.message}`);
        });

      initialImagePromises.push(imageDataPromise);

      // Append grid item to image container
      imageContainer.appendChild(gridItem);
    }

    // Wait for all initial image generation promises to resolve
    await Promise.all(initialImagePromises);
  } catch (error) {
    console.error("Error generating initial random images:", error);
    alert("Error generating initial random images: " + error.message);
  }
});

// Add event listener to input field for 'keypress' event
inputText.addEventListener("keypress", function (e) {
  // Check if Enter key is pressed (key code 13)
  if (e.key === "Enter") {
    // Prevent default behavior of the Enter key (form submission)
    e.preventDefault();
    // Trigger a click event on the Generate Images button
    genBtn.click();
  }
});
