import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useCallback, useState } from "react";
import { useCreateUserMutation, useGetTokensMutation } from "src/apollo/schema";
import { calcDate } from "src/libs/calcDate";

export const useAuth = () => {
  const [createUserMutation] = useCreateUserMutation();
  const [getTokensMutation] = useGetTokensMutation();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  }, []);

  // 入力欄のバリデーション
  const validateInputs = useCallback((): { isFormError: boolean } => {
    // メールアドレスが空文字
    if (inputEmail === "") {
      alert("正しい形式でメールアドレスを入力してください。");
      return { isFormError: true };
      // パスワードが4文字以下
    } else if (inputPassword.length <= 4) {
      alert("パスワードは5文字以上で入力してください。");
      return { isFormError: true };
    } else {
      return { isFormError: false };
    }
  }, [inputEmail, inputPassword]);

  // signIn
  const handleSignIn = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isFormError } = validateInputs();
    if (!isFormError) {
      try {
        const { data: tokenData } = await getTokensMutation({
          variables: {
            email: inputEmail,
            password: inputPassword,
          },
        });

        if (tokenData?.tokenAuth) {
          setCookie(null, "accessToken", tokenData.tokenAuth.token, {
            path: "/",
            maxAge: calcDate(tokenData.tokenAuth.payload.exp),
          });
          setCookie(null, "refreshToken", tokenData.tokenAuth.refreshToken, {
            path: "/",
            maxAge: calcDate(tokenData.tokenAuth.refreshExpiresIn),
          });
        }
        setInputEmail("");
        setInputPassword("");
      } catch (error) {
        alert(error);
        return;
      }
    }
  };

  // signUp
  const handleSignUp = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { isFormError } = validateInputs();
    if (!isFormError) {
      await createUserMutation({ variables: { email: inputEmail, password: inputPassword } });
      await handleSignIn(event);
      setInputEmail("");
      setInputPassword("");
    }
  };

  const handleSignOut = () => {
    const cookies = parseCookies();
    cookies.accessToken && destroyCookie(null, "accessToken", { path: "/", maxAge: -1 });
    cookies.refreshToken && destroyCookie(null, "refreshToken", { path: "/", maxAge: -1 });
  };
  return {
    inputEmail,
    setInputEmail,
    inputPassword,
    setInputPassword,
    handleEmailChange,
    handlePasswordChange,
    handleSignUp,
    handleSignIn,
    handleSignOut,
  };
};
