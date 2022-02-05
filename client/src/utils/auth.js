import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check whether token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken, isSignUp) {
    // saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    console.log("isSignUp status: " + isSignUp);
    if (isSignUp) {
      window.location.assign('/Profile');
    } else {
      window.location.assign('/calendar');
    }
    // window.location.href = 'http://localhost:3000/calendar';
    console.log('User logged in successful!')
  }

  logout() {
    // clear user token andd profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();