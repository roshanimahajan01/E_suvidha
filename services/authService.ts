// authService.ts
export const login = (username: string, password: string) => {
    // Simulate an API call
    return new Promise((resolve, reject) => {
      if (username === 'user' && password === 'password') {
        resolve('Login successful');
      } else {
        reject('Invalid credentials');
      }
    });
  };
  