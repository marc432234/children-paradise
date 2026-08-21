"use client";

import { useActionState } from "react";

import { login, type LoginState } from "../actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="text-sm text-[#5b564c]">
          Username
        </label>
        <input
          id="username"
          name="username"
          autoComplete="username"
          required
          className="rounded-md border border-[#211f1a]/15 bg-white px-3 py-2 text-[#211f1a] outline-none focus:border-[#ba923a]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm text-[#5b564c]">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="rounded-md border border-[#211f1a]/15 bg-white px-3 py-2 text-[#211f1a] outline-none focus:border-[#ba923a]"
        />
      </div>

      {state.error && <p className="text-sm text-red-500">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-md bg-[#ba923a] px-4 py-2 font-medium text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
