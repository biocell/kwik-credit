function isVerifiedUser(user) {
	const {
		name: name,
		dob: dob,
		status: status,
		email: email,
		phone_number: phoneNumber,
		city: city,
		number_of_years: years,
		employer: employer,
		occupation: occupation,
		income: income,
		box: box
	} = user

	if (!name || !dob || !status || !email || !phoneNumber || !city || !years || !employer || !occupation || !income || !box) {
		return false;
	}
	return true;
};

module.exports = isVerifiedUser;