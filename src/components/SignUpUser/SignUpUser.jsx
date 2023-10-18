import { useForm } from "react-hook-form";
import "./signUpUser.css";

function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(data.password !== data.password2)
    {
        alert("Passwords do not match");
        return;
    }
    alert(`First Name: ${data.firstName},
    Last Name: ${data.lastName},
    Username: ${data.userName},
    Email: ${data.email}`
 );
    console.log(data);}


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
    
    <label className="hook__text">First Name:</label>
      <input
        name="firstName"
        className="hook__input"
        {...register("firstName", { required: true })}
      />{errors.firstName && (
        <p className="hook__error">First Name is required.</p>
      )}
    
    <label className="hook__text">Last Name:</label>
      <input
        name="lastName"
        className="hook__input"
        {...register("lastName", { required: true })}
        />{errors.firstName && (
          <p className="hook__error">Last Name is required.</p>
    )}

    <label className="hook__text">Username:</label>
      <input
        name="username"
        className="hook__input"
        {...register("userName", { required: true })}
      />{errors.firstName && (
        <p className="hook__error">Username is required.</p>
    )}

    <label className="hook__text">Email:</label>
    <input
        name="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
    )}

      <label className="hook__text">Password:</label>
      <input
        name = "password"
        type="password"
        className="hook__input"
        {...register("password", { required: true })}
      />
      {errors.password && <p className="hook__error">Password is required</p>}

      <label className="hook__text">Re-enter Password:</label>
      <input
        name = "password2"
        type="password"
        className="hook__input"
        {...register("password2", { required: true })}
      />
      {errors.password && <p className="hook__error">Password must be entered twice</p>}

      <button className="hook__button" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpUser;
