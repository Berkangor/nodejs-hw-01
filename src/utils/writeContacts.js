import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    let newContact = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, newContact, 'utf8');
  } catch (error) {
    console.log(error.message);
  }
};