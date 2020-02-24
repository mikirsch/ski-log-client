# Fresh Tracks client
This is the client for the Fresh Tracks ski logger.  The server can be found [here](https://github.com/mikirsch/ski-log-server).  The live client can be found [here](https://ski-tracker.mikirsch.now.sh/).  

##Summary
This app is designed to allow users to easily track their winter sports activity.  There is a simple interface to record a day, which can be as minimal as a date and the name of the ski area.  If desired, the actual time spent and vertical gained can be logged, and freeform notes can be added.  There is a tool to help calculate vertical gained over the course of a day.  The user can go back to view their activity over time, including individual logs or aggregated statistics.

##Tech stack
Client is done in React and deployed on Zeit.  Server is Express on NodeJS with PostgreSQL for persistence, deployed on Heroku.

##Screenshots
<img src='./img/fresh-tracks-screenshot-1.png alt='splash page screenshot' width='800' />
<img src='./img/fresh-tracks-screenshot-2.png alt='dashboard screenshot' />
<img src='./img/fresh-tracks-screenshot-1.png alt='add data page screenshot' />
