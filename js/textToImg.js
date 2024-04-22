/* const API_TOKEN = "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";

// Get elements
const inputText = document.getElementById('input');
const genBtn = document.getElementById('gen-btn');
const imageContainer = document.getElementById('image-container');

async function query(input) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                headers: { Authorization: `Bearer ${API_TOKEN}` },
                method: "POST",
                body: JSON.stringify({"inputs":input}),
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
genBtn.addEventListener('click', async () => {
    try {
        // Clear previous images
        imageContainer.innerHTML = '';

        // Generate and display 25 images in a 5x5 grid
        for (let i = 0; i < 25; i++) {
            // Display loading indicator
            const loadingIndicator = document.createElement('img');
            loadingIndicator.src = "./git_image/Loading.gif";
            loadingIndicator.alt = 'Loading...';

            // Create a div to contain each image and loading indicator
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            // Append loading indicator to grid item
            gridItem.appendChild(loadingIndicator);

            // Append grid item to image container
            imageContainer.appendChild(gridItem);

            // Generate image data
            const imageData = await query(inputText.value + '-' + i); // Append a unique identifier
            const imageURL = URL.createObjectURL(imageData);

            // Create and append image element
            const imgElement = document.createElement('img');
            imgElement.src = imageURL;
            imgElement.alt = `Generated image ${i+1}`;

            // Replace loading indicator with generated image
            loadingIndicator.remove();
            gridItem.appendChild(imgElement);

            // Create download button
            const downloadBtn = document.createElement('a');
            downloadBtn.classList.add('button-33');
            downloadBtn.href = imageURL;
            downloadBtn.download = `generated_image_${i+1}.jpg`;
            downloadBtn.textContent = 'Download';

            // Append download button to grid item
            gridItem.appendChild(downloadBtn);
        }
    } catch (error) {
        alert(error.message);
    }
});
 */

// ---------------------

const API_TOKEN = "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";

// Preload the loading GIF
const loadingGif = new Image();
const loadingGif2 = new Image();
loadingGif.src = "./git_image/Loading.gif";
loadingGif2.src = "./git_image/load3.gif";

// Get elements
const inputText = document.getElementById("input");
const genBtn = document.getElementById("gen-btn");
const imageContainer = document.getElementById("image-container");

/* 
		"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
*/

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

      // Generate image data (don't await, start all requests simultaneously)
      const imageDataPromise = query(inputText.value + "-" + i)
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

      imagePromises.push(imageDataPromise);

      // Append grid item to image container
      imageContainer.appendChild(gridItem);
    }

    // Wait for all image generation promises to resolve
    await Promise.all(imagePromises);
  } catch (error) {
    alert(error.message);
  }
});

// Initial random image generation when the page loads
//  window.addEventListener('load', async () => {
//     try {
//         // Generate and display 10 random images in a grid
//         const initialImagePromises = [];
//         for (let i = 0; i < 10; i++) {
//             // Create a div to contain each image and loading indicator
//             const gridItem = document.createElement('div');
//             gridItem.classList.add('grid-item');

//             // Append loading indicator to grid item
//             const loadingIndicator = document.createElement('img');
//             loadingIndicator.src = loadingGif.src;
//             loadingIndicator.alt = 'Loading...';
//             gridItem.appendChild(loadingIndicator);

//             // Generate image data (don't await, start all requests simultaneously)
//             const imageDataPromise = query("random")
//                 .then(imageData => {
//                     // Create and append image element
//                     const imageURL = URL.createObjectURL(imageData);
//                     const imgElement = document.createElement('img');
//                     imgElement.src = imageURL;
//                     imgElement.alt = `Generated image ${i + 1}`;
//                     gridItem.replaceChild(imgElement, loadingIndicator);

//                     // Create download button
//                     const downloadBtn = document.createElement('a');
//                     downloadBtn.classList.add('button-33');
//                     downloadBtn.href = imageURL;
//                     downloadBtn.download = `generated_image_${i + 1}.jpg`;
//                     downloadBtn.textContent = 'Download';
//                     gridItem.appendChild(downloadBtn);
//                 })
//                 .catch(error => {
//                     console.error(`Error generating image ${i + 1}:`, error);
//                     alert(`Error generating image ${i + 1}: ${error.message}`);
//                 });

//             initialImagePromises.push(imageDataPromise);

//             // Append grid item to image container
//             imageContainer.appendChild(gridItem);
//         }

//         // Wait for all initial image generation promises to resolve
//         await Promise.all(initialImagePromises);
//         // Wait for all initial image generation promises to resolve
//         await Promise.all(initialImagePromises);
//     } catch (error) {
//         console.error("Error generating initial random images:", error);
//         alert("Error generating initial random images: " + error.message);
//     }
// });

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
      const imageDataPromise = query("random-" + i) // Pass a unique identifier
        .then((imageData) => {
          // Create and append image element
          const imageURL = URL.createObjectURL(imageData);
          const imgElement = document.createElement("img");
          imgElement.src = imageURL;
          imgElement.alt = `Generated image ${i + 1}`;
          console.log(imgElement);
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
