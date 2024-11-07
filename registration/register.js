document.getElementById("add").addEventListener("click", function (event) { 
    // Add one to the count of participants.
    // Create a copy of the HTML that makes up the participant section of the form. (<section class="participant1">)
    // Note that id attributes are supposed to be unique. If we create an exact copy of that section then we will have duplicate ids. So the next step would be to update the ids of each element with something to make it unique.
    // Insert the new HTML into the participants fieldset. Ideally we would want to insert the new participant after the last participant and before the Add button.
  const count = document.querySelectorAll(".participant").length + 1;
  const template = participantTemplate(count);
  const participant = document.createElement("section");
  participant.classList.add("participant");
  participant.innerHTML = template;
  document.querySelector(".participants").insertBefore(participant, document.getElementById("add"));

});

function participantTemplate(count) {
  return `
    <section class="participant">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>  
        <input id="fname${count}" type="text" name="fname" value="" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select>
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

// Add an event listener to the form. We are listening for a submit event.
// On submit we need to keep the form from doing what it normally would...which is to reload the page.
// Then we need to find all of the fee inputs. There will be one for each participant that has been added. The totals from those fields need to be summed up.
// Get the adult name from the form.
// Hide the Form, and show the summary element. Insert the following message into the summary element: "Thank you NAME for registering. You have registered N participants and owe $N in Fees."

document.querySelector('form').addEventListener('submit', submitForm);
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const fees = Array.from(form.querySelectorAll('input[name="fee"]'));
    const total = fees.reduce((sum, fee) => sum + parseFloat(fee.value), 0);
    const adultName = form.querySelector('input[name="adult_name"]').value;
    form.style.display = 'none';
    const summary = document.getElementById('summary');
    summary.style.display = 'block';
    summary.textContent = `Thank you ${adultName} for registering. You have registered ${fees.length} participants and owe $${total} in Fees.`;
    

}

// <!DOCTYPE html>
// <html>
//   <!-- Example based off of https://www.w3docs.com/learn-html/html-form-templates.html -->
//   <head>
//     <title>Camp Registration</title>
//     <link
//       href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" href="register.css" />
//     <script src="register.js" defer></script>
//   </head>
//   <body>
//     <div class="testbox">
//       <h1>Camp Registration</h1>
//       <form>
//         <fieldset class="participants">
//           <legend>Participant Information</legend>
//           <section class="participant1">
//             <p>Participant 1</p>
//             <div class="item">
//               <label for="fname"> First Name<span>*</span></label>
//               <input id="fname" type="text" name="fname" value="" required />
//             </div>
//             <div class="item activities">
//               <label for="activity">Activity #<span>*</span></label>
//               <input id="activity" type="text" name="activity" />
//             </div>
//             <div class="item">
//               <label for="fee">Fee ($)<span>*</span></label>
//               <input id="fee" type="number" name="fee" />
//             </div>
//             <div class="item">
//               <label for="date">Desired Date <span>*</span></label>
//               <input id="date" type="date" name="date" />
//             </div>
//             <div class="item">
//               <p>Grade</p>
//               <select>
//                 <option selected value="" disabled selected></option>
//                 <option value="1">1st</option>
//                 <option value="2">2nd</option>
//                 <option value="3">3rd</option>
//                 <option value="4">4th</option>
//                 <option value="5">5th</option>
//                 <option value="6">6th</option>
//                 <option value="7">7th</option>
//                 <option value="8">8th</option>
//                 <option value="9">9th</option>
//                 <option value="10">10th</option>
//                 <option value="11">11th</option>
//                 <option value="12">12th</option>
//               </select>
//             </div>
//           </section>
//           <button type="button" id="add">Add Participant</button>
//         </fieldset>

//         <fieldset>
//           <legend>Household / Adult Primary Contact</legend>
//           <div class="columns">
//             <div class="item">
//               <label for="adult_name">Name<span>*</span></label>
//               <input id="adult_name" type="text" name="adult_name" />
//             </div>

//             <div class="item">
//               <label for="address1">Address 1<span>*</span></label>
//               <input id="address1" type="text" name="address1" />
//             </div>

//             <div class="item">
//               <label for="city">City<span>*</span></label>
//               <input id="city" type="text" name="city" />
//             </div>
//             <div class="item">
//               <label for="state">State<span>*</span></label>
//               <input id="state" type="text" name="state" />
//             </div>
//             <div class="item">
//               <label for="eaddress">Email Address<span>*</span></label>
//               <input id="eaddress" type="text" name="eaddress" />
//             </div>
//             <div class="item">
//               <label for="phone">Phone<span>*</span></label>
//               <input id="phone" type="tel" name="phone" />
//             </div>
//             <div class="item">
//               <label for="zip">Zip<span>*</span></label>
//               <input id="zip" type="text" name="zip" />
//             </div>

//             <div class="question">
//               <label>Relationship to Participants:</label>
//               <div class="question-answer">
//                 <div>
//                   <input
//                     type="radio"
//                     value="self"
//                     id="radio_3"
//                     name="relationship"
//                   />
//                   <label for="radio_3" class="radio"><span>Self</span></label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     value="mother"
//                     id="radio_4"
//                     name="relationship"
//                   />
//                   <label for="radio_4" class="radio"><span>Mother</span></label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     value="father"
//                     id="radio_5"
//                     name="relationship"
//                   />
//                   <label for="radio_5" class="radio"><span>Father</span></label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     value="guardian"
//                     id="radio_6"
//                     name="relationship"
//                   />
//                   <label for="radio_6" class="radio"
//                     ><span>Guardian</span></label
//                   >
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     value="other"
//                     id="radio_7"
//                     name="relationship"
//                   />
//                   <label for="radio_7" class="radio"><span>Other</span></label>
//                   <input type="text" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </fieldset>
//         <div class="btn-block">
//           <button type="submit" id="submitButton">Submit</button>
//         </div>
//       </form>
//       <section id="summary"></section>
//     </div>
//   </body>
// </html>
