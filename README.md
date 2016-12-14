A stack I have grown to love for building web applications.  I tried to limit the number of technologies involved so that anyone can start with a project of their own.  I've built in User Authentication so you can have users log in, log out, and sign up.  If you have any questions feel free to react out <mailto:samullman@gmail.com>.


# UI layer
Built in components using React.js. The view layer will automatically update when any data changes.  Therefore, re-rendering your application is as simple as updating the data model.

# Server layer
Built with Ruby on Rails.  There is a lot of discussion about which backend technology to learn.  Rails is the ideal one to start on.  Rails manages many functions for you as well as interfaces with a database.  You can store data and user information easily.  It also manages our sign-in sign-out functionality.  You also get to write in Ruby, which is great!

# How it works
You contruct data models on the server and pass them to React components.  This is really easier than it sounds.  Then you build an API with Rails to handle AJAX requests from the UI interface. i.e. You use the userinterface to manipulate your data models.  Then when you want to save, the UI sends a new model down to the server, which saves it, possibly manipulates it, and sends back the updated model to the UI.  Since the UI automatically re-renders when it recieves data, you application and database are constantly synqed.  I think this stack is good for building all kinds of user applications including games, facebook clones, and general applications for home use. 
