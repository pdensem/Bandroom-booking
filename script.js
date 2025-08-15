{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("bookingForm").addEventListener("submit", function(e) \{\
    e.preventDefault();\
    \
    // Get user inputs\
    const name = document.getElementById("name").value;\
    const bandName = document.getElementById("bandName").value;\
    const room = document.getElementById("room").value;\
    const timeSlot = new Date(document.getElementById("timeSlot").value);\
    \
    // Ensure full name is entered\
    if (!name.trim()) \{\
        alert("You must provide your full name to book a room.");\
        return;\
    \}\
    \
    // Basic booking rules\
    const currentDate = new Date();\
    if (timeSlot < currentDate) \{\
        alert("You cannot book a time in the past!");\
        return;\
    \}\
    \
    const twoWeeksAhead = new Date();\
    twoWeeksAhead.setDate(currentDate.getDate() + 14);\
    if (timeSlot > twoWeeksAhead) \{\
        alert("You can only book up to two weeks in advance!");\
        return;\
    \}\
\
    // Check if user already booked more than 2 hours this week\
    let bookings = [];  // For simplicity, we will simulate the booking database\
    \
    let totalBookingTime = 0;\
    bookings.forEach(booking => \{\
        if (booking.bandName === bandName && booking.room === room) \{\
            totalBookingTime += 1;  // Assuming each booking is 1 hour\
        \}\
    \});\
    \
    if (totalBookingTime >= 2) \{\
        alert("You can only book 2 hours per week.");\
        return;\
    \}\
    \
    // Save the booking\
    bookings.push(\{ name, bandName, room, timeSlot \});\
\
    // Show confirmation\
    const confirmationMessage = `Thank you, $\{name\}! Your booking for the $\{room\} at $\{timeSlot\} has been confirmed.`;\
    document.getElementById("confirmationDetails").innerText = confirmationMessage;\
    document.getElementById("confirmation").style.display = "block";\
    \
    // Send confirmation email (simulated here)\
    sendConfirmationEmail(name, bandName, room, timeSlot);\
\});\
\
function sendConfirmationEmail(name, bandName, room, timeSlot) \{\
    // For the sake of simplicity, we\'92ll simulate sending an email here.\
    console.log(`Email sent to $\{name\} for booking $\{room\} on $\{timeSlot\}`);\
\}\
}