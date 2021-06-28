import type { NextPage } from "next";
import { Layout } from "src/components/Layout";
import { useAuth } from "src/libs/hooks/useAuth";

const SignUp: NextPage = () => {
  const { inputEmail, inputPassword, handleEmailChange, handlePasswordChange, handleSignUp } =
    useAuth();
  return (
    <Layout metaTitle="SignUp">
      <form className="border" onSubmit={handleSignUp}>
        <input type="email" value={inputEmail} onChange={handleEmailChange} />
        <input type="password" value={inputPassword} onChange={handlePasswordChange} />
        <button className="border" type="submit">
          SignUp
        </button>
      </form>
    </Layout>
  );
};

export default SignUp;
