const instagramActions = {
	GET_USER_DATA: 'GET_USER_DATA',
	SET_USER_DATA: 'SET_USER_DATA',
	USER_RECENT_MEDIA: 'USER_RECENT_MEDIA',

	getUserData: () => ({
		type: instagramActions.GET_USER_DATA,
	}),

	setUserData: userData => ({
		type: instagramActions.SET_USER_DATA,
		userData
	})
};

export default instagramActions;