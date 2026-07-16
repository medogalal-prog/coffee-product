import { LoginForm } from "@/components/login-form";
import { useState } from "react";

function LoginPage() {

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <LoginForm  />
      </div>
    </section>
  );
}

export default LoginPage;