import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../../reducer/user";
const Login = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onSubmit = () => {
    console.log(inputs);
    dispatch(loginAction(id,password));
  };
  return (
    <>
      <div>로그인 입니다</div>
      <form action="/api/user/login" method="post">
        <div>아디</div>
        <input
          type="id"
          onChange={onChange}
          name="id"
          value={id}
          className="border-2"
        ></input>
        <div>아이디 확인용 {inputs.id}</div>
        <div>비번</div>
        <input
          type="password"
          onChange={onChange}
          name="password"
          value={password}
          className="border-2"
        ></input>
        <div>비밀번호 확인용 {inputs.password}</div>
        <button onClick={onSubmit} className="border-2">
          로그인
        </button>
      </form>
    </>
  );
};

export default Login;
