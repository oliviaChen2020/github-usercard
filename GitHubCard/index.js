/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

axios.get("https://api.github.com/users/oliviaChen2020")
  .then(response=>{
    console.log(response)
    const cardInfo =gitUser(response.data)
    console.log(response.data)
    userCardHolder.appendChild(cardInfo)
})
  .catch(error =>{
    console.log(error);
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(otherUser => {
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
    .then(response=>{
    console.log(response)
    const cardInfo =gitUser(otherUser)
    console.log(cardInfo)
    userCardHolder.appendChild(cardInfo)
})
  .catch(error =>{
    console.log(error);
  })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const userCardHolder = document.querySelector(".cards");
function gitUser(data){
  const gitUserCard = document.createElement("div")
  const image = document.createElement("img")
  const cardInfo = document.createElement ("div")
  const userName = document.createElement('h3')
  const users = document.createElement("p")
  const userLocation = document.createElement("p")
  const userProfile = document.createElement("p")
  const profileAnchor = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const userBio = document.createElement("p")

  gitUserCard.classList.add("card")
  cardInfo.classList.add("card-info")
  userName.classList.add("name")
  users.classList.add("username")

   image.src = data.avatar_url
   userName.textContent = data.name
   users.textContent = data.login
   userLocation.textContent = `Location: ${data.location}`
   profileAnchor.innerHTML = `Profile: <a href = ${data.html_url}>${data.name}</a>`
   followers.textContent = `Followers: ${data.followers}`
   following.textContent = `Following: ${data.following}`
   userBio.textContent = `Bio: ${data.bio}`


  cardInfo.appendChild(userName)
  cardInfo.appendChild(users)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(profileAnchor)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(userBio)
  gitUserCard.appendChild(image)
  gitUserCard.appendChild(cardInfo)

  console.log(gitUserCard)
  return gitUserCard
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
