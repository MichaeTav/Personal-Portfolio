import mcc from "../assets/mcc-logo.png";
import ff from "../assets/ff-logo.png";
import hd from "../assets/homedepot-logo.jpeg";
import raleys from "../assets/raleys-logo.png";
import rri from "../assets/rri-logo.jpg";

const projects = [
  {
    type: "project",
    title: "Personal Website",
    commentURL: "/personalwebsite",
    githubCommentTitle: "personalwebsite",
    dateCompleted: new Date("2023-05-26"),
    description:
      "The website you are currently on. This is the second version of my site and you can see the first version on the github branch v1. I created a new version to simplify the design and use new frameworks. It was created using Vite, React, and ChakraUI and is currently hosted using Cloudflare pages.",
    githubURL: "https://github.com/MichaeTav/personal-portfolio",
    demoURL: "https://michaeltavera.dev/",
  },
  {
    type: "project",
    title: "GovSort",
    commentURL: "/govsort",
    githubCommentTitle: "govsort",
    dateCompleted: new Date("2023-05-10"),
    description:
      "GovSort was my final project for my political science class. We were tasked with creating a project that reflects what we have learned throughout the semester. So I decided to make a game about sorting the different topics we learned. The topics include: presidents, supreme court cases, amendments, and general U.S. history. I wanted to make something that was fun and easy to play.",
    githubURL: "https://github.com/MichaeTav/GovSort",
    demoURL: "https://www.govsort.com/",
  },
  {
    type: "project",
    title: "Due Date Discord Bot",
    commentURL: "/discordbot",
    githubCommentTitle: "discordbot",
    dateCompleted: new Date("2023-02-20"),
    description:
      "This discord bot connects to the Canvas LMS graphql API to retrieve the due dates of upcoming assignments. It implements weekly reminders and a slash command to retrieve all assignments.",
    githubURL: "https://github.com/MichaeTav/Canvas-Assignments-Discord-Bot",
  },
  {
    type: "project",
    title: "Shrink Tracker",
    commentURL: "/shrinktracker",
    githubCommentTitle: "shrinktracker",
    dateCompleted: new Date("2022-05-26"),
    description:
      "ShrinkTracker is a full stack web application that keeps track of perishable items expiration date. It allows for multiple users along with different roles that correspond to the departments you might find in a grocery store. Each user only has access to their department by using role based authentication. One thing I would like to add to this project is the ability to upload images for each product and store them in S3.",
    githubURL: "https://github.com/MichaeTav/ShrinkTracker",
  },
  {
    type: "project",
    title: "Sars Notifications",
    commentURL: "/sarsnotifications",
    githubCommentTitle: "sarsnotifications",
    dateCompleted: new Date("2022-02-04"),
    description:
      "SARS Notifications is a browser extension that enables sound notifications when a new student enters the drop in list for SARS(an online student management system). It can only be turned on once the correct webpage is open and allows for volume adjustment. The values for the volume persist through local storage in the browser allowing for the users choice of volume to be saved.",
    githubURL: "https://github.com/MichaeTav/SARS-Notifications",
  },
];

const experience = [
  {
    type: "experience",
    title: "STEM Tutor",
    company: "MiraCosta College",
    dateCompleted: new Date(),
    timeRange: "Aug 2021 - Present",
    logo: mcc,
    description:
      "🎓 Tutored students in math, computer science, and physics courses as a STEM tutor at MiraCosta College. Guided individuals towards improvements in their academic performance and nurtured a profound understanding of these subjects. Continuously honed my tutoring skills while deepening my knowledge in math, computer science, and physics. Cultivated a strong sense of community and shared responsibility among fellow tutors and coaches. #STEMTutor #Mathematics #ComputerScience #Physics #AcademicSupport",
  },
  {
    type: "experience",
    title: "Order Picker",
    company: "R&R Industries",
    dateCompleted: new Date("2023-01-15"),
    timeRange: "Jun 2022 - Jan 2023",
    logo: rri,
    description:
      "⚙️ Efficiently operated as an order picker at R&R Industries, ensuring precise and swift fulfillment of incoming orders. Meticulously prepared orders for the subsequent stages of production, maintaining a focus on accuracy throughout the process. Attained forklift certification and skillfully utilized the forklift on a daily basis to enhance productivity. #OrderFulfillment #Precision #ForkliftOperator",
  },
  {
    type: "experience",
    title: "Sales Associate",
    company: "Home Depot",
    dateCompleted: new Date("2021-08-15"),
    timeRange: "Jun 2021 - Aug 2021",
    logo: hd,
    description:
      "💡Gained valuable experience working in the electrical department at Home Depot. Deepened knowledge of electrical systems while assisting customers in finding the perfect products to meet their needs. Ensured shelves were consistently stocked to cater to customer demands. Embraced the opportunity to learn from experienced coworkers, further enhancing expertise in the field. #ElectricalExpertise #CustomerAssistance #ContinuousLearning",
  },
  {
    type: "experience",
    title: "Meat Cutter",
    company: "Frazier Farms",
    dateCompleted: new Date("2020-08-15"),
    timeRange: "Jan 2019 - Aug 2020",
    logo: ff,
    description:
      "🔪 Mastered various cuts of high-quality meats (beef, pork, chicken, and seafood) and efficiently processed them down. Showcased expertise in operating grinders, saws, tenderizers, and slicers. Ensured optimal product presentation by skillfully packaging and arranging items on shelves. Seamlessly lifted 50-90 lb boxes onto shelves. Delivered outstanding customer service by assisting with special orders. #MeatCuttingSkills #ProductPresentation #CustomerSatisfaction",
  },
  {
    type: "experience",
    title: "Apprentice Meat Cutter",
    company: "Raleys",
    dateCompleted: new Date("2019-01-15"),
    timeRange: "Oct 2018 - Jan 2019",
    logo: raleys,
    description:
      "🔪 Explored diverse cuts of premium meats (beef, pork, chicken, and seafood) and honed skills in their efficient processing. Gained proficiency in operating grinders, saws, tenderizers, and slicers. Showcased an eye for detail by meticulously packaging products and arranging them on shelves for maximum appeal. Successfully handled the lifting of 50-90 lb boxes onto shelves. Provided exceptional customer support by assisting with personalized orders. #MeatCuttingApprentice #ProductPresentation #CustomerSupport",
  },
  {
    type: "experience",
    title: "Meat Clerk",
    company: "Raleys",
    dateCompleted: new Date("2018-10-15"),
    timeRange: "Mar 2017 - Oct 2018",
    logo: raleys,
    description:
      "🥩 Supported meat cutters in daily tasks within the meat department, fostering a collaborative team environment to deliver top-notch customer service. Assisted customers at the service counter, contributed to the meat load process, and diligently maintained department cleanliness during nightly routines. #Teamwork #CustomerService #MeatDepartment",
  },
  {
    type: "experience",
    title: "Courtesy Clerk",
    company: "Raleys",
    dateCompleted: new Date("2017-03-15"),
    timeRange: "Jun 2015 - Mar 2017",
    logo: raleys,
    description:
      "🛒 Contributed to front-end operations at Raleys grocery store as a courtesy clerk. Expertly handled tasks such as cart retrieval, efficient bagging of groceries, and providing valuable assistance to customers. #CustomerService #FrontEndSupport #Teamwork",
  },
];

const blog = [];

// Merge the arrays into a single array
const mergedData = [...projects, ...experience, ...blog];
mergedData.sort((a, b) => b.dateCompleted - a.dateCompleted);

// Usage example for the home tab
const homeItems = mergedData;

export { projects, experience, blog, homeItems };
