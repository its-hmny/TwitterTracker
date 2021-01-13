# TwitterTracker
A webapp to analyze realtime geolocalized data stream from Twitter

## What is
This program is meant to be a tool for analize realtime data stream (optionally geolocalized) coming from Twitter itself through their API. There are some insight tabs that deliver some quick info on the tweets as a whole as well as some simple filtering functionalities. The webapp give you the possibility to get an e-mail notification when a certain volume of tweet has been collected as well as the possibility to tweet for you on your account with a summary of your collection (more on that later).

## How to
Before dong anything you need to install all the dependencies:
``` console
usr@computer:~/TwitterTracker$ cd frontend && yarn install
usr@computer:~/TwitterTracker$ cd backend && yarn install
```
To start the development servers simply run: (alternatively you can start distinctly both the client and the server)
``` console
usr@computer:~/TwitterTracker$ yarn start
```
If you want to use a production build simply build the frontend and copy the resulting build folder in frontend/ to /backend/ then start the server as always.

## Regarding the authentication
The authentication is a little tricky aspect to work with, here's a guide that maybe can help you:
- Make an account and download (ngrok)[https://ngrok.com/]
- Follow instructions to activate account and create conf file
- Open conf file, and under your key paste
```yml
tunnels:
  tcp_backend:
    proto: http
    addr: 4000
  tcp_frontend:
    proto: http
    addr: 3000
```
- Start up ngrok with `./ngrok start -all --config ~/.ngrok2/ngrok.yml --region=eu`
- You'll see your terminal gets taken over and mapping are displayed. copy the public URL for the frontend (port 3000)
- Append `/auth` to your link, so that it looks something like `http://foo.eu.ngrok.com/auth`
- Paste it in `credentials`, as the value for `auth_url`
- Paste it in `index.js` in the list for CORS sources
- Include your link in the accepted callbacks from Twitter
- DON'T stop the ngrok process or you'll have to do it again
- Use the app normally

## Credits
This project was made by [me](https://github.com/its-hmny), [Mattia Guazzaloca](https://github.com/mettz), [Lorenzo Liso](https://github.com/notchla), [Paolo Marzolo](https://github.com/pollomarzo), [Matteo Lorenzoni](https://github.com/Lorenz08) as an assignment for the Software Engineering course at University  of Bologna.
A demo will be temporary avaiable [here](http://34.65.106.228:8080/)
