# CMPE 202 Fall 2022 Airport Management Application by Team Project Data Structures Deadheads
Implementing an end2end Airport Management system that can be configured for a given airport (Web interface or Mobile app interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights
# Team
* Chirag Arora - 016726567
* Sai Prashanth Gunthala - 016063060
* Santosh Sai Gowtham Pasala - 016075813
* Lokesh Reddy Gangasani - 016655951
# Team Contributions
* Chirag Arora - Frontend: Create pages for Airplane Component, Enable or disable one or more gates and Assign Baggage Carousel   Backend: API Implementation, AWS EC2 Deployment, Load Balancing, Crontab Job Configuration.
* Sai Prashanth Gunthala - Create Airline component, Create Enable/Disable Arrival and Departure Schedule and Random Gate Assignment Backend: API Implementation, AWS configurations, RDS Configuration, Testing Endpoints.
* Santosh Sai Gowtham Pasala - Create Passenger pages, Retrive Enable/Disable Arrival and Departure Schedule Backend - API Implementation for view Schedule and Handle DB.
* Lokesh Reddy Gangasani - Frontend: Create Login, Registration pages for Passengers, Airline Employees. Backend: Handle DB, mockdata into DB.
# Git repo
https://github.com/gopinathsjsu/team-project-data-structure-deadheads
# Sprint Task Sheet
* https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Sprint%20Sheet%20Team.xlsx
* https://docs.google.com/spreadsheets/d/1uZi71LPjdIcSyliLDj__dUhBypxoDETK/edit?usp=share_link&ouid=100152913542243882297&rtpof=true&sd=true
# Project journal
https://github.com/gopinathsjsu/team-project-data-structure-deadheads/tree/main/Sprint%20Journal
# XP Core Values
* Communication - We consider that communication is important in software development because it allows information to be exchanged among team members. Our team met in scrums every Saturday, and we used Project Dashboard to manage the project and monitor our user stories. We established open and effective communication to keep everyone up to date on our responsibilities and timeframes.
* Feedback - We had a meeting after each sprint cycle only to provide comments. We displayed our components to each other and inquired input to the components of others on how they may be improved.
* Simplicity - The team was able to avoid include unneeded components and stick to the project requirements to do just what was really essential, such as keeping the system design as basic as possible to make it easier to maintain, support, and change. This aided in keeping our code clean and organized. We took a similar approach to documenting progress and managing the repository.
# Tech Stack
* Frontend: React JS, HTML5, CSS
* Backend: Node JS Express JS
* Database: MySQL (hosted on Amazon RDS)
* Deployment : Amazon EC2 Autoscaled cluster with Load balancing
# Feature Set
* Airport Employee login
* Airline Employee login
* Passenger view
* Airport Employee view
* Airline Employee view
* Random Gate Assignment
* Baggage Belt Assignment
* Retrive Arrival/Departure Information
* Manage Arrivals and Departures 

# Design Decisions
* We wanted to emphasize on the functionality by going with a clean and minimalistic design for the UI. 
* MYSQL was hosted on AWS RDS. We chose mySQL because we wanted to enforce entity relationships and because the majority of the data was structured.
* For frontend, we used react for faster page load and reload due to virtual DOM.
* Node JS for backend for its ability of asynchronous calls and eventloop.

# Diagrams
## Use Case Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Airport%20Management%20System%20UML%20Diagram.drawio%20(1).png "Logo Title Text 1")
## Architecture Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Architecture%20Diagram.drawio.png "Logo Title Text 1")
## Deployment Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Deployment%20diagram.png "Logo Title Text 1")
## Component Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/component%20diagram.png)
# How to run the web-app
* git clone https://github.com/gopinathsjsu/team-project-data-structure-deadheads
* Install dependencies for both frontend and backend npm install
* Run backend - npm run start
* Run frontend - npm run start

Screens
-------------------------------------------------------------------
Login Screen
------------------------
<img width="1270" alt="Screen Shot 2022-12-04 at 10 51 15 PM" src="https://user-images.githubusercontent.com/16273021/205567931-a67c3010-5a1a-419d-8cda-208b922be885.png">

Airline Employee Screen
-------------------------
<img width="1208" alt="Screen Shot 2022-12-04 at 10 52 18 PM" src="https://user-images.githubusercontent.com/16273021/205568124-138d960e-0dbf-4568-9db2-80239dc41350.png">

Airport Employee Screen
---------------------------
<img width="1277" alt="Screen Shot 2022-12-04 at 11 13 07 PM" src="https://user-images.githubusercontent.com/16273021/205574138-4b5c939e-77ab-49f4-a9b6-0c0eee18933a.png">


Passenger Screen
----------------------------
<img width="1262" alt="Screen Shot 2022-12-04 at 11 20 39 PM" src="https://user-images.githubusercontent.com/16273021/205576628-a846146d-8c17-4e4c-ae27-455ca8a7cfd3.png">


