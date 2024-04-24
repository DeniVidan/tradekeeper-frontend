const getUserData = () => {
    try {
      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem('user'));
  
      // Return user data object
      return userData;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null; // Return null if error occurs
    }
  };
  
  export default getUserData;