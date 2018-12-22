// Instruments
import { MAIN_URL, groupId } from './config';

export const api = {
	get token () {
		return localStorage.getItem('token')
	},
	auth: {
		signup(userInfo) {
			return fetch(`${MAIN_URL}/user/${groupId}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(userInfo),
			});
		},
		login(credentials) {
			return fetch(`${MAIN_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(credentials),
			});
		},
		authenticate() {
			return fetch(`${MAIN_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ token: this.token }),
			});
		},		
	},

	posts: {
		fetch() {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'GET',
				headers: {
					'x-no-auth': groupId,
				},
			});
		},

		create(comment) {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'POST',
				headers: {
					'x-no-auth': groupId,
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ comment })
			})
		}
	}
};
