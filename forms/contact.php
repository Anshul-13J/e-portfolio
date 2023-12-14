<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Validate data
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required!";
        exit();
    }

    // You can add additional validation, such as email format validation

    // Set the recipient email address
    $to = "anshulnigam123@gmail.com";  // Replace with your email address

    // Set the email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Build the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";

    // Set the email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // Send the email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "Error sending the message. Please try again later.";
    }
} else {
    // If the request method is not POST, redirect to the form page or handle accordingly.
    echo "Request method is not POST - Error from my side.."
    exit();
}
?>
