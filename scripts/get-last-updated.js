function getLastUpdated() {
    //Fetch the latest commit of main branch from GitHub using the Git Data API
    fetch('https://api.github.com/repos/lsneth/wdd230/branches/main')
        .then(response => response.json())
        .then(branch => {
            //Extract the date and time
            let lastUpdated = branch.commit.commit.author.date
            const date = new Date(lastUpdated)

            //Format date and time
            const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            })
            const formattedTime = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            })

            const formattedDateTime = `${formattedDate} ${formattedTime}`

            //display formatted date and time in #last-updated element
            document.querySelector('#lastUpdated').textContent = formattedDateTime
    })
}
//Call the getLastUpdated() function when the page loads
window.addEventListener('load', getLastUpdated)