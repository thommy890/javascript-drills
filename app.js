// Array of friend names
const friends = ["John", "Jane", "Alice", "Bob", "Eva"];

// Function to generate the song lyrics for a friend
function generateSongLyrics(name, lines) {
  for (let i = lines; i > 0; i--) {
    let lyric = `${i} line${i !== 1 ? 's' : ''} of code in the file, ${i} line${i !== 1 ? 's' : ''}; `;
    lyric += `${name} strikes one out, clears it all out, ${i - 1} line${i - 1 !== 1 ? 's' : ''} of code in the file`;
    console.log(lyric);
  }
}

// Loop through each friend and generate the song lyrics
for (const friend of friends) {
  console.log(`${friend.toUpperCase()}:`);
  generateSongLyrics(friend, 99);
}
