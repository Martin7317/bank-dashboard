"use client";

import Sidebar from "../components/sidebar";

export default function Parametres() {
return (
<main
style={{
minHeight: "100vh",
background: "#020817",
color: "white",
fontFamily: "Arial",
overflowX: "hidden",
}}
>
{/* SIDEBAR */}
<Sidebar />

{/* CONTENU */}
<div
style={{
marginLeft: "260px",
padding: "40px",
}}
>
{/* HEADER */}
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
gap: "20px",
}}
>
<div>
<h1
style={{
fontSize: "clamp(34px,5vw,58px)",
fontWeight: "bold",
}}
>
⚙ Paramètres
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Sécurité, confidentialité et gestion premium
</p>
</div>

<div
style={{
background: "#0f172a",
border: "1px solid #1e293b",
padding: "18px 24px",
borderRadius: "18px",
}}
>
🔐 Environnement sécurisé
</div>
</div>

{/* PROFIL */}
<div
style={{
marginTop: "35px",
background:
"linear-gradient(135deg,#081225,#020817)",
borderRadius: "30px",
padding: "35px",
border: "1px solid #1e293b",
display: "flex",
justifyContent: "space-between",
flexWrap: "wrap",
gap: "30px",
}}
>
<div
style={{
display: "flex",
gap: "25px",
alignItems: "center",
flexWrap: "wrap",
}}
>
<div
style={{
width: "120px",
height: "120px",
borderRadius: "50%",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: "42px",
fontWeight: "bold",
}}
>
MD
</div>

<div>
<h2
style={{
fontSize: "34px",
}}
>
M. Martin Delacroix ✔
</h2>

<p
style={{
marginTop: "10px",
color: "#facc15",
fontWeight: "bold",
}}
>
👑 Client Professionnel Premium
</p>

<p
style={{
marginTop: "18px",
color: "#94a3b8",
}}
>
📍 Paris Opéra
</p>

<p
style={{
marginTop: "8px",
color: "#94a3b8",
}}
>
Conseiller dédié : Jean-Philippe L.
</p>
</div>
</div>

<div
style={{
display: "flex",
flexDirection: "column",
gap: "16px",
}}
>
<button style={blueButton}>
Modifier le profil
</button>

<button style={darkButton}>
Changer le mot de passe
</button>
</div>
</div>

{/* GRID */}
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap: "25px",
marginTop: "35px",
}}
>
{/* SECURITE */}
<div style={card}>
<h2
style={{
marginBottom: "25px",
}}
>
🛡 Sécurité du compte
</h2>

<div style={row}>
<span>Double authentification</span>

<span style={green}>Activé</span>
</div>

<div style={row}>
<span>Reconnaissance biométrique</span>

<span style={green}>Activé</span>
</div>

<div style={row}>
<span>Notifications de connexion</span>

<span style={green}>Activé</span>
</div>

<div style={row}>
<span>Contrôle conformité</span>

<span style={orange}>En cours</span>
</div>
</div>

{/* NOTIFICATIONS */}
<div style={card}>
<h2
style={{
marginBottom: "25px",
}}
>
🔔 Notifications
</h2>

<div style={row}>
<span>Virements</span>

<span style={green}>ON</span>
</div>

<div style={row}>
<span>Transactions cartes</span>

<span style={green}>ON</span>
</div>

<div style={row}>
<span>Alertes sécurité</span>

<span style={green}>ON</span>
</div>

<div style={row}>
<span>Offres premium</span>

<span style={red}>OFF</span>
</div>
</div>

{/* APPAREILS */}
<div style={card}>
<h2
style={{
marginBottom: "25px",
}}
>
💻 Appareils connectés
</h2>

<div style={row}>
<span>iPhone 15 Pro</span>

<span style={green}>Actif</span>
</div>

<div style={row}>
<span>MacBook Pro</span>

<span style={green}>Vérifié</span>
</div>

<div style={row}>
<span>Windows Chrome</span>

<span style={orange}>Récent</span>
</div>

<button
style={{
marginTop: "30px",
width: "100%",
background: "transparent",
border: "1px solid #ef4444",
color: "#ef4444",
padding: "16px",
borderRadius: "16px",
cursor: "pointer",
fontWeight: "bold",
}}
>
Déconnecter tous les appareils
</button>
</div>

{/* CONFIDENTIALITE */}
<div style={card}>
<h2
style={{
marginBottom: "25px",
}}
>
🔐 Confidentialité
</h2>

<div style={row}>
<span>Exportation des données</span>

<span>→</span>
</div>

<div style={row}>
<span>Politique confidentialité</span>

<span>→</span>
</div>

<div style={row}>
<span>Gestion des sessions</span>

<span>→</span>
</div>

<div style={row}>
<span>Autorisations API</span>

<span>→</span>
</div>
</div>
</div>

{/* PARAMETRES */}
<div
style={{
marginTop: "35px",
background: "#0f172a",
borderRadius: "30px",
padding: "35px",
border: "1px solid #1e293b",
}}
>
<h2
style={{
marginBottom: "30px",
fontSize: "30px",
}}
>
⚙ Paramètres du compte
</h2>

<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(280px,1fr))",
gap: "20px",
}}
>
<div style={settingCard}>
👤 Informations personnelles
</div>

<div style={settingCard}>
💳 Gestion des cartes
</div>

<div style={settingCard}>
🌍 Langue : Français
</div>

<div style={settingCard}>
🌙 Thème : Sombre
</div>
</div>
</div>

{/* DECONNEXION */}
<button
onClick={() => {
window.location.href = "/";
}}
style={{
marginTop: "40px",
width: "100%",
padding: "22px",
borderRadius: "20px",
background:
"linear-gradient(135deg,#3f0d16,#22070c)",
border: "1px solid #ef4444",
color: "#ff6b81",
fontWeight: "bold",
fontSize: "20px",
cursor: "pointer",
}}
>
⎋ Déconnexion sécurisée
</button>
</div>
</main>
);
}

const card = {
background: "#0f172a",
borderRadius: "30px",
padding: "30px",
border: "1px solid #1e293b",
};

const row = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "18px 0",
borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const blueButton = {
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "16px 28px",
borderRadius: "16px",
fontWeight: "bold",
cursor: "pointer",
};

const darkButton = {
background: "#111827",
border: "1px solid #334155",
color: "white",
padding: "16px 28px",
borderRadius: "16px",
fontWeight: "bold",
cursor: "pointer",
};

const green = {
color: "#4ade80",
fontWeight: "bold",
};

const orange = {
color: "#facc15",
fontWeight: "bold",
};

const red = {
color: "#ef4444",
fontWeight: "bold",
};

const settingCard = {
background: "#111827",
border: "1px solid #1e293b",
padding: "24px",
borderRadius: "18px",
fontSize: "18px",
cursor: "pointer",
};