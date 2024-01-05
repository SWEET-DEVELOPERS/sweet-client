import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValue {
  name: string;
  nickname: string;
  email: string;
  password: string;
  password_confirm: string;
}

const Onboarding: FC = () => {
  // register 리액트훅폼에게 이 인풋에 대해 이러한 항목을 입력받을 것이라는 것을 등록
  // handleSubmit 리액트훅폼에서 각 항목이 입력되었을 때 submit 이벤트를 처리
  // watch 는 register 한 항목의 변경사항을 추적
  // errors 는 유효성이 통과되지 않으면 에러 상태를 내보내준다.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {/* register의 인자로는 FormValue 인터페이스에 맞게 각 데이터의 이름을 줌 */}
      <label>name</label>
      <input {...register('name')} />
      <label>nickname</label>
      <input {...register('nickname')} />

      <label>email</label>
      <input {...register('email')} type='email' />

      <label>password</label>
      <input {...register('password')} />

      <label>password_confirm</label>
      <input {...register('password_confirm')} type='password' />
    </form>
  );
};

export default Onboarding;
