export function validateEmail(email) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "Enter a valid email address!";
  } else return null;
}

export function validatePassword(password) {
  if (
    !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/i.test(
      password
    )
  ) {
    return "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long";
  } else return null;
}

export function validatePasswordLength(password) {
  if (password.length < 8 && password.length > 0) {
    return "Password must be at least 6 characters long ";
  } else return null;
}

export function validateUsername(username) {
  if (/\d+/.test(username)) {
    return "Username must be at least 6 figures and include a number";
  }
}
