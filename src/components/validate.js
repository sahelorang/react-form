export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "username required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length < 6) {
    errors.password = "password need to be 6 character or more";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "password do not match";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "accept our regulations";
  }

  return errors;
};
