This project is a responsive and interactive web page designed with modern UI/UX principles. It includes sections such as Home, About, Projects, and Contact, with seamless navigation and smooth animations. The Contact form is integrated with EmailJS to enable email notifications when a user submits a message.


Features

Fully Responsive Design – Adapts to different screen sizes (desktop, tablet, and mobile).

Smooth Navigation – Intuitive UI with smooth scrolling.

Projects Section – Includes a "View Project" button with improved UX.

Contact Form with EmailJS – Sends user messages directly to a specified email.

Dark/Light Mode Support – Allows users to switch between themes.

Optimized Performance – Lightweight design with efficient code structure.


Technologies Used

Frontend: HTML, CSS, JavaScript

Animations & Effects: CSS transitions, JavaScript event listeners

Email Handling: EmailJS


Installation & Setup

Clone the repository:

git clone https://github.com/Idumania378/portfolio.git

Navigate to the project folder:

cd [project name]

Open index.html in a browser to view the page.


EmailJS Integration

To enable EmailJS for the contact form:

Create an account at EmailJS.

Obtain your Service ID, Template ID, and User ID.

Add this script in your JavaScript file:

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('your_service_id', 'your_template_id', this, 'your_user_id')
    .then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message. Please try again later.');
    });
});

Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual EmailJS credentials.


Usage

Users can navigate through different sections smoothly.

The "View Project" button provides detailed insights into projects.

The contact form allows users to send inquiries directly to your email.


Contributing

If you'd like to contribute, feel free to fork this repository and submit a pull request.