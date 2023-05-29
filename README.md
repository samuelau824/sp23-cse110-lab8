# Lab 8 - Starter
Name: Samuel Au
1. I would fit the automated tests inside a Github actions that runs whenever code is pushed. This is because we want to test the functionality of our pushed code combined with our original code. By setting up automated tests, we can easily tell if your new code can be combined with your old code.
2. No, I would not use E2E testing to check if a function is returning the correct output because an easier approach is to use unit testing. E2E testing should be used to test different interactions of functions on a large scale, instead of just a singular function. 
3. I would not not use a unit test to test the "message" feature of a messaging application, since messaging requires interactions with many different features. A more appropriate test would be E2E testing to check to see if messages are properly sent and recieved.
4. I would use a unit test to test the "max message length" because it can be accomplished by calling the function with a message over 80 characters and see if we have the expected result, where the user is not allowed to type.

![Screenshot](assets/Screenshot%202023-05-28%20at%2010.33.27%20PM.png)