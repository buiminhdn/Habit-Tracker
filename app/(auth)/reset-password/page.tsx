"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <form>
      <FieldGroup className="gap-5">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Please enter your new password below.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
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
          <FieldLabel htmlFor="confirm-password">
            Confirm New Password
          </FieldLabel>
          <div className="relative">
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="py-5 rounded-lg pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-black transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </Field>

        <Field>
          <Button type="submit" className="py-5.5 rounded-lg">
            Reset password
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            <Link
              href={ROUTES.AUTH.LOGIN}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-black transition-colors"
            >
              <ArrowLeft size={16} />
              Back to login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
