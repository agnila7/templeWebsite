# TempleWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0. This is a website built for the organization -Buddhist Society of Ontario. Some of the key features of the site -

1. Event Calendar (Event Section)- Users can see upcoming events from the calendar. Admins have privileged access to update and add new events in the calendar. Updating is not accessible to the general users.

2. Carousal (Media Section)- There is a photo album that shows recent uploaded photos in the website. ONly admins can upload photos.

3. File Upload and download (Media Section)- Admins can upload dosuments which will be available to download. Users can see and download files.

4. Email - in Contact section- there is a form which users can submit to send an automated email to the organization email address.

5. Authentication and authorized access control - There is standard login, logout, register feature to control access to certain features. Https protocol is used with server certificate to encrypt data. User passwords are hashed and saved - that way no one can know the exact user passwords. There is also RSA encryption technology to pass certain information more secured way that can only be decrypted with private key.

6. Showing Toast message for user operation such as successful login, unauthorized operation etc

7. MongoDb is used to store dataset. Uploaded files and photos are stored in certain directory in the server. There is a maintenance script to monitor and maintain the directory size for uploaded files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
