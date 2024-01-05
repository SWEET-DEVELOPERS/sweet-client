import React, { FC, useRef } from 'react';
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

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {/* register의 첫 번째 인자로는 FormValue 인터페이스에 맞게 각 데이터의 이름을 줌 */}
      {/* 두 번째 인자로는 객체 형식으로 어떤 유효성 검증을 할지 적어줌 */}
      <label>name</label>
      <input {...register('name', { required: true, maxLength: 20 })} />
      {errors.name && errors.name.type === 'required' && <div>이름을 입력해 주세요!</div>}
      {errors.name && errors.name.type === 'maxLength' && (
        <div>이름은 최대 20자만 입력할 수 있습니다!</div>
      )}

      <label>nickname</label>
      <input {...register('nickname', { required: true, maxLength: 20 })} />

      <label>email</label>
      <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type='email' />

      <label>password</label>
      <input {...register('password', { required: true, minLength: 6 })} type='password' />

      <label>password_confirm</label>
      <input
        {...(register('password_confirm'),
        { required: true, validate: (value: string) => value === passwordRef.current })}
        type='password'
      />

      <input type='submit' />
    </form>
  );
};

export default Onboarding;
