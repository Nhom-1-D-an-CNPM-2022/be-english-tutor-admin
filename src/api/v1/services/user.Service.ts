import { userModel } from '../models/user.model';

class UserService {
	//--------------------------------------------GET------------------------------------------
	getUserByEmail = async (Email: string) => {
		try {
			const user = await userModel.getUserByEmail(Email);

			if (user === null) {
				return null;
			}

			return user;
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	getPassword = async (Email: string) => {
		try {
			const user = await userModel.getPassword(Email);

			if (user === null) {
				return '';
			}

			return user;
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	//--------------------------------------------POST-----------------------------------------
	registerUser = async (User: any) => {
		try {
			const user = await userModel.getUserByEmail(User.Email);

			if (user) {
				return {
					data: false,
					message: 'Account already exists',
					status: 200,
				};
			}

			userModel.registerUser(User);

			return {
				data: true,
				message: 'Register User Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	//--------------------------------------------PATCH------------------------------------------
	updateUser = (User: Object, IDUser: Object) => {
		try {
			userModel.updateUser(User, IDUser);

			return {
				data: true,
				message: 'Edit successfully',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	//--------------------------------------------DELETE----------------------------------------
}

export const userService = new UserService();
