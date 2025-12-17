# 📝 Feedback App 2025

## 📌 Project Description & Purpose

This feedback app is used by a mock startup company to collect ideas and suggestions from users. Users can see existing feedback others have provided as well as submit new suggestions 
about how the "product" can be improved. The apps purpose would be to help a company understand what users want and decide what to work on next.



## 🚀 Live Site

Check out the app: [HERE](https://ac-feedback-app.netlify.app/)



## 🖼️ Screenshots




<img width="1377" height="734" alt="Screenshot 2025-12-17 at 6 37 40 PM" src="https://github.com/user-attachments/assets/ac95b81d-d9f6-40e1-8a46-d4ca479587e6" />








<img width="601" height="694" alt="Screenshot 2025-12-17 at 6 35 04 PM" src="https://github.com/user-attachments/assets/e09efca4-17a5-48b1-8d97-c70f26c96e3c" />







<img width="742" height="775" alt="Screenshot 2025-12-17 at 6 36 13 PM" src="https://github.com/user-attachments/assets/a3281e95-b279-4f35-8614-30c70f50f970" />





## ✨ Features

This is what you can do on the app: 
- You can toggle through suggestion categories
- You can add feedback

## 🛠️ Tech Stack

**Frontend**

- **Languages:**   HTML, CSS, JavaScript
- **Framework:**   React (JS)
- **Deployment:**   Netlify

**Server/API**

- **Languages:**  Node.js
- **Framework:**   Express
- **Deployment:**   Render
- **Dev Tools:**   Postman for API testing

**Database**

- **Languages:**    PostGreSQL
- **Deployment:**   Neon

## 🔹 API Documentation

These are the API endpoints I built: 
1. GET /get-all-suggestions
2. GET /get-all-suggestions-by-category/:category
3. POST /add-one-suggestion

Learn more about the API endpoints here: _**[https://github.com/DHood27-a11y/feedback-app/blob/main/api-documentation.md]**_

## 🗄️ Database Schema

Here's the SQL I used to create my tables:  

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL
  );


INSERT INTO suggestions (title, description, category)
VALUES 
('Add tags for solutions','Easier to search for solutions based on a specific stack','Enhancement'),
('Add a dark theme option','It would help people with light sensitivities and who prefer dark mode','Feature'),
('Q&A within the challenge hubs','Challenge-specific Q&A would make for easy reference','Feature'),
('Allow image/video upload to feedback','Images and screencasts can enhance comments on solutions','Enhancement'),
('Ability to follow others','Stay updated on comments and solutions other people post','Feature'),
('Preview images not loading','Challenge preview images are missing when you apply a filter','Bug');



SELECT * FROM suggestions;


INSERT INTO suggestions (title, description, category)
VALUES ('Add Voting Feature','Allows users to upvote/downvote suggestions','Feature');



```

## 💭 Reflections

**What I learned:**
 1. I learned how to follow/replicate the structure of a figma design.
 2. I learned the importance of slowing down and structuring/psuedocoding prior to writing the code.
 3. I learned what a .gitignore file is and why its important to include in these types of projects ( Tells Git which files and folders not to track (to keep certain data private). In this instance we included it given we had config.js files that included sensitive data info from Neon database
 4. I learned why proper file/folder structure is vital when creating a larger project/app (Keeping things organized/structured allows for you to quickly find whats needed as well as can help team/coworkers quickly navigate to what they need to work on)
 5. I also learned the importance of committing as you go instead of at the very end, committing to GH as you go can help you track where a bug may have arisen from which can help cut down on debugging time. It can also allow for others to see your code process and the steps you took easier
 6. I learned how to install npm packages and how they are useful to the overall structure of your code (allows you to add useful features like confetti instead of having to code out the process from scratch)
 7. I learned how to connect data using SQL, then connecting Schema table to Neon, and then ultimately deploying to Render. 
8. Most importantly I learned that I don't need to be afraid to fail because without failure I wouldn't be able to even comprehend what success looks like

**What I'm proud of:**   I am proud of the research I was able to do regarding CSS styling that taught me better ways to structure certain pages.


**What challenged me:** 
Overthinking. Overthinking. Overthinking.

**Future ideas for how I'd continue building this project:** 
1. I would create a confetti feature when users add a suggestion.
2. I would include a subtitle/description regarding each category for clarification purposes.
