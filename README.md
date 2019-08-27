# intellij-tslint-subdirectory

This project was created to demonstrate that in Intellij IDEA 2019.2.1, tslint.json files are no longer recognized by the IDE if they're in a subdirectory of an Angular modular application.

First create an Angular application using "ng generate application", so that it's placed in the projects folder, and has its own root tslint.json that inherits from the higher project-level tslint.json.

Then add a subdirectory in that application's src/app, and add a new tslint.json that changes one or more rules.

This new tslint.json will not be used by Intellij IDEA, even for files in that same subdirectory.
