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
<main
style={{
minHeight: "100vh",
background:
"linear-gradient(135deg,#020817,#07152d,#020817)",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "20px",
fontFamily: "Arial",
}}
>
<div
style={{
width: "100%",
maxWidth: "1200px",
display: "grid",
gridTemplateColumns: "1fr 1fr",
background: "#071120",
borderRadius: "35px",
overflow: "hidden",
border: "1px solid #16233d",
boxShadow: "0 0 50px rgba(0,0,0,0.4)",
}}
>
{/* LEFT */}
<div
style={{
background:
"linear-gradient(180deg,#02122c,#081a38)",
padding: "60px",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "space-between",
}}
>
<div>
<h1
style={{
fontSize: "70px",
color: "#f5c542",
marginBottom: "10px",
}}
>
LCL
</h1>

<p
style={{
color: "#9aa4b2",
fontSize: "18px",
}}
>
Banque Privée Professionnelle
</p>
</div>

<div>
<h2
style={{
fontSize: "52px",
lineHeight: "70px",
}}
>
Accédez à votre espace bancaire premium
</h2>

<p
style={{
marginTop: "25px",
color: "#9aa4b2",
fontSize: "18px",
lineHeight: "32px",
}}
>
Gérez vos comptes professionnels,
investissements, cartes premium et
virements sécurisés depuis votre
tableau de bord privé.
</p>
</div>

<div
style={{
display: "flex",
gap: "20px",
flexWrap: "wrap",
}}
>
<div
style={{
background: "#0d1b33",
padding: "20px",
borderRadius: "18px",
flex: 1,
minWidth: "180px",
}}
>
🔒 Connexion sécurisée
</div>

<div
style={{
background: "#0d1b33",
padding: "20px",
borderRadius: "18px",
flex: 1,
minWidth: "180px",
}}
>
✔ Support premium
</div>
</div>
</div>

{/* RIGHT */}
<div
style={{
padding: "70px 50px",
background: "#08111f",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "center",
}}
>
<div
style={{
width: "90px",
height: "90px",
borderRadius: "50%",
background:
"linear-gradient(135deg,#194cff,#3f6bff)",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "38px",
marginBottom: "30px",
}}
>
🔒
</div>

<h1
style={{
fontSize: "52px",
marginBottom: "10px",
}}
>
Bienvenue
</h1>

<p
style={{
color: "#9aa4b2",
marginBottom: "45px",
fontSize: "18px",
}}
>
Connectez-vous à votre espace sécurisé
</p>

{/* EMAIL */}
<div style={{ marginBottom: "25px" }}>
<p
style={{
marginBottom: "10px",
color: "#d0d3da",
}}
>
Identifiant bancaire
</p>

<input
type="text"
placeholder="Votre identifiant"
value={email}
onChange={(e) =>
setEmail(e.target.value)
}
style={{
width: "100%",
padding: "18px",
borderRadius: "16px",
border: "1px solid #1d2b45",
background: "#0d1728",
color: "white",
fontSize: "17px",
outline: "none",
}}
/>
</div>

{/* PASSWORD */}
<div style={{ marginBottom: "20px" }}>
<p
style={{
marginBottom: "10px",
color: "#d0d3da",
}}
>
Mot de passe
</p>

<input
type="password"
placeholder="Votre mot de passe"
value={password}
onChange={(e) =>
setPassword(e.target.value)
}
style={{
width: "100%",
padding: "18px",
borderRadius: "16px",
border: "1px solid #1d2b45",
background: "#0d1728",
color: "white",
fontSize: "17px",
outline: "none",
}}
/>
</div>

<div
style={{
display: "flex",
justifyContent: "space-between",
marginBottom: "35px",
color: "#9aa4b2",
fontSize: "15px",
}}
>
<span>Se souvenir de moi</span>

<span
style={{
color: "#3f6bff",
cursor: "pointer",
}}
>
Mot de passe oublié ?
</span>
</div>

{/* BUTTON */}
<button
onClick={handleLogin}
style={{
width: "100%",
padding: "20px",
borderRadius: "18px",
border: "none",
background:
"linear-gradient(135deg,#194cff,#3f6bff)",
color: "white",
fontSize: "20px",
fontWeight: "bold",
cursor: "pointer",
boxShadow:
"0 10px 30px rgba(25,76,255,0.4)",
}}
>
Se connecter →
</button>

{/* FOOTER */}
<div
style={{
marginTop: "40px",
display: "flex",
justifyContent: "space-between",
flexWrap: "wrap",
gap: "15px",
color: "#9aa4b2",
fontSize: "14px",
}}
>
<span>Connexion sécurisée</span>
<span>Support 24/7</span>
<span>Protection SSL</span>
</div>
</div>
</div>
</main>
);
}