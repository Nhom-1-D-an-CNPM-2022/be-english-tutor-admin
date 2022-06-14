import basicAxios from '../utils/axios/basicAxios.Util';
import { clientGrpc } from '../grpc/grpcClient';

interface IDataUpdate {
	isActive: boolean;
}
class UserService {
	//--------------------------------------------GET------------------------------------------
	remoteGetAllUsers = async (token: string, number: number, page: number) => {
		try {
			const response = await basicAxios.get('users/get-all', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					number,
					page,
				},
			});
			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};
	//--------------------------------------------POST-----------------------------------------
	//--------------------------------------------PUT-----------------------------------------
	remoteUpdateUserAccount = async (token: string, userId: string, dataUpdate: Object) => {
		const data = {
			_id: userId,
			dataUpdate: dataUpdate,
		};

		try {
			const response = await basicAxios.put('users/update-account', data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				return 'Success';
			} else {
				return 'Failure';
			}
		} catch (error: any) {
			throw new Error(error.message);
		}
	};

	remoteUpdateUserAccountGrpc = async (token: string, userId: string, dataUpdate: IDataUpdate) => {
		clientGrpc.updateAccount(userId, dataUpdate.isActive);
	};
	//--------------------------------------------PATCH------------------------------------------
	//--------------------------------------------DELETE------------------------------------password
}

export const userService = new UserService();
