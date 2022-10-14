export const ChangePasswordSchema = {
    
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:8,
        },
    },
    new_password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:8,
        },
    },
    confirm_new_password: {
        presence: { allowEmpty: false, message: 'is required' },
        equality: "new_password",
        length: {
          maximum:30,
          minimum:8,
        },
    },
};