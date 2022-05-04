import { TBL_USER } from '../../../constants/tables';
import { database } from '../../../start/connectDB';

class UserModel {
	// Get Data
	async getUserByEmail(Email: string) {
		const rows = await database.load(
			`select id, Email, Name, Image from ${TBL_USER} where Email = "${Email}"`
		);

		if (rows.length === 0) return null;

		return rows[0];
	}

	async getPassword(Email: string) {
		const rows = await database.load(`select Password from ${TBL_USER} where Email = "${Email}"`);

		if (rows.length === 0) return null;

		return rows[0];
	}

	// Add Data
	registerUser(user: any) {
		return database.add(user, TBL_USER);
	}

	// Edit Date
	updateUser(User: Object, IDUser: Object) {
		return database.patch(User, IDUser, TBL_USER);
	}

	// Delete Data
}

export const userModel = new UserModel();
