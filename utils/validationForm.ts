export const formFieldsNotEmpty = (form: any) => {
    const errors: any = {};

    Object.keys(form).forEach((key) => {
        if (!form[key]) {
        errors[key] = 'Required';
        }
    });
    return errors;
}