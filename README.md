# The-Door

#### Frontend deployed at: https://the-door-nyc.netlify.app/

#### Backend deployed at: https://murder-hornets-the-door.herokuapp.com/api/volunteers

### Overview

Our goal is to faithfully recreate the UX team's designs in a fully-functioning format. The "Get Involved" dropdown will allow the user to select "Volunteer", which will lead them to a page where they fill out a form to volunteer. Upon creating a submission, the user will have a chance to read their information and confirm, edit, or delete their volunteer registration.


### Team Expectations

Our Team Expectations Google Doc can be found [here](https://docs.google.com/document/d/1P_08GRFFc23QUzfReZelRpnC0Z05M_ix5NtP40GRmiA/edit)


### MVP

MVPs outlined [here](https://github.com/Ricomitch/The-Door/projects/1)


### Post MVP

- Social media logos functioning
- Mobile design
- Dead links to an "under construction" page
- List all the volunteers (perhaps on sign up page)
- "News Corner" - add CRUD
- "Donate Now" button animates the progress bar
- Embed actual video on homepage


### Whimsical Diagram

Out Whimsical Diagram can be found [here](https://whimsical.com/4ywbjDF1SjvEGi5xNXEXTW)


### MongoDB Schema

```
const Volunteer = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    programs: { type: Object, required: true },
    roles: { type: Object, required: true }
  },
  { timestamps: true }
)

{
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  programs: {},
  roles: {}
}
```

### Screenshots

#### Homepage Desktop
![Homepage Desktop](https://i.imgur.com/cLyQoJm.png)

#### Homepage Mobile
![Homepage Mobile](https://i.imgur.com/ciQJDcs.png)

### Tech Stack

React, React Router, Express, Mongoose, MongoDB, JavaScript, HTML, CSS

### Highlights

- 3 MVPs complete
- Utilizing css:hover on one object to manipulate a different object
- Use of Formik and Carousel
- Form button's three states
- Working as a team
- Working in conjunction with a second team
- Ironing out Git issues