# Moors Wildfire Tracker App (Back-end)

This is the back-end repository for a remake of the wildfire tracker I made with [@rachelalk](https://github.com/rachelalk) during a one-day Couchbase Hackathon in August 2022.

This project is built using the Node.js with MongoDB and Mongoose, and Express, and unit tests are written with Mocha and Chai.

## Project Aims

My goal in remaking our hackathon project was to work a bit more with non-relational databases, and get some more practice in with back-end tech and testing. The wildfire tracker seemed like a great candidate for trying out those things, since it was already built with Couchbase the first time around and had room to grow, so here we are!

It's been especially useful to get more practice in with unit tests with Mocha and Chai, neither of which I've used before, as I usually do unit tests with Jest. It was also interesting to learn more about software architecture – like MVC – while reading up on different docs for this project.

In a similar vein, I decided to try out something new on the front-end, so I'm going to be building it in Angular. Have finished wireframes and have initialised the front-end project, but haven't started coding yet: will update this paragraph accordingly when there's something to show for it!

## Working On Next

- Fix the bug in `test/read_test.js` where the outcome of the test that `"Finds incident with the correct description"` occasionally returns a TypeError for `null` while otherwise passing.
- Expand on the tests for CRUD test files: `validate_test.js` could always go into more detail, but is currently contains the most comprehensive suites, so is bottom of the list for expansion.
