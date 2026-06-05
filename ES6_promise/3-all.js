import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup(createUser, uploadPhoto) {
    let base = {}
    let user = {}
    uploadPhoto
        .then((data) => base = data)
        .catch(() => console.log('Signup system offline'))

    createUser
        .then((data) => user = data)
        .catch(() => console.log('Signup system offline'))

    console.log(`${base.body} ${user.firstName} ${user.lastName}`)
    return Promise
}
