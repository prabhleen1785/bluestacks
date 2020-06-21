In the project directory, you can run:

### Read this before going ahead

To run this project, run the following commands after reaching the destination folder

1. ### `npm install`

2. ### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Random data is used to render some information about the options which is kept under data.js file.

react-i18next is a powerful internationalization framework for React which is used for language Switching.

react-datepicker is used  for calendar.

### Test Cases for the Web Page
Description | Execution steps | Expected output|
|--- | --- | ---|
|Localization |Select German language from Language selector dropdown | Static Data,Tabs text should be shown in Japanese|
|Campaign Date change | Select today's date in Past Campaign tab for any campaign | The campaign should be removed from Past campaign tab and appear in Live Campaign tab| 
|View Pricing Functionality | Click on View Pricing in the row | a modal with relevant information of the campaign should open|
|Reschedule Functionality | by opening a calendar on clicking the Schedule again icon | Date should be updated in the first  column and time diff should be updated|
|UI Responsiveness | Check on different mobile devices | UI should remain stable.(color,scheme,layout wise)|
|Relevance of Tabs | Click on each tab to see the data | Data should be relevant interms of date|








