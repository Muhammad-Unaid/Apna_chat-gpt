Swal.fire({
    html: `
<h1 class="swal-title">Welcome ! <br> To Apna Chat GPT</h1>
<button id="customButton" class="swal-button">Explore Now ! </button>
<h3 class="swal-footer"></i> Developed by <strong>Muhammad Unaid</strong> <i class="fas fa-heart"></i></h3> `,
    padding: "3em",
    background:
      "#fff url(https://media.istockphoto.com/id/1475054812/photo/robot-hand-making-contact-with-human-finger-on-dark-blue-background-business-communication.jpg?s=612x612&w=0&k=20&c=XnFBm3qvApmT-jxHXQOh5Gl9ws-6FbV-ZWiXF3i0a2Q=) no-repeat center center",
    backdrop: `
rgba(0,0,8,0.4)
url("https://media1.giphy.com/avatars/acetech/RK67baKq9A79.gif")
left top
no-repeat`,
    showConfirmButton: false, // Hides default confirm button
  });

  // Add event listener for the custom button
  document
    .getElementById("customButton")
    .addEventListener("click", function () {
      Swal.close(); // Close the alert when the button is clicked
    });

  // Custom CSS
  const style = document.createElement("style");
  style.textContent = `
.swal-title {
font-size: 24px;
color: white;
margin-bottom: 1.5em;
}
.swal-button {
background-color:  #1677e6;
color: white;
padding: 10px 20px;
font-size: 18px;
border: none;
width: 9em;
height: 3em;
border-radius: 30em;
font-size: 15px;
font-family: inherit;
border: none;
position: relative;
overflow: hidden;

z-index: 1;
box-shadow: 6px 6px 12px #c5c5c5,
         -6px -6px 12px #ffffff;

cursor: pointer;
margin-bottom: 1em;
}
.swal-button::before {
content: '';
width: 0;
height: 3em;
border-radius: 30em; 
position: absolute;
top: 0;
left: 0;
background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
transition: .5s ease;
display: block;
z-index: -1;
}
.swal-button:hover::before {
width: 9em;
}
.swal-footer {
font-size: 16px;
color: white;
}
.swal-popup {
max-width: 400px; /* Adjust popup width */
text-align: center;
}
`;
  document.head.appendChild(style);