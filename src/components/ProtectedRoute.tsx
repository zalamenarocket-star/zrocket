import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "approved" | "pending" | "unauthenticated">("loading");

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setStatus("unauthenticated"); return; }
      const { data } = await supabase.from("profiles").select("approved").eq("id", user.id).single();
      setStatus(data?.approved ? "approved" : "pending");
    }
    check();
  }, []);

  if (status === "loading") return <div className="min-h-screen bg-background" />;
  if (status === "unauthenticated") return <Navigate to="/interno-login" replace />;
  if (status === "pending") return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-sm mx-auto px-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
        </div>
        <h2 className="font-display text-xl font-semibold text-foreground mb-2">Aguardando aprovação</h2>
        <p className="text-muted-foreground text-sm">Sua conta foi criada. O administrador precisa liberar seu acesso.</p>
        <button
          onClick={() => supabase.auth.signOut().then(() => setStatus("unauthenticated"))}
          className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Sair
        </button>
      </div>
    </div>
  );
  return <>{children}</>;
}