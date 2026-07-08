"use client";

import { useState } from "react";
import "./login.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.href = "/";
    } else {
      setError(true);
      setBusy(false);
      setPassword("");
    }
  }

  return (
    <main className="loginWrap">
      <form className="loginCard" onSubmit={onSubmit}>
        <p className="eyebrow">Swedish press signals</p>
        <h1>Enter password</h1>
        <input
          className="loginInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          aria-label="Password"
          autoFocus
          autoComplete="current-password"
        />
        {error && <p className="loginErr">Incorrect password.</p>}
        <button className="btn" disabled={busy || !password}>
          {busy ? "Checking…" : "Enter"}
        </button>
      </form>
    </main>
  );
}
