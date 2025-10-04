/**
 * @fileoverview Fetches a daily quote, saves it to local storage, and updates the UI.
 * It uses a date-based key to ensure the same quote is shown all day.
 */

// Selecting elements to be change
const quoteTextElement = document.querySelector(".quote");
const quoteAuthorElement = document.querySelector(".name");
const backgroundElement = document.querySelector(".background-img");

/**
 * @type {Array<{quote: string, author: string, tags: string[]}>}
 * A fallback array of default quote objects, used if the API fetch fails.
 */
const fallback = [
  {quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", tags:["general"]},
  {quote: "Whatever you are, be a good one.", author: "Abraham Lincoln", tags:["empathy"]},
];


/**
 * Generates a key based on the current date in "YYYY-MM-DD" format.
 * This key is used to store and retrieve the quote of the day from local storage.
 *
 * @returns {string} The date string key (e.g., "2025-10-04").
 */
function getTodayKey() {
    const d = new Date();
    // Converts the date to an ISO string and slices to get only the date part
    return d.toISOString().slice(0, 10); // "2025-10-04"
}


/**
 * Main asynchronous function to fetch, store, and display the daily quote.
 * It first checks local storage for a quote saved for today's date.
 * If not found, it attempts to fetch a new random quote from the API and saves it.
 * If the fetch fails, it uses a random quote from the local fallback array.
 *
 * @async
 * @returns {Promise<void>}
 */
async function getNewQuote() {
    // Get the unique key for today's date
    const todayKey = getTodayKey();
    
    // Check local storage for a quote saved under today's key
    const saved = localStorage.getItem("quote-" + todayKey);
    
    let data; // Variable to hold the quote data

    // If no quote is saved for today, attempt to fetch
    if (!saved) {
        try {
            // Fetch a random quote from the external API
            const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
            /** @type {{quote: string, author: string, tags: string[]}} */
            data = await response.json();
            
            console.log("Response status:", response.status);
            console.log("Data received:", data);

            // Save the successfully fetched quote data to local storage
            localStorage.setItem("quote-" + todayKey, JSON.stringify(data));
        }
        catch (error) {
            // If the API fetch fails, log the error and use a random fallback quote
            console.error("Quote fetch failed: ", error);
            data = fallback[Math.floor(Math.random() * fallback.length)];
        }
    }
    else{
        // If a quote is saved, parse the stored JSON string back into an object
        data = JSON.parse(saved);
    }


    // Destructure/extract the necessary information
    const quoteContent = data.quote;
    const quoteAuthor = data.author;
    // Get the first tag (category) for theme/background setting
    const quoteTag = data.tags[0];


    // Update the HTML content with the quote text and the author
    quoteTextElement.textContent = "\"" + quoteContent + "\"";
    quoteAuthorElement.textContent = quoteAuthor;        

    // Reset the background element's class to remove any previous theme/tag class
    backgroundElement.className = "background-img";


    // If a tag exists, add it as a class to the background element for styling
    if (quoteTag) {
        backgroundElement.classList.add(quoteTag);
    }
}

// Execute the function to initialize the quote display
getNewQuote();