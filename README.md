[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/cdfishe1/dollar-sense)
![GitHub top language](https://img.shields.io/github/languages/top/cdfishe1/dollar-sense)

# dollarSense

This was forked from a group project I worked on in order to implement a LaunchDarkly Feature Flag 


## Feature Flag Created

The feature flag I implemented was to allow a specific user access to a delete button, while hiding it from another specified user

- User with access to delete: `natfinn@mail.com`
- User without access to delete: `finn@mail.com`
- Password for both users is: `bubbles`

### Installation Instructions

- Clone the repo to your local machine and do an `npm i` in your folder's terminal
- Once the install is complete please enter `npm start` to get the application running
- The application will open on `http://localhost:3000/` and bring you to a landing page prompting sign up or login
- Sign in as each individual user (information above) and navigate to the `Goals` page in the Navbar to test each user's access
- Once you are logged in as a specific user, you must navigate to `Dashboard` in the Navbar to log out and re-sign in as the other user (by navigating to `Home` or `Login` in the Navbar)
- To view the implemented code please navigate to `dollar-sense/client/src/komponent/Goal/Goal.js`, preview below

    ```md
        useEffect(() => {
            var user = {
            "key": `${auth.currentUser.email}`
             };
            const ldclient = LDClient.initialize('60f750d5b1a03d26078523a7', user);

        ldclient.on('ready', function() {
       
            var showFeature = ldclient.variation("allow-specific-users-access-to-delete-goal");
            setFeatureFlag(showFeature)
            console.log("It's now safe to request feature flags", showFeature);
                if (showFeature) {
                 console.log("showing feature")
            } else {
                console.log("not showing feature")
             }
     })
  }, [])

    ```
    
 - Feature flag conditional 
    ```md
          {featureFlag && <FaTimes
                  className="deleteIcon"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => onDelete(id)}
                /> }
    ```


## Preview of User's View

<img src="/assets/finnmail.png" />

## License

Copyright (c) Natalie Finnegan, Charles Fisher, Javiann Marrero. All rights reserved.<br>
Please be kind and change content if you wish to use this code.

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Charles Fisher, Natalie Finnegan, Diego Villarreal

<blockquote>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</blockquote>
</details>
