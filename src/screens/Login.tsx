// @ts-ignore
import { Link } from 'react-router-dom';
import Container from "../components/objects/Container"
import Row from "../components/objects/Row"

import '../style/06-components/login.scss'

const Login = () => {
  return (
    <div className="c-login u-color-neutral-100">
      <div className="c-login-background-holder">
        <img
          className="c-login__background-image"
          src="logo-bg.svg"
          alt="Spoon+fork logo"
        />
      </div>
      <Row>
        <Container>
          <header className="c-login-header">
            <h1 className="c-login-header__title">
              SPOON + FORK
            </h1>
            <p className="c-login-header__subtitle">Reserve a table at your fingertips.</p>
          </header>
          <form className="c-login-form">
            <input 
              className="c-login-input"
              placeholder="Username"
              id="username" 
              type="text" 
            />            
            
            <input
              className="c-login-input"
              placeholder="Password"
              id="password"
              type="password" 
            />

            <button className="c-login-button u-bg-neutral-500 u-color-theme-500">Let's go</button>
          </form>
          <footer>
            Not a member? <Link to="404">Sign up.</Link>
          </footer>
        </Container>
      </Row>
    </div>
  );
}

export default Login;