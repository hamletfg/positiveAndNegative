import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputUsername () { return $('#user-name'); }
    get inputPassword () { return $('#password'); }
    get loginButton () { return $('#login-button'); }
    get swagLabsHeader () { return $('.app_logo'); }
    get loginError () { return $('[data-test="error"]'); }

    /* This bit of automation code helps with entering user name
    and password along with clicking the login button */
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.loginButton.click()
    }

    async errorLogin (errorUserName, errorPassword) {
        await this.login(errorUserName, errorPassword)
        await expect(this.loginError).toBeExisting
    }

    async validLogin (validUserName, validPassword) {
        await this.login(validUserName, validPassword)
        await expect(this.swagLabsHeader).toBeExisting()
    }

    /*
    async errorUsers (userName, password) {
        await this.login (userName, password)
        if (userName = 'nonExisting_user') {
            await expect(this.loginError).toHaveTextContaining('Username and password do not match any user in this service')
        }
    
        else {
            await expect(this.loginError).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.')
        }
    }*/

    open () {
        return super.open();
    }
}

export default new LoginPage();
