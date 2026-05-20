"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
const router = useRouter();

const [mobile, setMobile] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {
const handleResize = () => {
setMobile(window.innerWidth < 900);
};

handleResize();

window.addEventListener("resize", handleResize);

return () =>
window.removeEventListener(
"resize",
handleResize
);
}, []);

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
padding: mobile ? "15px" : "40px",
fontFamily:
"-apple-system,BlinkMacSystemFont,sans-serif",
}}
>
<div
style={{
width: "100%",
maxWidth: "1400px",
background: "#071120",
borderRadius: mobile ? "20px" : "35px",
overflow: "hidden",
border: "1px solid #16233d",
boxShadow:
"0 0 80px rgba(0,0,0,0.5)",
display: "flex",
flexDirection: mobile
? "column"
: "row",
}}
>
{/* LEFT */}
<div
style={{
flex: 1,
background:
"linear-gradient(180deg,#02122c,#081a38)",
padding: mobile
? "35px 25px"
: "70px",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "space-between",
position: "relative",
}}
>
<div
style={{
position: "absolute",
width: "300px",
height: "300px",
borderRadius: "50%",
background:
"rgba(37,99,235,0.15)",
filter: "blur(100px)",
top: "-80px",
left: "-80px",
}}
/>

<div style={{ position: "relative" }}>
<h1
style={{
fontSize: mobile
? "52px"
: "85px",
fontWeight: "900",
color: "#f5c542",
margin: 0,
}}
>
LCL
</h1>

<p
style={{
color: "#9aa4b2",
fontSize: mobile
? "15px"
: "20px",
marginTop: "10px",
}}
>
Banque Privée Professionnelle
</p>
</div>

<div
style={{
marginTop: mobile
? "40px"
: "80px",
position: "relative",
}}
>
<h2
style={{
fontSize: mobile
? "42px"
: "72px",
lineHeight: mobile
? "52px"
: "82px",
margin: 0,
fontWeight: "800",
}}
>
Accédez à votre espace bancaire premium
</h2>

<p
style={{
marginTop: "30px",
color: "#9aa4b2",
fontSize: mobile
? "16px"
: "22px",
lineHeight: mobile
? "30px"
: "38px",
maxWidth: "700px",
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
display: "grid",
gridTemplateColumns: mobile
? "1fr"
: "1fr 1fr",
gap: "20px",
marginTop: mobile
? "40px"
: "60px",
}}
>
<div
style={{
background:
"rgba(255,255,255,0.06)",
border:
"1px solid rgba(255,255,255,0.1)",
padding: "25px",
borderRadius: "22px",
backdropFilter: "blur(20px)",
}}
>
<div
style={{
fontSize: "35px",
marginBottom: "15px",
}}
>
🔒
</div>

<h3
style={{
margin: 0,
fontSize: "22px",
}}
>
Connexion sécurisée
</h3>

<p
style={{
color: "#9aa4b2",
marginTop: "10px",
lineHeight: "28px",
}}
>
Protection SSL et chiffrement
bancaire avancé.
</p>
</div>

<div
style={{
background:
"rgba(255,255,255,0.06)",
border:
"1px solid rgba(255,255,255,0.1)",
padding: "25px",
borderRadius: "22px",
backdropFilter: "blur(20px)",
}}
>
<div
style={{
fontSize: "35px",
marginBottom: "15px",
}}
>
✔
</div>

<h3
style={{
margin: 0,
fontSize: "22px",
}}
>
Support Premium
</h3>

<p
style={{
color: "#9aa4b2",
marginTop: "10px",
lineHeight: "28px",
}}
>
Assistance bancaire 24h/24 et
7j/7.
</p>
</div>
</div>
</div>

{/* RIGHT */}
<div
style={{
flex: 1,
background: "#08111f",
padding: mobile
? "35px 25px"
: "80px 60px",
color: "white",
display: "flex",
alignItems: "center",
justifyContent: "center",
position: "relative",
}}
>
<div
style={{
position: "absolute",
width: "350px",
height: "350px",
borderRadius: "50%",
background:
"rgba(37,99,235,0.12)",
filter: "blur(120px)",
bottom: "-120px",
right: "-120px",
}}
/>

<div
style={{
width: "100%",
maxWidth: "500px",
position: "relative",
}}
>
<div
style={{
width: mobile
? "80px"
: "100px",
height: mobile
? "80px"
: "100px",
borderRadius: "50%",
background:
"linear-gradient(135deg,#194cff,#3f6bff)",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: mobile
? "35px"
: "45px",
marginBottom: "35px",
boxShadow:
"0 10px 40px rgba(25,76,255,0.4)",
}}
>
🔐
</div>

<h1
style={{
fontSize: mobile
? "48px"
: "72px",
margin: 0,
fontWeight: "800",
}}
>
Bienvenue
</h1>

<p
style={{
color: "#9aa4b2",
marginTop: "15px",
marginBottom: "45px",
fontSize: mobile
? "16px"
: "20px",
}}
>
Connectez-vous à votre espace
sécurisé
</p>

<div
style={{
marginBottom: "25px",
}}
>
<p
style={{
marginBottom: "12px",
color: "#d0d3da",
fontSize: "15px",
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
padding: mobile
? "16px"
: "20px",
borderRadius: "18px",
border:
"1px solid #1d2b45",
background: "#0d1728",
color: "white",
fontSize: mobile
? "16px"
: "18px",
outline: "none",
boxSizing: "border-box",
}}
/>
</div>

<div
style={{
marginBottom: "25px",
}}
>
<p
style={{
marginBottom: "12px",
color: "#d0d3da",
fontSize: "15px",
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
padding: mobile
? "16px"
: "20px",
borderRadius: "18px",
border:
"1px solid #1d2b45",
background: "#0d1728",
color: "white",
fontSize: mobile
? "16px"
: "18px",
outline: "none",
boxSizing: "border-box",
}}
/>
</div>

<div
style={{
display: "flex",
justifyContent:
"space-between",
flexWrap: "wrap",
gap: "15px",
marginBottom: "40px",
color: "#9aa4b2",
fontSize: mobile
? "14px"
: "16px",
}}
>
<span>
Se souvenir de moi
</span>

<span
style={{
color: "#3f6bff",
cursor: "pointer",
}}
>
Mot de passe oublié ?
</span>
</div>

<button
onClick={handleLogin}
style={{
width: "100%",
padding: mobile
? "18px"
: "22px",
borderRadius: "20px",
border: "none",
background:
"linear-gradient(135deg,#194cff,#3f6bff)",
color: "white",
fontSize: mobile
? "18px"
: "22px",
fontWeight: "bold",
cursor: "pointer",
boxShadow:
"0 10px 40px rgba(25,76,255,0.4)",
}}
>
Se connecter →
</button>

<div
style={{
marginTop: "40px",
display: "grid",
gridTemplateColumns: mobile
? "1fr"
: "1fr 1fr 1fr",
gap: "15px",
}}
>
{[
"🔐 SSL Sécurisé",
"⚡ Support 24/7",
"🛡 Protection Bancaire",
].map((item) => (
<div
key={item}
style={{
background:
"rgba(255,255,255,0.05)",
border:
"1px solid rgba(255,255,255,0.08)",
borderRadius: "16px",
padding: "16px",
textAlign: "center",
color: "#9aa4b2",
fontSize: "14px",
}}
>
{item}
</div>
))}
</div>
</div>
</div>
</div>
</main>
);
}