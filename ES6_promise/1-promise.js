export default function getFullResponseFromAPI(bool) {
    return new Promise((resolve, reject) => {
        if (bool == true) {
            resolve({status: 200, body: 'success'})
        } else {
            reject(new Error('The fake API is not working currently'))
        }
    })
}