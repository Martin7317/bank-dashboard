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
<main className="min-h-screen bg-gradient-to-br from-[#020817] via-[#07152d] to-[#020817] flex items-center justify-center p-4 md:p-8">
<div className="w-full max-w-7xl bg-[#071120] border border-[#16233d] rounded-[30px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

{/* LEFT SIDE */}
<div className="w-full lg:w-1/2 bg-gradient-to-b from-[#02122c] to-[#081a38] p-8 md:p-14 flex flex-col justify-between">

{/* LOGO */}
<div>
<h1 className="text-[#f5c542] text-5xl md:text-7xl font-bold">
LCL
</h1>

<p className="text-[#9aa4b2] mt-2 text-base md:text-lg">
Banque Privée Professionnelle
</p>
</div>

{/* HERO TEXT */}
<div className="my-10 lg:my-0">
<h2 className="text-white text-4xl md:text-6xl font-bold leading-tight md:leading-[80px] break-words">
Accédez à votre espace bancaire premium
</h2>

<p className="text-[#9aa4b2] mt-6 text-base md:text-lg leading-8">
Gérez vos comptes professionnels, investissements,
cartes premium et virements sécurisés depuis votre
tableau de bord privé.
</p>
</div>

{/* FEATURES */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
<div className="bg-[#0d1b33] rounded-2xl p-5 text-white border border-[#1b2c4a]">
<p className="text-lg font-semibold">
🔒 Connexion sécurisée
</p>

<p className="text-sm text-[#9aa4b2] mt-2">
Protection avancée des données bancaires.
</p>
</div>

<div className="bg-[#0d1b33] rounded-2xl p-5 text-white border border-[#1b2c4a]">
<p className="text-lg font-semibold">
✔ Support Premium
</p>

<p className="text-sm text-[#9aa4b2] mt-2">
Assistance bancaire 24h/24 et 7j/7.
</p>
</div>
</div>
</div>

{/* RIGHT SIDE */}
<div className="w-full lg:w-1/2 bg-[#08111f] p-8 md:p-14 flex items-center justify-center">

<div className="w-full max-w-lg">

{/* ICON */}
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#194cff] to-[#3f6bff] flex items-center justify-center text-4xl shadow-2xl mb-8">
🔒
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
<label className="block text-[#d0d3da] mb-3 text-sm md:text-base">
Identifiant bancaire
</label>

<input
type="text"
placeholder="Votre identifiant"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full bg-[#0d1728] border border-[#1d2b45] rounded-2xl px-5 py-4 text-white text-base md:text-lg outline-none focus:border-[#3f6bff] transition-all"
/>
</div>

{/* PASSWORD */}
<div className="mb-6">
<label className="block text-[#d0d3da] mb-3 text-sm md:text-base">
Mot de passe
</label>

<input
type="password"
placeholder="Votre mot de passe"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full bg-[#0d1728] border border-[#1d2b45] rounded-2xl px-5 py-4 text-white text-base md:text-lg outline-none focus:border-[#3f6bff] transition-all"
/>
</div>

{/* OPTIONS */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 text-sm md:text-base">
<label className="flex items-center gap-2 text-[#9aa4b2]">
<input type="checkbox" />
Se souvenir de moi
</label>

<span className="text-[#3f6bff] cursor-pointer hover:text-blue-300 transition-all">
Mot de passe oublié ?
</span>
</div>

{/* BUTTON */}
<button
onClick={handleLogin}
className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#194cff] to-[#3f6bff] text-white text-lg md:text-xl font-bold shadow-2xl hover:scale-[1.02] transition-all duration-300"
>
Se connecter →
</button>

{/* FOOTER */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
<div className="bg-[#0d1728] rounded-xl py-4 text-sm text-[#9aa4b2] border border-[#1b2c4a]">
🔐 SSL Sécurisé
</div>

<div className="bg-[#0d1728] rounded-xl py-4 text-sm text-[#9aa4b2] border border-[#1b2c4a]">
⚡ Support 24/7
</div>

<div className="bg-[#0d1728] rounded-xl py-4 text-sm text-[#9aa4b2] border border-[#1b2c4a]">
🛡 Protection Bancaire
</div>
</div>

</div>
</div>
</div>
</main>
);
}