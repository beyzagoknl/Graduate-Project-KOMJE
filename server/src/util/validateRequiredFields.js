/**
 * This function will return a string describing the error if the given object has not properties required.
 * If there is no error, it will return an empty string.
 *
 * object - The object to check
 * allowedFields - An array of strings denoting the properties that are allowed
 */
const validateRequiredFields = (object, requiredFields) => {
  const invalidFields = [];

  requiredFields.forEach((field) => {
    if (!object[field]) {
      invalidFields.push(field);
    }
  });

  if (invalidFields.length > 0) {
    return `the following properties are required : ${invalidFields.join(
      ", "
    )}`;
  }
};

export default validateRequiredFields;
