export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CLIENT = 'SAVE_CLIENT';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email
})

export const addClient = (client) => ({
  type: SAVE_CLIENT,
  client,
})