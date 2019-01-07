# Exhibit A

I want a project to showcase a variety of technologies in Angular.

## The List

- Angular 6
	- CLI
	- Typescript
	- NPM
	- Karma
	- Custom Components/Elements
	- Router
	- Route Transitions
- Git
- PWA
- Google Authentication
- Web Components

## Coming Plans

- Font Icons
- API Services
- Heroku Connection
- Micro Interactions
	- Disable Button On API Call
	- New List Item Entrance
	- Infinite Scroll?
	- Error Messages
- PWA: Offline Mode & Service Workers
- PWA: Push Notifications
- Vaadin Forms
- Session Handling in Node
- Finance App - Ultimate Insight on Spending
	- CRUD
		- Read
		- Create
			- Merchant
			- Items
				- Cost Per, Free, Rewards, etc.
			- Sub Total
			- Grand Total (generate tax rate programmatically)
			- Category
			- Tag
	- Obligatory Bill Reminder Feature
	- Transactions Management
		- Configure recurring payments/bils
		- Apply a returned item flag on all or part of a transaction
		- Concealed transaction flag
	- Purchase History Breakdown
		- Spending by project, group, hobby, activity, etc..
			- See how much you've spent on your renovation, car restoration, and other projects or hobbies.
		- Spending by category
			- Spending by category (or all) comparisons by day, week, month, year, or random
		- Spending by tag
		- Spending by merchant
			- Pie chart of top spending groups by merchant
		- Spending by credit/debit card
		- How much has been spent on tax?
		- No spending streaks
		- Analytical insights on spending
			- e.g. "you spent 3x more this week at starbucks than you have for the past 3 weeks...", etc. 
			- NOTE: able to add exceptions for purchases that would tip the scales and generate false positives
			- NOTE: enable a way to track how much has been save through coupons, rewards, gifts, or free items
			- NOTE: add a feature to allow the user to configure custom attributes that can be used to filter on and analyze 
- Recruiter Communication Tracker App
- Medication Consumption Tracker App



# Performance Metrics

### **1-04-2019**
> Lumo Styles (Icons are killing the load time for slow 3g)

Regular WIFI (122.3 Mbps download speed)       
<img src="src/assets/readme/performance/2019-01-04-lumo-styles__wifi.png" alt="metric" width="500"/>

Slow 3G                          
<img src="src/assets/readme/performance/2019-01-04-lumo-styles__3g.png" alt="metric" width="500"/>


---

### **1-03-2019**
> Web Component Configuration & Shims

Regular WIFI (122.3 Mbps download speed)       
<img src="src/assets/readme/performance/2019-01-04-web-component__wifi.png" alt="metric" width="500"/>

Slow 3G                          
<img src="src/assets/readme/performance/2019-01-04-web-component__3g.png" alt="metric" width="500"/>


---

### **1-01-2019**
> Custom Angular Header Component & Router (no affect on performance) Implementation

Regular WIFI (122.3 Mbps download speed)       
<img src="src/assets/readme/performance/2019-01-04-ng-component__wifi.png" alt="metric" width="500"/>

Slow 3G                          
<img src="src/assets/readme/performance/2019-01-04-ng-component__3g.png" alt="metric" width="500"/>


---

### **12-19-2018**
> Google Auth implementation

Regular WIFI (122.3 Mbps download speed)       
<img src="src/assets/readme/performance/2018-12-19-wifi.png" alt="metric" width="500"/>

Slow 3G                          
<img src="src/assets/readme/performance/2018-12-19-3g.png" alt="metric" width="500"/>


---

### **12-12-2018**
> Boilerplate Angular CLI application with angular-pwa

Regular WIFI (122.3 Mbps download speed)       
<img src="src/assets/readme/performance/2018-12-12-wifi.png" alt="metric" width="500"/>

Slow 3G                          
<img src="src/assets/readme/performance/2018-12-12-3g.png" alt="metric" width="500"/>

# Notes

- Needed to update the base url in index.html in order for prod build to work (apache and http-server).
- Revision 393987 - To Read a JSON file in TS, a type declaration is needed for a successful import.
  - https://hackernoon.com/import-json-into-typescript-8d465beded79