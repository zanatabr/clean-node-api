import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpRsponse = sut.handle(httpRequest)
    expect(httpRsponse.statusCode).toBe(400)
    expect(httpRsponse.body).toEqual(new Error('Missing param: name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpRsponse = sut.handle(httpRequest)
    expect(httpRsponse.statusCode).toBe(400)
    expect(httpRsponse.body).toEqual(new Error('Missing param: email'))
  })
})
