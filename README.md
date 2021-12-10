# Exchange Demo
## App to send exchanges:

Developed with:
[![](https://miro.medium.com/max/671/1*nZXfv_XJ6f3S-qjAATWutA.jpeg)](https://docs.nestjs.com/)

## Explanation

  You can send exchange to anywhere and to anyone. The services in this project can do:
  
   1. Administrator actions management
   2. Transactions management 
   3. Register new exchangers and validate their profiles.

## First steps

Clone the repository:

This repo is a mono one, so, when you clone it, you can select wich project you work with. For this example we are gonna select **api**

```
$ git clone https://github.com/jalvarado96/exchange-back.git
```

Configure your user and password and press Enter. Then go to the project.

```sh
cd exchange-back
```

## Installation

Mircoservices require: 

1. [Node.js](https://nodejs.org/) v10+
2. [Swagger](https://swagger.io/) v4.8.0+
3. [TypeORM](https://typeorm.io/) v7.1.5+
4. [Postgres](https://www.postgresql.org/) v8.7.1+

Install all dependencies doing:

```sh
npm i
```

Then create a new .env file copying all environment variables of .env.example and set all values as bellow:



```sh
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_DATABASE
```

## Nodemailer

This server uses Nodemailer to send email. This uses Gmail SMTP and OAuht2 to authentication. 

To configure a new account, you can use this tutorial bellow: 

https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a

## Postgresql

You must create a new postgres database connection and use the credentials connection to set them in .env file.

## Running - Local Enviroment

To run project in watch mode (with nodemon).

    ```sh
    $ npm run start:dev
    ```
    
## License

Developed by Jeferson Alvarado