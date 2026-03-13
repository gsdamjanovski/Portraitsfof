"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/admin";
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6"
      style={{
        backgroundColor: "#1A1A1A",
        fontFamily: "var(--font-space-grotesk, var(--font-admin)), system-ui, sans-serif",
      }}
    >
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-[#E42313]">
            <span className="text-sm font-bold text-white">P</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">POTF Admin</h1>
            <p className="text-xs text-[#888]">Portraits of Our Future</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#888]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full border border-[#333] bg-[#222] px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors focus:border-[#E42313]"
            autoFocus
          />
          {error && (
            <p className="mt-2 text-xs text-[#E42313]">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-[#E42313] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
