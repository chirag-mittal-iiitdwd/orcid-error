# orcid-error

Main problem : The data is being recieved in backend but we are not able to pass it to frontend

I copied every step mentioned in this tutorial ```https://www.youtube.com/watch?v=cD17CYA1dck&t=3673s``` at 1:01:43 the data has arrived in the tutorial, but in there we are getting ```undefined```, i have followed exact same steps, wherever it was given for google i changed it to orcid.

I have added 4 images in the repo,

The following points describe every image

1. We have to go to login route for loggining ```https://github.com/chirag-mittal-iiitdwd/orcid-error/blob/main/1_login_route.png```
2. Then we will be redirected to the orcid app ```https://github.com/chirag-mittal-iiitdwd/orcid-error/blob/main/2_orcid_auth_screen.png```
3. Then we will be sent back to our website, where the console log is shown in the sceeenshot. The details are coming as undefined and with a lot of errors ```https://github.com/chirag-mittal-iiitdwd/orcid-error/blob/main/3_error_in_console.png``` , although we are not getting cors error with the current code but still data is not availabe in frontend
4. The console log in the backend, where details are coming ``` https://github.com/chirag-mittal-iiitdwd/orcid-error/blob/main/4_output_in_console.png ```


Please share a example where the orcid-oauth is implimented in ``` MERN stack ``` and please also recommend a package for the same, currently we are using passport.js
