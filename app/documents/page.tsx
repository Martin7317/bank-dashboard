import Sidebar from "../components/sidebar";

export default function Documents() {
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
marginLeft: "240px",
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
fontSize: "52px",
fontWeight: "bold",
}}
>
📄 Documents
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Coffre-fort numérique bancaire premium
</p>
</div>

<button
style={{
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "16px 28px",
borderRadius: "16px",
fontSize: "16px",
cursor: "pointer",
fontWeight: "bold",
boxShadow:
"0 10px 30px rgba(37,99,235,0.4)",
}}
>
⬆ Importer un document
</button>
</div>

{/* ALERT */}
<div
style={{
marginTop: "35px",
background: "rgba(37,99,235,0.1)",
border: "1px solid rgba(59,130,246,0.3)",
borderRadius: "24px",
padding: "30px",
display: "flex",
justifyContent: "space-between",
flexWrap: "wrap",
gap: "20px",
}}
>
<div>
<h2
style={{
color: "#60a5fa",
fontSize: "28px",
}}
>
🔒 Espace sécurisé
</h2>

<p
style={{
marginTop: "12px",
color: "#bfdbfe",
fontSize: "17px",
lineHeight: "30px",
}}
>
Tous vos documents bancaires sont
chiffrés et stockés dans un espace
sécurisé premium.
</p>
</div>

<div>
<p style={{ color: "#94a3b8" }}>
Dernière synchronisation
</p>

<h3
style={{
marginTop: "10px",
fontSize: "22px",
}}
>
Aujourd’hui • 09:42
</h3>
</div>
</div>

{/* CARDS */}
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",
gap: "25px",
marginTop: "40px",
}}
>
{/* CARD */}
<div style={card}>
<div style={icon}>
📑
</div>

<h2
style={{
marginTop: "25px",
}}
>
Relevés bancaires
</h2>

<p
style={{
marginTop: "10px",
color: "#94a3b8",
lineHeight: "28px",
}}
>
Historique complet des relevés PDF.
</p>

<button style={button}>
Voir les documents
</button>
</div>

{/* CARD */}
<div style={card}>
<div style={icon}>
🧾
</div>

<h2
style={{
marginTop: "25px",
}}
>
Contrats
</h2>

<p
style={{
marginTop: "10px",
color: "#94a3b8",
lineHeight: "28px",
}}
>
Contrats bancaires et documents légaux.
</p>

<button style={button}>
Voir les contrats
</button>
</div>

{/* CARD */}
<div style={card}>
<div style={icon}>
☁
</div>

<h2
style={{
marginTop: "25px",
}}
>
Stockage cloud
</h2>

<p
style={{
marginTop: "10px",
color: "#94a3b8",
lineHeight: "28px",
}}
>
Sauvegarde premium sécurisée.
</p>

<button style={button}>
Gérer l’espace
</button>
</div>
</div>

{/* TABLEAU */}
<div
style={{
marginTop: "45px",
background: "#0f172a",
borderRadius: "30px",
padding: "35px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "30px",
flexWrap: "wrap",
gap: "20px",
}}
>
<h2
style={{
fontSize: "30px",
}}
>
📂 Documents récents
</h2>

<input
placeholder="Rechercher..."
style={{
background: "#111827",
border:
"1px solid rgba(255,255,255,0.05)",
color: "white",
padding: "14px 18px",
borderRadius: "14px",
width: "280px",
outline: "none",
}}
/>
</div>

{/* LIGNES */}
{[
{
name: "Relevé bancaire Avril 2025",
type: "PDF",
size: "2.4 MB",
},

{
name: "Contrat Premium Banking",
type: "PDF",
size: "4.8 MB",
},

{
name: "Attestation de compte",
type: "PDF",
size: "1.1 MB",
},

{
name: "Document fiscal 2025",
type: "PDF",
size: "3.2 MB",
},
].map((doc, index) => (
<div
key={index}
style={{
display: "flex",
justifyContent:
"space-between",
alignItems: "center",
padding: "22px 0",
borderBottom:
index !== 3
? "1px solid rgba(255,255,255,0.06)"
: "none",
flexWrap: "wrap",
gap: "20px",
}}
>
<div>
<h3
style={{
fontSize: "22px",
}}
>
{doc.name}
</h3>

<p
style={{
color: "#94a3b8",
marginTop: "6px",
}}
>
{doc.type} • {doc.size}
</p>
</div>

<div
style={{
display: "flex",
gap: "12px",
}}
>
<button style={smallButton}>
👁 Aperçu
</button>

<button style={smallButton}>
⬇ Télécharger
</button>
</div>
</div>
))}
</div>

{/* BAS */}
<div
style={{
display: "grid",
gridTemplateColumns:
"1fr 1fr",
gap: "25px",
marginTop: "40px",
}}
>
{/* ACTIVITE */}
<div
style={{
background: "#0f172a",
borderRadius: "28px",
padding: "30px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<h2>
🕒 Activité récente
</h2>

<div
style={{
marginTop: "25px",
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<div style={activity}>
<span>
Téléchargement PDF
</span>

<span style={blue}>
Aujourd’hui
</span>
</div>

<div style={activity}>
<span>
Signature électronique
</span>

<span style={green}>
Validée
</span>
</div>

<div style={activity}>
<span>
Synchronisation cloud
</span>

<span style={green}>
Active
</span>
</div>
</div>
</div>

{/* SECURITE */}
<div
style={{
background: "#0f172a",
borderRadius: "28px",
padding: "30px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<h2>
🔐 Sécurité
</h2>

<div
style={{
marginTop: "25px",
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<div style={activity}>
<span>
Documents chiffrés
</span>

<span style={green}>
Activé
</span>
</div>

<div style={activity}>
<span>
Double authentification
</span>

<span style={green}>
Active
</span>
</div>

<div style={activity}>
<span>
Archivage premium
</span>

<span style={blue}>
Cloud sécurisé
</span>
</div>
</div>

<button
style={{
marginTop: "30px",
width: "100%",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "16px",
borderRadius: "14px",
fontWeight: "bold",
cursor: "pointer",
}}
>
Gérer la sécurité
</button>
</div>
</div>
</div>
</main>
);
}

const card = {
background: "#0f172a",
borderRadius: "28px",
padding: "30px",
border:
"1px solid rgba(255,255,255,0.05)",
boxShadow:
"0 10px 40px rgba(0,0,0,0.35)",
};

const icon = {
width: "70px",
height: "70px",
borderRadius: "20px",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "32px",
};

const button = {
marginTop: "25px",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "14px 18px",
borderRadius: "14px",
cursor: "pointer",
fontWeight: "bold",
};

const smallButton = {
background: "#111827",
border:
"1px solid rgba(255,255,255,0.05)",
color: "white",
padding: "12px 16px",
borderRadius: "12px",
cursor: "pointer",
};

const activity = {
display: "flex",
justifyContent: "space-between",
};

const green = {
color: "#4ade80",
fontWeight: "bold",
};

const blue = {
color: "#60a5fa",
fontWeight: "bold",
};
