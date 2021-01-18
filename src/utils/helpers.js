export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
export const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  

 export const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // Validate form errors being empty
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
  
    // Validate the form was filled out
    Object.values(rest).forEach((val) => {
      val === '' && (valid = false);
    });
  
    return valid;
  };

// Function to reset form
export function resetForm() {
  setFormState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
}

