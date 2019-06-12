import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "magnustestdb.auth0.com",
      clientID: "YHLsV4PwAigOA6YBWfv8UHZ7bBHF8ubz",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid"
    });

    this.authFlag = "isLoggedIn";
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.auth0.login(
        {
          realm: "Username-Password-Authentication",
          username: email,
          password
        },
        (err, authResult) => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          this.setSession(authResult);
          return resolve();
        }
      );
    });
  }

  getIdToken() {
    console.log(this.idToken);
    return this.idToken;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    });
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 100000 + new Date().getTime();
    localStorage.setItem(this.authFlag, JSON.stringify(true));
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", this.expiresAt);
  }

  logout() {
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.auth0.logout({
      returnTo: "http://localhost:3000",
      clientID: "YHLsV4PwAigOA6YBWfv8UHZ7bBHF8ubz"
    });
  }

  silentAuth() {
    if (this.isAuthenticated()) {
      return new Promise((resolve, reject) => {
        this.auth0.checkSession({}, (err, authResult) => {
          if (err) {
            localStorage.removeItem(this.authFlag);
            return reject(err);
          }
          this.setSession(authResult);
          resolve();
        });
      });
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the token's expiry time
    //return new Date().getTime() < this.expiresAt;
    return JSON.parse(localStorage.getItem(this.authFlag));
  }
}

const auth = new Auth();

export default auth;
