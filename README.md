# 2017 Global Game Jam
## Victoria, BC

### [victoriaggj.com](http://victoriaggj.com)

This is the repo that holds the code for the GGJ Victoria 2017 Landing site,
as well as the code for the thank-you pages that are being sent to the sponsors.


## Dependencies

1. [Font Awesome](https://fortawesome.github.io/Font-Awesome/)     --> Icon font set.
2. [fullPage.js](http://alvarotrigo.com/fullPage/)      --> The full-screen scrolling engine.
3. [jQuery](https://jquery.com/)           --> Used for manipulating DOM, also as the dependency of fullPage.js.
4. [Normalize.css](https://necolas.github.io/normalize.css/)    --> Used for CSS resets.
5. [Velocity.js](http://julian.com/research/velocity/)      --> The animation engine.

1. Install dependencies:

        npm install

2. Start gulp task:

        gulp dev   
       
        
## Getting Ready For Production

1. Minimize files using gulp task:

        gulp prod

2. Upload files to your server and run:

        npm install --production
        
   Add `--production` tag to only install dependencies that are needed for production environment.
