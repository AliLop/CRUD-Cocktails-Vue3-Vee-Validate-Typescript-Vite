import axios from 'axios';

export const sendForm = async ( form: object ): Promise<Boolean> => {
    console.log( form )
    return axios.post(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', { form }
    );
};
