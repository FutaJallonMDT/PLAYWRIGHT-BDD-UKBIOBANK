import { Page, Locator, expect } from '@playwright/test';


export class loginpage {

  readonly page: Page;
  readonly username: Locator;
  readonly nextButton: Locator;
  readonly password: Locator;
  readonly passwordNext : Locator
  readonly MenuBurger: Locator
  readonly editBtnLabel : Locator
  readonly createLabel: Locator
  readonly labelTagTxt: Locator
  readonly doneBtn: Locator
  readonly addNewList: Locator 
  readonly closeBtn: Locator

   constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Email or phone' });
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.password = page.locator('input[type="password"]');
    this.passwordNext = page.getByRole('button', { name: 'Next' });
    this.MenuBurger = page.getByRole('button', { name: 'Main menu' });
    this.editBtnLabel = page.locator('[aria-label="Edit Labels"]');
    this.createLabel = page.locator('[aria-label="Create new label"]');
    this.labelTagTxt = page.locator('input[placeholder="Create new label"]');
    this.doneBtn = page.getByRole('button', { name: 'Done' });
    this.addNewList = page.locator('[aria-label="New list"]');
    this.closeBtn = page.locator("//div[text()='Close']").nth(0)
    
   }
    
   async expectOnLoginPage() {
  await expect(this.username).toBeVisible();

  }

  async EnterUserloginDetails(user: string, pass: string) {
    await this.username.fill(user);
    await this.nextButton.click();
    await this.password.fill(pass);
    await this.passwordNext.click();    
  }

  async EnterLabelTag(tagName : string){
   await this.labelTagTxt.fill(tagName)
  }

  async clickNewlistBtn(){

  await this.addNewList.waitFor({ state: 'visible' });
  await this.addNewList.click();

  }

}

