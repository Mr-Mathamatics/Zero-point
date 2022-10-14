export const SignupSchema = {
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
        },
    },
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
        },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: {
        maximum:30,
      },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:8,
        },
    },
    confirm_password: {
        presence: { allowEmpty: false, message: 'is required' },
        equality: "password",
        length: {
          maximum:30,
          minimum:8,
        },
    },
};