const getUserData = async () => {
    try {
      // Retrieve user data from local storage
      const userData = await JSON.parse(localStorage.getItem('user'));
      //console.log("ovo: ", userData)
      // Return user data object
      return userData;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null; // Return null if error occurs
    }
  };
  
  export default getUserData;