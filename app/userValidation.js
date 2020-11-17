// I placed this at the root of /app
function isValidUser(user) {
	const {
		first_name: firstName,
		last_name: lastName,
		confirm_password: confirmPassword,
		email,
		password
	} = user
	
	if (!email || !firstName || !lastName || !password || !confirmPassword) {
		return false;
	};
	if (password !== confirmPassword) {
		return false ;
	
	}
	return true;
};



module.exports = isValidUser;