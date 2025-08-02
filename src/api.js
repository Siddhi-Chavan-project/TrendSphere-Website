const users = [];

export const registerUser = (email, password) => {
    const newUser = {
        email,
        password,
    };
    users.push(newUser);
    return Promise.resolve(newUser);
};