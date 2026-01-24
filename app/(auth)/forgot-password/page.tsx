"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <form>
      <FieldGroup className="gap-5">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Forgot password?</h1>
          <p className="text-muted-foreground text-sm text-balance">
            No worries, we&apos;ll send you reset instructions.
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
