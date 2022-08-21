// Create the Dog class here
import dogs from './data.js'
// import {getNewDog} from './index.js'
class Dog {
    constructor (data) {
     Object.assign(this, data)
    }
    getDogInfo () {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
                <nav class="nav">
                    <img class="nav-image" src="images/icon-profile.png" alt="profile-icon">
                    <img  class="nav-logo" src="images/logo.png" alt="logo-icon">
                    <img class="nav-chat" src="images/icon-chat.png" alt="chat-icon">
                </nav>
                <main>
                    <img class="main-photo" name="teddy" src=${avatar} alt="photo of a dog">
                    <div class="main-text">
                        <h2 class="text-name">${name}, ${age}</h2>
                        <p class="text-quote">${bio}</p>
                    </div>
                </main>
        `
    }
}

export default Dog
