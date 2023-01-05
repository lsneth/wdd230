function getLastUpdated() {
    console.log('hello world')
    // Fetch the commit history from GitHub using the Git Data API
    fetch('https://api.github.com/repos/lsneth/wdd230/commits')
        .then(response => response.json())
        .then(commits => {
            // Extract the date and time of the most recent commit
            let lastUpdated = commits[0].commit.committer.date;
            // Update the HTML element with the extracted date and time
            document.getElementById('last-updated').innerHTML = lastUpdated;
    });
}
// Call the getLastUpdated() function when the page loads
window.onload = getLastUpdated;