const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const search = document.getElementById('search')
const form = document.getElementById('form')


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        creatUserCard(data)
        getRepos(username)
    }
    catch (err) {
        if (err.response.status == 404) {
            createErrorCard("No user with this username")

        }
    }

}
