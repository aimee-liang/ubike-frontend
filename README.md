## ubike [oo-bike]

![Alt text](https://media.giphy.com/media/3oz8xE7gjBmo2wFrS8/giphy.gif)

### Origins
This project was born out of a personal necessity. In 2020, I spent hours on Google Maps trying to figure out the best routes to bike in New York City, as well as available bike racks near where I'd be heading. That was pretty frustrating, especially when I would arrive not knowing if they would all be occupied and I'd be forced to walk a few blocks over to find another bike rack. Even then, I was nervous about leaving my bike out for too long because I didn't want my bike to get stolen. Then I realized how other riders might feel the same way. People are hesistant to ride the subway (as I made this project, we're in COVID times), but biking offers its own unique issues.

Enter, Ubike (no relation to any other apps). Ubike offers a way to allow users to check in/out of bike parking shelters throughout New York City (all five boroughs). It also allows riders to filter for shelters depending on the borough and for riders to leave comments and reviews. 

### API
This app was made possible by the NYC Open Data API. I specifically used the [Bike Shelters](https://data.cityofnewyork.us/Transportation/Bicycle-Parking-Shelters/thbt-gfu9) information. 

### React Notes
I used React Hooks for the Bike Stations Container and Station Component. Check out the official React.JS docs on how to use *useState* and *useHistory*. [Reactgo](https://reactgo.com/react-router-usehistory-hook/) had a very helpful piece on how to format useHistory that helped me redirect when clicking on an individual bike component.

### Map
This map was made possible by React Map GL API. You can access their documentation [here](https://docs.mapbox.com/mapbox-gl-js/api/) to get an access token as well as learn more about how to implement styles. I would like to thank [Dallas Bille](https://medium.com/swlh/getting-started-with-react-and-mapbox-gl-js-daa96477dd2c) and their super helpful Medium article on how to implement a responsive map feature. [Celeste Layne](https://www.celestelayne.com/blog) also has a three blog series on Mapbox which was very enlightening.

## Capstone Project as a Flatiron School Student