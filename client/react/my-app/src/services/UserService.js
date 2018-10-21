class UserService {
  handleError = (error) => {
    console.log('failure: ' + JSON.stringify(error));
    return Promise.reject(new Error({
      status: error.statusCode,
      message: error.message,
    }));
  };

  signup = async (firstName, lastName, email, password) => {
    const url = '/api/users';
    const requestData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      let responseData = await response.json();
      if (responseData.error) {
        return this.handleError(responseData);
      }

      console.log('success');
      return Promise.resolve(responseData);
    } catch (error) {
      return this.handleError(error);
    }
  }
};

export default UserService;