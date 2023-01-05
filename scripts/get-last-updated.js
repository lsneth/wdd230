function getLastUpdated() {
    console.log('hello world')
    // Fetch the latest commit of main branch from GitHub using the Git Data API
    fetch('https://api.github.com/repos/lsneth/wdd230/branches/main')
        .then(response => response.json())
        .then(branch => {
            // Extract the date and time of the most recent commit
            console.log(branch)
            let lastUpdated = branch.commit.commit.author.date;
            const date = new Date(lastUpdated);

            const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            });
            const formattedTime = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            });

            const formattedDateTime = `${formattedDate} ${formattedTime}`;

            document.getElementById('last-updated').innerHTML = formattedDateTime;
    });
}
// Call the getLastUpdated() function when the page loads
window.onload = getLastUpdated;