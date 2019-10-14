const firebaseConfig = {
    apiKey: "AIzaSyAzVOcsNvB9r2nQnNX2BShqeTHn0yCmRuk",
    authDomain: "undefined-5ddb8.firebaseapp.com",
    databaseURL: "https://undefined-5ddb8.firebaseio.com",
    projectId: "undefined-5ddb8",
    storageBucket: "undefined-5ddb8.appspot.com",
    messagingSenderId: "633893929907",
    appId: "1:633893929907:web:142aa31606aebd683cc1c6",
    measurementId: "G-RJGEQJ33N8"
};

let firebaseInstance

export const getFirebase = firebase => {
    if (firebaseInstance) {
        return firebaseInstance
    }

    firebase.initializeApp(firebaseConfig)
    firebaseInstance = firebase

    return firebase
}
