import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import "./styles.css";

const GoogleAuthentication = () => {
  return (
    <div className="googleauth">
      <LoginSocialGoogle
        client_id={
          "197993462439-eaukttrs98b8cjnioc5bqabcamcg5csi.apps.googleusercontent.com"
        }
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          window.location.href = "http://localhost:3000/home";
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  );
};

export default GoogleAuthentication;
