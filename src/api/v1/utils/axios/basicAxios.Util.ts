import axios from 'axios';
import queryString from 'query-string';
const basicURL = process.env.API_BASIC;

const basicAxios = axios.create({
	baseURL: basicURL,
	headers: {
		'content-type': 'application/json',
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

export default basicAxios;
