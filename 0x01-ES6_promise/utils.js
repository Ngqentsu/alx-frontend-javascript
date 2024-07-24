export function uploadPhoto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Photo uploaded successfully');
    }, 1000);
  });
}

export function createUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User created successfully');
    }, 1000);
  });
}
