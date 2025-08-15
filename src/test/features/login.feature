Feature: @login @editlabel @NewList

@smoke
Scenario: Logins

Given I have accessed the google keep Login Page
When a user enters the username "jajaopobo138@gmail.com", the password "Oneblood147@", and clicks on login button
And user clicks on the Menu Button
And user clicks on edit labels Button
And user clicks on create labels Button
And user inputs "KeepNotePadTag" as Label tag
And user clicks done button


@smoke
Scenario: Select NewList

Given I have accessed the google keep Login Page
When a user enters the username "jajaopobo138@gmail.com", the password "Oneblood147@", and clicks on login button
And user select new list button

