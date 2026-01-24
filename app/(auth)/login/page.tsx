"use client";

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

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form>
      <FieldGroup className="gap-5">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
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
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href={ROUTES.AUTH.FORGOT_PASSWORD}
              className="ml-auto text-xs underline-offset-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>
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
          <Button type="submit" className="py-5.5 rounded-lg">
            Login
          </Button>
        </Field>
        <FieldSeparator className="my-0.5">Or continue with</FieldSeparator>
        <Field>
          <Button type="button" variant="outline" className="py-5">
            <img src="/icons/google.svg" alt="Google" className="size-5" />
            Login with Google
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a
              href={ROUTES.AUTH.SIGNUP}
              className="underline underline-offset-4"
            >
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
