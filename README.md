**Introduction**

Congratulations on making it to the coding interview for the frontend developer internship at StyleAI! In this task, you will be developing a 'styles' menu in the sidebar of a website editor. This menu will allow users to change the theme of their site within the editor. This documentation aims to provide you with all the necessary information to complete the task successfully.

**Task Overview**

The task involves four main steps that you should follow to complete the task:
- Initialize any state variables to manage the Editor theme (`pages/Editor.jsx`)
- Implement the Sidebar styles menu (see Sidebar Implementation) (`components/editor/Sidebar/index.jsx` + any additional files)
- Update the Site using the selected theme colors (`components/editor/Site/index.jsx`)
- Store / Retrieve user's theme preferences using local storage (`pages/Editor.jsx` + any additional files)

The files that you will be working on include:
- `components/editor/Sidebar/index.jsx` (and any additional files needed)
- `components/editor/Site/index.jsx`
- `constants/siteThemes.js`
- `pages/Editor.jsx`
- `utils/…` (if you want to create any utility functions)

*Note: `styles/theme.js` is the global project theme, not the Editor theme. These colors should only be referenced when designing components. The Editor themes are in `constants/siteThemes.js`*.

**Sidebar Implementation**

Attached at the bottom of this document are mockups of the sidebar menu you will be implementing. Not all UX has been provided (animations, hover states, etc) on purpose. You are welcome to use the Framer Motion library for animations and MUI Icons for icons (both have already been added to package.json). 

**Time Expectation**

This task is designed to take an experienced developer roughly 30-45 minutes. However, since you may not be familiar with the structure of this repository and our coding practices, you may need more time. It is totally okay if you take more time.

**Resource Usage**

You are free to use any standard internet resources like StackOverflow or the ReactJS documentation, with the exception of language models like ChatGPT. If you use any external resource, please leave comments referencing where you got help from along the way.

**Tips for Getting Started**

Before getting started with the task, you should take the time to understand the repository's structure and coding practices. You can then proceed with the following steps:
- Begin by creating any new state variables in `Editor.jsx` to manage the theme of the editor. This state variable should be initialized to the default theme. The Editor will be responsible for all state/data management.
- Implement the 'styles' menu in the Sidebar component. The menu should display a list of available themes that the user can select from (see the attached mockups below). When a user selects a theme, the state variable you created in step 1 should be updated with the selected theme.
- In the Site component, update the site to use the selected theme colors.
- Finally, store the user's theme preferences using local storage in `Editor.jsx` (you may need to create some additional utility functions). You should retrieve the theme preference from local storage when the editor is opened and apply it to the editor theme state variable.

If you encounter any issues or get stuck along the way, please reach out to your interviewer for assistance.

**Conclusion**

This task is designed to test your ability to work with React components, manage state variables, and utilize local storage. We wish you the best of luck in completing this task and look forward to reviewing your work.

**Mockups**

![Desktop - Editor](https://user-images.githubusercontent.com/37320248/236954495-03675128-f887-43cf-bace-368c8e7bda1f.png)

![Sidebar Instructions](https://user-images.githubusercontent.com/37320248/236954508-bff79e20-af08-481a-b982-8300a3e240f2.png)

