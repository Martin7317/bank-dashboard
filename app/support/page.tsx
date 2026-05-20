export default function Support() {
return (
<main
style={{
minHeight: "100vh",
background: "#020817",
color: "white",
padding: "40px",
fontFamily: "Arial",
overflowX: "hidden",
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
🎧 Support Premium
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Assistance bancaire sécurisée et dédiée
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
📞 Assistance urgente
</button>
</div>

{/* ALERT */}
<div
style={{
marginTop: "35px",
background: "rgba(37,99,235,0.12)",
border:
"1px solid rgba(59,130,246,0.3)",
borderRadius: "25px",
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
fontSize: "30px",
}}
>
🔒 Support sécurisé actif
</h2>

<p
style={{
marginTop: "12px",
color: "#bfdbfe",
lineHeight: "30px",
fontSize: "17px",
}}
>
Votre conseiller premium est disponible
pour vous accompagner dans vos démarches
bancaires et de conformité.
</p>
</div>

<div>
<p style={{ color: "#94a3b8" }}>
Conseiller dédié
</p>

<h3
style={{
marginTop: "12px",
fontSize: "22px",
}}
>
Jean-Philippe Laurent
</h3>
</div>
</div>

{/* GRID */}
<div
style={{
display: "grid",
gridTemplateColumns:
"1.5fr 1fr",
gap: "25px",
marginTop: "40px",
}}
>
{/* CHAT */}
<div
style={{
background: "#0f172a",
borderRadius: "30px",
padding: "35px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<h2
style={{
fontSize: "30px",
marginBottom: "30px",
}}
>
💬 Messagerie sécurisée
</h2>

{/* MESSAGES */}
<div
style={{
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<div
style={{
background: "#111827",
padding: "20px",
borderRadius: "18px",
maxWidth: "80%",
}}
>
<p
style={{
color: "#60a5fa",
fontWeight: "bold",
marginBottom: "8px",
}}
>
Conseiller
</p>

<p>
Bonjour Monsieur Delacroix,
nous analysons actuellement votre
dossier de conformité bancaire.
</p>
</div>

<div
style={{
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
padding: "20px",
borderRadius: "18px",
alignSelf: "flex-end",
maxWidth: "80%",
}}
>
<p
style={{
fontWeight: "bold",
marginBottom: "8px",
}}
>
Vous
</p>

<p>
Merci. Pouvez-vous me transmettre
les documents nécessaires ?
</p>
</div>
</div>

{/* INPUT */}
<div
style={{
marginTop: "30px",
display: "flex",
gap: "15px",
}}
>
<input
placeholder="Écrire un message..."
style={{
flex: 1,
background: "#111827",
border:
"1px solid rgba(255,255,255,0.05)",
color: "white",
padding: "18px",
borderRadius: "16px",
outline: "none",
fontSize: "16px",
}}
/>

<button
style={{
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "18px 24px",
borderRadius: "16px",
cursor: "pointer",
fontWeight: "bold",
}}
>
Envoyer
</button>
</div>
</div>

{/* RIGHT */}
<div
style={{
display: "flex",
flexDirection: "column",
gap: "25px",
}}
>
{/* CONSEILLER */}
<div
style={{
background: "#0f172a",
borderRadius: "28px",
padding: "30px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<h2>👨‍💼 Conseiller dédié</h2>

<div
style={{
marginTop: "25px",
textAlign: "center",
}}
>
<div
style={{
width: "90px",
height: "90px",
borderRadius: "50%",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "0 auto",
fontSize: "32px",
fontWeight: "bold",
}}
>
JL
</div>

<h3
style={{
marginTop: "20px",
fontSize: "24px",
}}
>
Jean-Philippe Laurent
</h3>

<p
style={{
color: "#94a3b8",
marginTop: "8px",
}}
>
Banque privée premium
</p>

<button
style={{
marginTop: "25px",
width: "100%",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "16px",
borderRadius: "14px",
cursor: "pointer",
fontWeight: "bold",
}}
>
📞 Appeler
</button>
</div>
</div>

{/* UPLOAD */}
<div
style={{
background: "#0f172a",
borderRadius: "28px",
padding: "30px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<h2>📤 Documents</h2>

<div
style={{
marginTop: "25px",
border:
"2px dashed rgba(255,255,255,0.1)",
borderRadius: "18px",
padding: "35px",
textAlign: "center",
}}
>
<p
style={{
color: "#94a3b8",
lineHeight: "30px",
}}
>
Déposez vos documents
justificatifs ici.
</p>

<button
style={{
marginTop: "20px",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "14px 20px",
borderRadius: "14px",
cursor: "pointer",
fontWeight: "bold",
}}
>
Choisir un fichier
</button>
</div>
</div>
</div>
</div>

{/* TICKETS */}
<div
style={{
marginTop: "40px",
background: "#0f172a",
borderRadius: "30px",
padding: "35px",
border:
"1px solid rgba(255,255,255,0.05)",
}}
>
<h2
style={{
marginBottom: "30px",
fontSize: "30px",
}}
>
🧾 Tickets assistance
</h2>

{[
{
title:
"Contrôle conformité bancaire",
status: "En cours",
color: "#facc15",
},

{
title:
"Blocage virements internationaux",
status: "Suspendu",
color: "#f87171",
},

{
title:
"Validation justificatif identité",
status: "Validé",
color: "#4ade80",
},
].map((ticket, index) => (
<div
key={index}
style={{
display: "flex",
justifyContent:
"space-between",
alignItems: "center",
padding: "22px 0",
borderBottom:
index !== 2
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
{ticket.title}
</h3>

<p
style={{
color: "#94a3b8",
marginTop: "6px",
}}
>
Ticket support premium
</p>
</div>

<div
style={{
background:
"rgba(255,255,255,0.04)",
padding: "12px 18px",
borderRadius: "14px",
color: ticket.color,
fontWeight: "bold",
}}
>
{ticket.status}
</div>
</div>
))}
</div>
</main>
);
}