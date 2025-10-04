# 🌟 Quote of the Day

A lightweight web app that displays an inspiring new quote each day, styled with modern glassmorphism and dynamic backgrounds switching to match the theme of the quote.

## 🔗 Live Demo
![Webpage Link](https://aaronddavis.github.io/quote-of-the-day)


---

## 📖 About The Project

This project was built to practice modern front-end web development skills. It fetches a random quote from an external API and displays it. To ensure a consistent "Quote of the Day" and to minimize API calls, the quote is cached in the browser's local storage for 24 hours. If the API fails, a fallback quote is provided to ensure the application remains functional.

---

## ✨ Features

* **🗓️ Daily Unique Quote:** Fetches and displays a new quote every day.
* **💾 API Caching:** Uses `localStorage` to save the daily quote, preventing unnecessary API calls.
* **⚡ Error Handling:** Includes a fallback mechanism with default quotes if the API fetch fails.
* **🎨 Thematic Backgrounds:** The background image changes based on the tag/category of the quote (e.g., success, wisdom, hope).
* **🪟 Modern UI:** A sleek, multi-layered "glassmorphism" design that's visually appealing.

---

## 🛠️ Built With

* **HTML5**
* **CSS3**
* **Modern JavaScript (ES6+)**
* [Quoteslate API](https://quoteslate.vercel.app/) for fetching quote data.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### ✅ Prerequisites

You just need a modern web browser.

### ⚙️ Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/AaronDDavis/quote-of-the-day.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd quote-of-the-day
    ```
3.  Open the `quote-of-the-day.html` file in your browser.

---

## 🚀 Future Improvements

-   **Add User Interaction:** Implement a "New Quote" button to allow users to fetch a new quote manually.
-   **Share Functionality:** Add buttons to share the quote on social media platforms like Twitter or LinkedIn.
