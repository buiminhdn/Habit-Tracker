"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import React from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form>
      <FieldGroup className="gap-5">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            className="py-5 rounded-lg"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="py-5 rounded-lg"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              className="py-5 rounded-lg pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-black transition-colors"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </Field>
        <Field>
          <Button type="submit" className="py-5 rounded-lg">
            Create account
          </Button>
        </Field>
        <FieldSeparator className="my-0.5">Or continue with</FieldSeparator>
        <Field>
          <Button type="button" variant="outline" className="py-5">
            <img src="/icons/google.svg" alt="Google" className="size-5" />
            Sign up with Google
          </Button>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link
              href={ROUTES.AUTH.LOGIN}
              className="underline underline-offset-4"
            >
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
