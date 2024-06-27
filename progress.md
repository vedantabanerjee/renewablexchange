### FEATURES:
- energy grid locator
- energy dashboard
- educational section
- notifications

### BUGS/ISSUES:
- Overall reactivity of the website, specially the cards in the landing page bleeding into each other
- Bg image turns black on smaller screen


### MATERIAL QUEUE:
- Map data 
- blogs api
- app icon

### vedanta banerjee
#### features added:
- implemented footer element
    - Copyright element
    - Link to the Github Repo

- implemented home page
    - implemented a landing page
        - added bg image
        - adeed main hero text
        - added information animation
        - added additional hero card texts and information
        - button to dashboard hotlink

- implemented the dashboard page
    - A line chart showing the growth trends of green energy in india over the last 10 years
    - A pie chart showing the division of green energy production in india
    - A map of India showing the different locations of microgrids in india on an Interactive map
    - Two card component showing the top 5 microgrids in production and in-making that produces green energy

- added the chat page
    - implemented a chatbox [interface] that will take input prompts from the user and generate output via llm

- implemented new blogs page
    - Custom calls the NewsAPI with specified params to fetch blogs 
    - Displays those blogs in cards to the user which the user can open and read (redirects)


#### bugs/issues fixed:
- the bg image was bleeding into the nav bar
- 'Go to Dashboard' button is misplaced
- The map interface wasnt loading
- Two cards are unequal in size often bleeding into one another
- The chat box was obnoxious in size often glitching
- The API was giving 404 - a fetching error caused due to not finding the api file - solved.


newsapi api key:
2c8a3dec17ae4eeda3bed9d853740c52



