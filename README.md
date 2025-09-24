# 🎵 SongBird

A simple React application for managing song lyrics, featuring searching, editing, formatting, and copy-to-clipboard functionalities. The app allows users to store songs locally, format lyrics, and search through them with ease. The design is styled with **Tailwind CSS** and includes persistent storage using **localforage**.

## 🚀 Features

- **Add/Edit/Delete Songs**: Manage a list of songs with optional artist fields.
- **Search by Title and Lyrics**: Easily find songs by searching through titles or lyrics.
- **Format Lyrics**: Copy lyrics from the internet, paste, and apply double line spacing.
- **Copy to Clipboard**: Copy formatted lyrics with double line spacing to the clipboard.
- **Data Persistence**: Songs are stored locally using **localforage**.
- **Responsive UI**: Styled using **Tailwind CSS** with a responsive layout.

## 🛠️ Technologies

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **localforage**: Offline storage to persist songs data.
- **Vite**: Fast development environment and build tool for modern web applications.

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── AddSongForm.jsx   # Form to add songs 
│   │   ├── CopyButton.jsx     # Button to copy lyrics to clipboard
│   │   ├── EditSongModal.jsx  # Modal for editing songs
│   │   ├── FormatLyrics.jsx    # Component to format and copy lyrics
│   │   ├── Header.jsx         # Header component
│   │   ├── LyricsModal.jsx    # Modal for viewing lyrics
│   │   ├── Search.jsx         # Search page for searching songs by title or lyrics
│   │   ├── SongItem.jsx       # Component for each song stored
│   │   ├── SongList.jsx       # Page displaying the list of songs
│   ├── App.jsx                # Main App component
│   └── main.jsx               # ReactDOM render
|── index.html                  # Main HTML file
├── tailwind.config.js         # Tailwind CSS configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation


```

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/songdb.git
   ```

2. Navigate into the project directory:

   ```bash
   cd songdb
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Install **localforage** for persistent storage:

   ```bash
   npm install localforage
   ```

5. Install **Tailwind CSS**:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

6. Configure Tailwind by adding the following to `tailwind.config.js`:

   ```js
   module.exports = {
     content: [
       './index.html',
       './src/**/*.{js,jsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

7. Add the Tailwind directives to `index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

8. Start the development server:

   ```bash
   npm run dev
   ```

## 📝 Usage

1. **Home Page**: View all added songs with options to edit or delete.
2. **Search Page**: Search for songs by title or lyrics. Results show a snippet of the lyrics, which can be expanded.
3. **Lyrics Formatter**: Paste unformatted lyrics into the text area, click "Format" to apply double line spacing. Copy the formatted lyrics to the clipboard.

## 🎨 UI Colors

The app uses a **red, white, and blue** color scheme. Here's the breakdown:
- **Primary color**: Red (`bg-red-500`)
- **Secondary color**: Blue (`bg-blue-500`)
- **Background color**: White

## ✨ Key Components

- **CopyButton**: Handles the copy-to-clipboard functionality with conditional rendering and a dynamic button label that changes to "Copied!" when clicked.
- **LyricsFormatter**: Allows users to paste, format, and copy lyrics with double line spacing.
- **HomePage**: Displays all songs with options to edit and delete.
- **SearchPage**: Allows users to search for songs by title or lyrics, showing the results dynamically.

## 📋 CRUD Operations

- **Create**: Add a new song using a form on the home page.
- **Read**: View songs on the home and search pages.
- **Update**: Edit song details such as title, artist, and lyrics.
- **Delete**: Remove a song from local storage.

## 🔄 Data Persistence

All songs are saved locally in the browser using **localforage**, ensuring the data remains available even after refreshing the page.

## 📘 License

This project is licensed under the MIT License.
