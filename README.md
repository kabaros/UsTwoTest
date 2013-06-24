UsTwoTest
=========
This JavaScript code pulls data from a Google Document spreadsheet (https://docs.google.com/spreadsheet/ccc?key=0AgHQTYoK7XiNdDljTlR2Ry1PZU1FRVY3Ukc3eGpMRGc&usp=sharing) and displays it on a page.

It was  hard to do this exercise as the requirements were too broad. But I have tried to convey some elements and practices that I would consider necessary in production quality code:

1. TDD: In js_specs, there are specs for parsing the google feed. This seemed like a perfect use case for writing specs first and helped me with catching bugs, documenting them and refactoring with confidence.

2. Modules: developed the components as modules

3. Templates: used Mustache templating engine to construct the HTML page

Notes:

I haven't used a framework because of the simplicity of the requirement. I didn't care about the styling of the output and used Twitter bootstrap.