# UFOs
## Overview of Project
The purpose of this page is to filter the UFO sighting data. We have a dataset of over one hundred sightings that we have created in a table on the page. We have built a filter for the data based on date, city, state, and shape of sighting.

## Results
The filtering inputs are set up to activate the filter function whenever inputs are entered. By establishing an event listener that looks for changes made in the input boxes. This will happen instantaneously no need to click a search button. 

## Summary
A drawback of the current form of this page is that it populates the table with the entire dataset. While with the data we have of just over one hundred entries is not that taxing, if we were able to expand the data we have it would make the page unwieldy. 

One solution to this would be add to the html container that holds the table we have built. We could create a responsive table by adding <div style='overflow-x:auto;'> around the table container. That should work by adding a scroll bar to the table. 

Another option would be instead of populating the enire dataset we could only display parts of the data. While more research will be needed to properly execute this idea. By adding to the html we might be able to come up with a way to display the table with page breaks were we could only display ten rows at a time. Another idea would be editing the tableBuild function to only display the first ten items. Again more researching will be needed for this idea.  