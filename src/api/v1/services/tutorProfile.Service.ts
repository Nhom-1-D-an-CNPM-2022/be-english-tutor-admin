import basicAxios from '../utils/axios/basicAxios.Util';

class TutorProfileService {
	//--------------------------------------------GET------------------------------------------
	remoteGetAllReviewedProfiles = async (token: string, number: number, page: number) => {
		try {
			const response = await basicAxios.get('tutors/get-reviewed-profiles', {
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

	remoteGetProfileById = async (id: string) => {
		try {
			const response = await basicAxios.get(`tutors/profile/${id}`);
			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};
	//--------------------------------------------POST-----------------------------------------

	//--------------------------------------------PUT-----------------------------------------
	remoteApproveProfileById = async (token: string, id: string) => {
		try {
			const response = await basicAxios.put(
				`tutors/profile/approve/${id}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};

	remoteRejectProfileById = async (token: string, id: string) => {
		try {
			const response = await basicAxios.put(
				`tutors/profile/reject/${id}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			return response.data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};

	//--------------------------------------------PATCH------------------------------------------

	//--------------------------------------------DELETE------------------------------------
}

export const tutorProfileService = new TutorProfileService();
