// Importing the API and instantiating the client using your keys
import { Terra } from "terra-api";

const API_KEY = "<Gtg04E6j2LcA2RbQqnsX7-ECkue_LIo0>"
const DEV_ID = "<4actk-browardborn13-testing-3gKQ6HecdI>"
const SECRET = "<5335d5d0b022250b62b0f725ff2080341e5be162f180fc9a>"


const terra = new Terra(DEV_ID, API_KEY, SECRET);
const userid = "12d4bfa7-52a1-45b4-99f8-806ca45eaa81"


terra.getProviders()
    .then((p) => {
        console.log(p);
    })
    .catch((error) => {
        console.error("Error fetching providers:", error);
    });



/*
Generating an "auth with specified providers" widget.
*/
async function generateWidgetSession() {
  const requestBody = {
      reference_id: userid,
      providers: ["GARMIN", "GOOGLE"],
      authSuccessRedirectUrl: "https://success.com",
      authFailureRedirectUrl: "https://failure.com",
      language: 'en'
  };

  console.log("Request Body:", JSON.stringify(requestBody));

  try {
      const response = await fetch("https://api.tryterra.co/v2/auth/generateWidgetSession", {
          method: "POST",
          headers: {
              "dev-id": DEV_ID,
              "x-api-key": API_KEY,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
      });

      console.log("Response Status:", response.status);
      console.log("Response Status Text:", response.statusText);

      if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", {
              status: response.status,
              statusText: response.statusText,
              errorData
          });
          return;
      }

      const data = await response.json();
      console.log("Widget Session:", data);
  } catch (error) {
      console.error("Request failed:", error);
  }
}

generateWidgetSession();



/*

User data sample


// Get the nutrition data from start date to current time
terra
    .getNutrition({ userId: userid, startDate: new Date("2024-09-15"), endDate: new Date(), toWebhook: false })
    .then((p) => console.log(p))
    .catch((e) => console.log(e.status, e.message));
*/