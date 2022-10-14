export const ForgetPasswordSchema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: {
        maximum:30,
      },
    },
  };