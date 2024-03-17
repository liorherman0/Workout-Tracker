// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display logged workouts and progress tracking data
    fetch('/api/workouts')
        .then(response => response.json())
        .then(data => {
            // Update the UI with fetched data
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching workouts:', error);
        });

    // Add event listeners for workout logging form submission
    const workoutForm = document.getElementById('workout-form');
    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission and send data to the backend
    });
});
