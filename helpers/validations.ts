export const validateEmail = (email: string) => {
  let error = "";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) error = "Invalid email";

  return error;
};

export const validatePassword = (password: string) => {
  let error = "";
  const regex = /^[a-zA-Z0-9]{4,8}$/;
  if (!regex.test(password)) error = "Invalid password";

  return error;
};

export const validateName = (name: string) => {
  let error = "";
  if (name.length < 3) error = "Name must be at least 3 characters long";

  return error;
};

export const validateAddress = (address: string) => {
  let error = "";
  if (address.length < 3) error = "Address must be at least 3 characters long";
  return error;
};

export const validatePhone = (phone: string) => {
  let error = "";
  if (phone.length < 10) error = "Phone must be at least 10 characters long";
  return error;
};
