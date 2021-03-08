import axios from 'axios';
import { Drink } from '../models/drink';

export const getAll = async (): Promise<Drink> => {
  return axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
  );
};
export const getBySearchInput = async (search: string): Promise<Drink> => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  );
};

export const detailsById = async (id: string): Promise<Drink> => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
};
