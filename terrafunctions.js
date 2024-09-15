// Importing the API and instantiating the client using your keys
import { Terra } from "terra-api";

const API_KEY = "<Gtg04E6j2LcA2RbQqnsX7-ECkue_LIo0>"
const DEV_ID = "<4actk-browardborn13-testing-3gKQ6HecdI>"
const SECRET = "<5335d5d0b022250b62b0f725ff2080341e5be162f180fc9a>"


const terra = new Terra(DEV_ID, API_KEY, SECRET);


terra.getProviders()
    .then((p) => {
        console.log(p);
    })
    .catch((error) => {
        console.error("Error fetching providers:", error);
    });


/* 
Auth widget

const url = await fetch("https://api.tryterra.co/v2/auth/generateWidgetSession", {
    method: "POST",
    headers: {
      "dev-id": "4actk-browardborn13-testing-3gKQ6HecdI",
      "x-api-key": "**************"
    },
    body: JSON.stringify({
      "reference_id": "test-username",
      "lang": "en"
    })
  }).then((res) => res.json())
    .then((data) => data.url)
*/

/*
Generating an "available providers" widget.

terra
    .generateWidgetSession({
      referenceID: userid,
      providers: ["GARMIN", "GOOGLE"],
      authSuccessRedirectUrl: "success.com",
      authFailureRedirectUrl: "failure.com",
  		language: 'en'
    })
    .then((s) => {
      console.log(s);
    });
*/

/*

User data sample

const ALEX_ID = "12d4bfa7-52a1-45b4-99f8-806ca45eaa81	"

// Get the nutrition data from start date to current time
terra
    .getNutrition({ userId: ALEX_ID, startDate: new Date("2024-09-15"), endDate: new Date(), toWebhook: false })
    .then((p) => console.log(p))
    .catch((e) => console.log(e.status, e.message));
*/