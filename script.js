const initializeApp = require("firebase");

const getAnalytics = require("firebase/analytics");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlgN4YgAitJccXsJSA97PN5M5wbMawDow",
  authDomain: "portfolio-fb56f.firebaseapp.com",
  projectId: "portfolio-fb56f",
  storageBucket: "portfolio-fb56f.appspot.com",
  messagingSenderId: "201982366290",
  appId: "1:201982366290:web:4eabea9d1d17d1d129858b",
  measurementId: "G-RT40HC9QRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)



//Send Email info
function sendEmail(name, email, subject, message){
    email.send({
        Host: "smtp.gmail.com",
        Username: 'tinahlwatika14@gmail.com',
        Password: "potatosalad",
        To: 'tinahlwatika14@gmail.com',
        From: 'tinahlwatika14@gmail.com'

    })
}


document.getElementById('#contact-form')
