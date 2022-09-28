# PLAN

## ORIGINAL APP

**Front-end:**

- Built in React.
- Single-page application that returns a list of recent incidents with geolocation.
- Input field that lets you send incidents.

**Back-end:**

- Built with Couchbase, Express, and Node.js.
- Had a GET route and a POST route: would get all for the chronological list of incidents, and post for new incidents.

## FRONT-END

**What it should do:**

- Take user input to report climate incidents. Tell you whether incidents are verified or not.
- Display geolocated map of climate incidents, pulling from database records.
- Display chronological list of climate incidents, pulling from database records.
- Information page about what it does, what the app is.

**Technologies:**

- Next.js.
- Cypress, Axe, React Testing Library and Jest.

## BACK-END

**What it should do:**

- Pull records of all incidents from moors database.
- Pull records by type of incident from moors database.
- Post new incidents by type to moors database.

**Technologies:**

- MongoDB.
- Express.js.
- Node.js.
- Nodemon.
- Dotenv.
- Cors(?).
- Jest and Supertest.

## NOTES

**Considerations:**

- React Native would probably make more sense for this as a real-world application, but I mostly want to practice new back-end technologies, so wanted to make sure I was working with something I was more familiar with on the front.
- For the back-end, also heard about a really cool offline (maybe mobile-only too?) Couchbase service from some devs at the Manchester office, that's specifically made for people in off-grid locations who need access to data, but I'm not trying to pay for that right now, so that'll have to remain a potential in a future rebuild.

**Chronology:**

- Component trees for front and back.
- Figma wireframes.
- Build back-end basics: GET route for all incidents, POST route for incidents.
- Test back-end basics.
- Build front-end basics: chronological feed from GET all route, page to POST incidents.
- Test front-end basics.
- Style.
- Review progress. Next steps to consider at this point: implementing Google Maps API, information page, figure out how incident verification would work, ability to filter incidents by type or time or other filters.
