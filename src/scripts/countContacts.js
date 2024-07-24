// /srs/scripts/countContacts.js

import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(`Total contacts: ${contacts.length}`);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

countContacts();
