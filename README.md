Check the page on: https://rawgithub.com/kabaros/UsTwoTest/master/index.html

This JavaScript code pulls data from a Google Document spreadsheet (https://docs.google.com/spreadsheet/ccc?key=0AgHQTYoK7XiNdDljTlR2Ry1PZU1FRVY3Ukc3eGpMRGc&usp=sharing) and displays it on a page.

It was  hard to do this exercise as the requirements were too broad. But I have tried to convey some elements and practices that I would consider necessary in production quality code:

1. TDD: In js_specs, there are specs for parsing the google feed. This seemed like a perfect use case for writing specs first and helped me with catching bugs, documenting them and refactoring with confidence.

2. Modules: developed the components as modules

3. Templates: used Mustache templating engine to construct the HTML page

Notes: I haven't used a framework because of the simplicity of the requirement and used simple/default styling from bootstrap as there were no styling requirements. I removed the "use strict" from the JavaScript code to make it viewable with rawgithub .

================================
"Make a website that pulls data from a Google Doc Spreadsheet and displays it.

You can use any framework you like, such as ember/angular/whatever, but remember that this test is intended as a way to show how you structure your code, your preferred JavaScript practices and approach problems.

Not super specific I know, but please try to apply the best practices you would normally apply in a project in order to show case your skills."

===============================

