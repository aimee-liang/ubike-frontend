## ubike [oo-bike]

![Alt text](https://media.giphy.com/media/3oz8xE7gjBmo2wFrS8/giphy.gif)

### Origins
This project was born out of a personal necessity. In 2020, I spent hours on Google Maps trying to figure out the best routes to bike in New York City, as well as available bike racks near where I'd be heading. That was pretty frustrating, especially when I would arrive not knowing if they would all be occupied and I'd be forced to walk a few blocks over to find another bike rack. Even then, I was nervous about leaving my bike out for too long because I didn't want my bike to get stolen. Then I realized how other riders might feel the same way. People are hesitant to ride the subway (as I made this project, we're in COVID times), but biking offers its own unique issues.

Enter, ubike (no relation to any other apps). ubike offers a way to allow users to check in/out of bike parking shelters throughout New York City (all five boroughs). It also allows riders to filter for shelters depending on the borough and for riders to leave comments. 

### Main API
This app was made possible by the NYC Open Data API. I used the [Bike Shelters](https://data.cityofnewyork.us/Transportation/Bicycle-Parking-Shelters/thbt-gfu9) information. 

### Map API
This map was made possible by React Map GL API. You can access their documentation [here](https://docs.mapbox.com/mapbox-gl-js/api/) to get an access token as well and learn how to implement styles. I would like to thank [Dallas Bille](https://medium.com/swlh/getting-started-with-react-and-mapbox-gl-js-daa96477dd2c) and their Medium article on how to implement a responsive map feature as well as their other blog about Map [markers](https://levelup.gitconnected.com/getting-started-with-react-and-mapbox-gl-js-user-location-marker-with-marker-component-716a3f1abf83). [Celeste Layne](https://www.celestelayne.com/blog) has a three blog series on Mapbox. For my markers though, I read up on how to implement this [here](https://visgl.github.io/react-map-gl/docs/api-reference/marker.).

### Chatbot
All credits to Lucas Bassetti for the React Simple Chatbot feature. You can access their docs [here](https://lucasbassetti.com.br/react-simple-chatbot/#/). Himanshu Jaiswal wrote a very clear [Medium blog](https://medium.com/javascript-in-plain-english/may-i-help-you-build-a-chatbot-in-10-minutes-with-react-df19e940bbc8) on how to set up your own React Simple Chatbot.

### Images
I used general stock photos for a bike station placeholder and the bike station show page, and Github's very own Octocat as a default if a user did not upload a photo for their avatar on registration.

### Stretch Goals
The next version would include a map safety feature, being able to interact with other users, and transitioning or having a version in React Native as users would be on the go when biking. I set out wanting to use all bike docks, but I was not familiar with Shapefile format and converting that to JSON and had to redirect my app to Bike Shelters due to time constraints. That would also be great to implement. 

## Capstone Project as a Flatiron School Student