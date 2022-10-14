export const AddCourseSchema = {
    title: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
      },
    },
    category: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    sub_category: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    lavel: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    price: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    learning_objectives: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    // banner_image: {
    //     presence: { allowEmpty: false, message: 'is required' },
    //     length: {
    //         maximum:30,
    //     },
    // },
    // details: {
    //     presence: { allowEmpty: false, message: 'is required' },
    //     length: {
    //         maximum:30,
    //     },
    // },
    
};