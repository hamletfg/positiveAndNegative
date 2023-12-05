import LoginPage from '../pageobjects/swagLogin.js'

describe('Positive test for standard_user login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })
})

describe('Negative test for standard_user login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('standard_user', 'randomPassw0rd')
    })
})

describe('Positive test for locked_out_user login', () => {
    it('should not login with valid username credentials and invalid password', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('locked_out_user', 'secret_sauce')
    })
})

describe('Negative test for locked_out_user login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('locked_out_user', 'randomPassw0rd')
    })
})

describe('Positive test for problem_user login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('problem_user', 'secret_sauce')
    })
})

describe('Negative test for problem_user login login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('problem_user', 'randomPassw0rd')
    })
})

describe('Positive test for performance_glitch_user login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('performance_glitch_user', 'secret_sauce')
    })
})

describe('Negative test for performance_glitch_user login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('performance_glitch_user', 'randomPassw0rd')
    })
})

describe('Positive test for error_user login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('error_user', 'secret_sauce')
    })
})

describe('Negative test for error_user login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('error_user', 'randomPassw0rd')
    })
})

describe('Positive test for visual_user login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('visual_user', 'secret_sauce')
    })
})

describe('Negative test for visual_user login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('visual_user', 'randomPassw0rd')
    })
})
