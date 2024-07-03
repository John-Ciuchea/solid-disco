import users from '../data.json';
import { Cat } from './cat.model';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
};

export const getUser = (userId: string): User | null =>
  users.find((user) => {
    return user.id === userId;
  }) ?? null;
