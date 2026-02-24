import React from "react";
import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/ui/signup-form";
import {Link } from "react-router"

const RegisterPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 dark bg-secondary ">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium dark:text-white"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </Link>
        <SignupForm />
      </div>
    </div>
  );
};

export default RegisterPage;
