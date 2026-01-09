"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { validateEmail, validatePassword } from "@/helpers/validations";
import { login } from "@/services/auth";
import { LoginUserData, LoginUserResponse, ResponseError } from "@/types/auth";
import Button from "@/ui/components/Button/Button";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const initialData: LoginUserData = {
    email: "",
    password: "",
  };
  const initialDirty: Record<string, boolean> = {
    email: false,
    password: false,
  };
  const [data, setData] = useState<LoginUserData>(initialData);
  const [errors, setErrors] = useState<LoginUserData>(initialData);
  const [dirty, setDirty] = useState<Record<string, boolean>>(initialDirty);

  const isFormDisabled = !!(errors.email || errors.password);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res: LoginUserResponse | ResponseError = await login(data);
    if ("statusCode" in res) {
      toast.error(res.message);
    } else {
      toast.success("Login successful");
      setUser(res);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    });
  }, [data]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col gap-4 w-1/4" onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            className="p-2 border border-secondary rounded-md w-full"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {dirty.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </label>
        <label>
          <p>Password</p>
          <input
            className="p-2 border border-secondary rounded-md mb-2 w-full"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            value={data.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {dirty.password && errors.password && (
            <p className="text-red-500">{errors.password}</p>
          )}
        </label>
        <Button variant="tertiary" type="submit" disabled={isFormDisabled}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginComponent;
