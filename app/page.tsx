"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
if (email && password) {
router.push("/dashboard");
} else {
alert("Veuillez remplir les champs");
}
};

return (
<main className="min-h-screen bg-gradient-to-br from-[#020817] via-[#07152d] to-[#020817] flex items-center justify-center p-4 md:p-8 overflow-hidden">

{/* CARD */}
<div className="w-full max-w-7xl rounded-[35px] overflow-hidden border border-[#16233d] shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-[#071120] flex flex-col lg:flex-row">

{/* LEFT PANEL */}
<div className="w-full lg:w-1/2 bg-gradient-to-b from-[#02122c] to-[#081a38] p-8 md:p-14 flex flex-col justify-between relative">

{/* GLOW */}
<div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

{/* TOP */}
<div className="relative z-10">
<h1 className="text-[#f5c542] text-5xl md:text-7xl font-black tracking-tight">
LCL
</h1>

<p className="text-[#9aa4b2] mt-2 text-base md:text-lg">
Banque Privée Professionnelle
</p>
</div>

{/* CENTER */}
<div className="relative z-10 my-12">
<h2 className="text-white text-4xl md:text-6xl font-bold leading-tight md:leading-[80px]">
Accédez à votre espace bancaire premium
</h2>

<p className="mt-6 text-[#9aa4b2] text-base md:text-lg leading-8 max-w-xl">
Gérez vos comptes professionnels,
investissements, cartes premium et
virements sécurisés depuis votre tableau
de bord privé.
</p>
</div>

{/* FEATURES */}
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300">
<div className="text-3xl mb-3">🔒</div>

<h3 className="text-white font-semibold text-lg">
Connexion sécurisée
</h3>

<p className="text-[#9aa4b2] text-sm mt-2 leading-6">
Chiffrement bancaire avancé et protection SSL.
</p>
</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300">
<div className="text-3xl mb-3">✔</div>

<h3 className="text-white font-semibold text-lg">
Support Premium
</h3>

<p className="text-[#9aa4b2] text-sm mt-2 leading-6">
Assistance dédiée disponible 24h/24 et 7j/7.
</p>
</div>

</div>
</div>

{/* RIGHT PANEL */}
<div className="w-full lg:w-1/2 bg-[#08111f] p-8 md:p-14 flex items-center justify-center relative overflow-hidden">

{/* GLOW */}
<div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

<div className="relative z-10 w-full max-w-lg">

{/* ICON */}
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#194cff] to-[#3f6bff] flex items-center justify-center text-4xl shadow-[0_10px_50px_rgba(25,76,255,0.5)] mb-8 animate-pulse">
🔐
</div>

{/* TITLE */}
<h1 className="text-white text-4xl md:text-6xl font-bold">
Bienvenue
</h1>

<p className="text-[#9aa4b2] mt-4 text-base md:text-lg mb-10">
Connectez-vous à votre espace sécurisé
</p>

{/* EMAIL */}
<div className="mb-6">
<label className="block text-[#d0d3da] mb-3 text-sm md:text-base font-medium">
Identifiant bancaire
</label>

<input
type="text"
placeholder="Votre identifiant"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full bg-[#0d1728] border border-[#1d2b45] rounded-2xl px-5 py-4 text-white text-base md:text-lg outline-none focus:border-[#3f6bff] focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
/>
</div>

{/* PASSWORD */}
<div className="mb-6">
<label className="block text-[#d0d3da] mb-3 text-sm md:text-base font-medium">
Mot de passe
</label>

<input
type="password"
placeholder="Votre mot de passe"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full bg-[#0d1728] border border-[#1d2b45] rounded-2xl px-5 py-4 text-white text-base md:text-lg outline-none focus:border-[#3f6bff] focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
/>
</div>

{/* OPTIONS */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

<label className="flex items-center gap-2 text-[#9aa4b2] text-sm md:text-base cursor-pointer">
<input
type="checkbox"
className="accent-blue-500"
/>
Se souvenir de moi
</label>

<span className="text-[#3f6bff] text-sm md:text-base hover:text-blue-300 cursor-pointer transition-all">
Mot de passe oublié ?
</span>
</div>

{/* BUTTON */}
<button
onClick={handleLogin}
className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#194cff] to-[#3f6bff] text-white text-lg md:text-xl font-bold hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 shadow-[0_15px_40px_rgba(25,76,255,0.45)]"
>
Se connecter →
</button>

{/* FOOTER */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="bg-white/5 border border-white/10 rounded-xl py-4 text-center text-sm text-[#9aa4b2] backdrop-blur-xl">
🔐 SSL Sécurisé
</div>

<div className="bg-white/5 border border-white/10 rounded-xl py-4 text-center text-sm text-[#9aa4b2] backdrop-blur-xl">
⚡ Support 24/7
</div>

<div className="bg-white/5 border border-white/10 rounded-xl py-4 text-center text-sm text-[#9aa4b2] backdrop-blur-xl">
🛡 Protection Bancaire
</div>

</div>

</div>
</div>
</div>
</main>
);
}