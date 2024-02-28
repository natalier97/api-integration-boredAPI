const randomActivity = async (event) => {
  try {
    event.preventDefault();

    // Define API endpoint URL (response)
    let response = await fetch("http://www.boredapi.com/api/activity/");
    // Format response to json
    let responseData = await response.json();
    // Assign activity (response.activity) to variable
    let activity = responseData.activity;
    // Assign webpage location to variable
    let pOutput = document.getElementById("output");
    // Change innerText of variable to activity variable
    if (activity) {
      pOutput.innerText = activity;
    } else {
      pOutput.innerText = responseData.error;
    }
  } catch (err) {
    // Due to the nature of the API this will never execute
    //what do we want to console.log for errors?
    // console.err(err.message);
    console.log(err.message);
  }
};
