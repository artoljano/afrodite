"use client";

import { useState } from "react";
import { Download, ShieldCheck, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils"; // <- for conditional classes

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfSrc: string;
  fileName?: string;
};

export default function BrochureDownloadModal({
  open,
  onOpenChange,
  pdfSrc,
  fileName = "Afrodite-Academy-Brochure.pdf",
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hp, setHp] = useState(""); // honeypot

  const rawBase =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const apiBase = rawBase.replace(/\/+$/, ""); // strip trailing slashes
  const endpoint = `${apiBase}/api/brochure`;

  function triggerDownload() {
    const a = document.createElement("a");
    a.href = pdfSrc;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      toast({
        title: "Ju lutem plotësoni të gjitha fushat.",
        variant: "destructive",
      });
      return;
    }
    if (!agree) {
      toast({
        title: "Duhet të pranoni kushtet për të vazhduar.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          hp,
          brochurePath: pdfSrc,
          marketingConsent: agree, // ✅ send consent flag
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success)
        throw new Error(data?.error || "Dështoi dërgimi i kërkesës.");

      toast({ title: "Faleminderit! Broshura po shkarkohet." });
      onOpenChange(false);
      setTimeout(triggerDownload, 150);
      setFullName("");
      setEmail("");
      setPhone("");
      setAgree(false);
      setHp("");
    } catch (err: any) {
      toast({
        title: "Dështoi dërgimi.",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Reusable class chunks
  const baseInput =
    "border text-afrodite-lightPurple transition-colors duration-200 ease-out " +
    "focus:border-afrodite-purple focus:ring-afrodite-purple";

  const emptyBg = "bg-white border-afrodite-lightPurple/20";
  const filledBg = "bg-afrodite-lightPurple/15 border-afrodite-purple/30";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 bg-transparent border-none shadow-none">
        {/* Gradient header */}
        <div className="bg-gradient-to-r from-afrodite-purple to-afrodite-lightPurple px-6 py-5 rounded-t-2xl">
          <DialogHeader className="p-0">
            <DialogTitle className="text-afrodite-creme text-xl font-semibold flex items-center gap-2">
              <Download className="h-5 w-5 text-afrodite-creme" />
              Shkarko Broshurën
            </DialogTitle>
            <DialogDescription className="text-afrodite-creme/90">
              Plotësoni të dhënat tuaja për të marrë broshurën e kurseve.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Themed card body */}
        <div className="bg-afrodite-creme rounded-b-2xl rounded-t-none shadow-md border border-afrodite-lightPurple/20 px-6 sm:px-8 py-6">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Honeypot */}
            <input
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              name="website"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="bdm-fullname"
                  className="text-afrodite-lightPurple"
                >
                  Emri i plotë
                </Label>
                <Input
                  id="bdm-fullname"
                  placeholder="Emri juaj i plotë"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className={cn(baseInput, fullName ? filledBg : emptyBg)}
                />
              </div>

              <div>
                <Label
                  htmlFor="bdm-email"
                  className="text-afrodite-lightPurple"
                >
                  Email
                </Label>
                <Input
                  id="bdm-email"
                  type="email"
                  placeholder="adresa@juaj.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={cn(baseInput, email ? filledBg : emptyBg)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="bdm-phone" className="text-afrodite-lightPurple">
                Numri i telefonit
              </Label>
              <Input
                id="bdm-phone"
                placeholder="+355 6X XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={cn(baseInput, phone ? filledBg : emptyBg)}
              />
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-afrodite-lightPurple/20 bg-white/70 px-3 py-3">
              <Checkbox
                id="bdm-agree"
                checked={agree}
                onCheckedChange={(v) => setAgree(Boolean(v))}
              />
              <Label
                htmlFor="bdm-agree"
                className="text-sm leading-5 text-afrodite-lightPurple"
              >
                Jam dakort që të kontaktohem nga Afrodite Academy për
                informacione rreth kurseve.
              </Label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-afrodite-lightPurple">
                <ShieldCheck className="h-4 w-4" />
                Të dhënat tuaja ruhen të sigurta dhe nuk shpërndahen.
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="border-afrodite-purple/30 text-afrodite-purple hover:bg-afrodite-purple/10"
                >
                  Anulo
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-afrodite-lightPurple text-afrodite-creme hover:bg-afrodite-purple"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="mr-2 h-4 w-4" />
                  )}
                  Shkarko
                </Button>
              </div>
            </div>

            {/* API NOTE:
               POST {NEXT_PUBLIC_API_BASE_URL}/api/brochure
               Body: { fullName, email, phone, hp, brochurePath }
               On success -> triggers local download of `pdfSrc`
            */}
          </form>
        </div>
      </DialogContent>

      {/* Autofill theming (Chrome/Safari) */}
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #5b4b74; /* afrodite-lightPurple text tone */
          transition: background-color 5000s ease-in-out 0s;
          box-shadow: 0 0 0px 1000px rgba(119, 84, 172, 0.15) inset; /* afrodite-lightPurple/15 */
        }
      `}</style>
    </Dialog>
  );
}
