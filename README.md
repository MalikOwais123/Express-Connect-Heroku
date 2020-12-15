# starting 
    yarn init -y
        this will create package for you

Now we can build our own server by node but in real life people don't do it we can use open source server like express

`EXPRESS` 
    Industry standard for making servers in node

    so add our first pacakge
    yarn add express

# setting up your main.js file 

WHAT IS GET?
    In the world of web browser normally when you visit any website you are requesting to server which is 
    `GET REQUEST ....`
    However if you sumbit traditional html from and hit the submit button then your brwoser hit the 
    `POST REQUEST ....`
.get having two arguments
    1 ) the url to which will be appear in the web
    2 ) having the function with two parameters
        1-> Express passes it for us the request object that has been a certain data
            coming from user with the request.
        2-> response to that request!!

# form in html
    having two attributes
        action --> it will have the URL
        mehtod --> POST or GET (By default it is GET)


# Run your app to view by typing following command in terminal
command: 
        `node main`

# Javascript template engine for HTML
@
    `ejs`
    install {yarn add ejs}
# THE QUESTION IS HOW WE CAN ADD CSS FOR OUR HTML
    Because our client will never see the home.ejs in the browser
    we can tell and set our rule by making public folder

1) make public folder in the direcotry
