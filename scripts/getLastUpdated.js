function getLastUpdated() {
    // Fetch the commit history from GitHub using the Git Data API
    fetch('https://api.github.com/repos/lsneth/wdd230/branches/main')
        .then(response => response.json())
        .then(branch => {
            // Extract the date and time of the most recent commit
            console.log(branch)
            let lastUpdated = branch.commit.commit.author.date;
            // Update the HTML element with the extracted date and time
            document.getElementById('last-updated').innerHTML = lastUpdated;
    });
}
// Call the getLastUpdated() function when the page loads
window.onload = getLastUpdated;