# CalendAR.io
This is an app to store daily "To-Do" information into a user-friendly calendar.

On the homepage the user can see the current date and time of last refresh in the header. By using JavaScript's Date() and getHours() functions, the date will be displayed properly and there is an accurate log of hours passed in the day.

The user can type in information for every hour and log that information into local.storage by clicking on "LOCK" buttons. This data will persist even after refreshing the page.

Once the hour has passed, textarea is now readonly and background will turn red. The previous input into storage will still be displayed in the time spot.
