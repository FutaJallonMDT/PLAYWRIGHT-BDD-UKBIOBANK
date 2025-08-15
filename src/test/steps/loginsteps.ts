import { Given, When, Then } from '@cucumber/cucumber';
import {Page, Browser, ChromiumBrowser, expect, chromium } from '@playwright/test'
import {loginpage} from '../pages/loginpage'; 

let lpage : loginpage;


Given('I have accessed the google keep Login Page', async function () {
          lpage = new loginpage(this.page);
           await lpage.expectOnLoginPage();
         });
         
 When('a user enters the username {string}, the password {string}, and clicks on login button', { timeout: 20000 }, async function (user, pass ) {
    
    await lpage.EnterUserloginDetails(user, pass)
     
    
         });

When('user clicks on the Menu Button', { timeout: 20000 }, async function () {
           await lpage.MenuBurger.click();
         });

 When('user clicks on edit labels Button', { timeout: 20000 }, async function () {
           await lpage.editBtnLabel.click()
         });

When('user clicks on create labels Button', { timeout: 20000 }, async function () {
           await lpage.createLabel.click();
         });

 When('user inputs {string} as Label tag', { timeout: 20000 }, async function (tagName) {
          await lpage.EnterLabelTag(tagName)
         });

When('user clicks done button', { timeout: 20000 }, async function () {

           await lpage.doneBtn.click()
         });


 When('user select new list button', { timeout: 20000 }, async function () {
           await lpage.clickNewlistBtn()
         });