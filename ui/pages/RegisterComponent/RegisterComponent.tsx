"use client";
import {
  validateAddress,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "@/helpers/validations";
import { register } from "@/services/auth";
import { RegisterUserData } from "@/types/auth";
import Button from "@/ui/components/Button/Button";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const RegisterComponent = () => {
  const router = useRouter();
  const initialData: RegisterUserData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };
  const initialDirty: Record<string, boolean> = {
    email: false,
    password: false,
    name: false,
    address: false,
    phone: false,
  };
  const [data, setData] = useState<RegisterUserData>(initialData);
  const [errors, setErrors] = useState<RegisterUserData>(initialData);
  const [dirty, setDirty] = useState<Record<string, boolean>>(initialDirty);

  const isFormDisabled = !(
    errors.email &&
    errors.password &&
    errors.name &&
    errors.address &&
    errors.phone
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await register(data);
    if (res.statusCode) {
      toast.error(res.message);
    } else {
      toast.success("User registered successfully");
      setTimeout(() => {
        router.push("/login");
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
      name: validateName(data.name),
      address: validateAddress(data.address),
      phone: validatePhone(data.phone),
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
        <label>
          <p>Name</p>
          <input
            className="p-2 border border-secondary rounded-md mb-2 w-full"
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {dirty.name && errors.name && (
            <p className="text-red-500">{errors.name}</p>
          )}
        </label>
        <label>
          <p>Address</p>
          <input
            className="p-2 border border-secondary rounded-md mb-2 w-full"
            type="text"
            placeholder="Address"
            id="address"
            name="address"
            required
            value={data.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {dirty.address && errors.address && (
            <p className="text-red-500">{errors.address}</p>
          )}
        </label>
        <label>
          <p>Phone</p>
          <input
            className="p-2 border border-secondary rounded-md mb-2 w-full"
            type="text"
            placeholder="Phone"
            id="phone"
            name="phone"
            required
            value={data.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {dirty.phone && errors.phone && (
            <p className="text-red-500">{errors.phone}</p>
          )}
        </label>

        <Button variant="tertiary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterComponent;
