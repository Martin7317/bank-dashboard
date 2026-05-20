"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Virements() {
const router = useRouter();

return (
<main
style={{
minHeight: "100vh",
background: "#020817",
color: "white",
fontFamily: "Arial",
}}
>
{/* TOPBAR */}
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px",
borderBottom: "1px solid #13203b",
background: "#020817",
position: "sticky",
top: 0,
zIndex: 100,
}}
>
<h1
style={{
color: "#f5c542",
fontSize: "34px",
fontWeight: "bold",
}}
>
LCL
</h1>

<button
onClick={() => router.push("/")}
style={{
padding: "12px 18px",
borderRadius: "12px",
border: "1px solid #ff4d6d",
background: "transparent",
color: "#ff4d6d",
fontWeight: "bold",
cursor: "pointer",
}}
>
Déconnexion
</button>
</div>

<div
style={{
display: "flex",
flexWrap: "wrap",
}}
>
{/* SIDEBAR */}
<aside
style={{
width: "240px",
background:
"linear-gradient(180deg,#03112a,#020817)",
borderRight: "1px solid #13203b",
padding: "25px 18px",
minHeight: "100vh",
flexShrink: 0,
}}
>
<nav
style={{
display: "flex",
flexDirection: "column",
gap: "14px",
}}
>
<Link href="/dashboard" style={link}>
🏠 Tableau de bord
</Link>

<Link href="/comptes" style={link}>
💳 Comptes
</Link>

<Link href="/virements" style={activeLink}>
🔄 Virements
</Link>

<Link href="/cartes" style={link}>
💳 Cartes
</Link>

<Link href="/investissements" style={link}>
📈 Investissements
</Link>

<Link href="/documents" style={link}>
📄 Documents
</Link>

<Link href="/parametres" style={link}>
⚙ Paramètres
</Link>

<Link href="/support" style={link}>
☎ Support
</Link>
</nav>

{/* CONSEILLER */}
<div
style={{
marginTop: "40px",
background: "#0b1830",
border: "1px solid #1b2b4d",
borderRadius: "22px",
padding: "22px",
}}
>
<h3>Conseiller Premium</h3>

<p
style={{
marginTop: "12px",
color: "#94a3b8",
lineHeight: "24px",
fontSize: "14px",
}}
>
Assistance privée et sécurisée
disponible 24h/24.
</p>

<button
style={{
marginTop: "20px",
width: "100%",
padding: "14px",
borderRadius: "14px",
border: "none",
background: "#194cff",
color: "white",
fontWeight: "bold",
cursor: "pointer",
}}
>
Contacter
</button>
</div>
</aside>

{/* CONTENT */}
<section
style={{
flex: 1,
padding: "25px",
minWidth: "320px",
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
fontSize: "clamp(36px,6vw,60px)",
}}
>
🔄 Virements
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Gestion sécurisée des virements
premium
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
+ Nouveau bénéficiaire
</button>
</div>

{/* ALERT */}
<div
style={{
marginTop: "35px",
border: "1px solid #ef4444",
borderRadius: "26px",
padding: "30px",
background:
"linear-gradient(135deg,#180b16,#0f111d)",
}}
>
<h2
style={{
color: "#f87171",
fontSize: "clamp(28px,5vw,42px)",
}}
>
🔒 VIREMENTS BLOQUÉS
</h2>

<p
style={{
marginTop: "16px",
color: "#fca5a5",
lineHeight: "30px",
fontSize: "18px",
}}
>
Les virements nationaux et
internationaux sont temporairement
suspendus durant le contrôle de
conformité bancaire premium.
</p>
</div>

{/* GRID */}
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap: "25px",
marginTop: "40px",
}}
>
{/* FORM */}
<div style={card}>
<h2
style={{
marginBottom: "30px",
fontSize: "30px",
}}
>
💸 Nouveau virement
</h2>

<div
style={{
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<input
placeholder="Nom du bénéficiaire"
style={inputStyle}
/>

<input
placeholder="IBAN"
style={inputStyle}
/>

<input
placeholder="Montant"
style={inputStyle}
/>

<select style={inputStyle}>
<option>
Virement SEPA
</option>

<option>
Virement international
</option>

<option>
Virement instantané
</option>
</select>

<textarea
placeholder="Motif du virement"
style={{
...inputStyle,
height: "120px",
resize: "none",
}}
/>

<button
style={{
marginTop: "10px",
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "18px",
borderRadius: "16px",
fontSize: "18px",
fontWeight: "bold",
cursor: "pointer",
}}
>
Envoyer le virement
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
{/* LIMITES */}
<div style={card}>
<h2>📊 Limites premium</h2>

<div
style={{
marginTop: "30px",
}}
>
<p>Plafond journalier</p>

<h1
style={{
marginTop: "12px",
fontSize: "42px",
}}
>
50 000 €
</h1>

<p
style={{
marginTop: "8px",
color: "#f87171",
}}
>
Suspendu temporairement
</p>
</div>

<div
style={{
marginTop: "35px",
}}
>
<p>International SWIFT</p>

<h1
style={{
marginTop: "12px",
fontSize: "36px",
}}
>
Désactivé
</h1>
</div>
</div>

{/* SECURITY */}
<div style={card}>
<h2>🔐 Sécurité</h2>

<div
style={{
marginTop: "30px",
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<SecurityRow
label="Double authentification"
status="Activée"
green
/>

<SecurityRow
label="Validation bancaire"
status="Active"
green
/>

<SecurityRow
label="SWIFT"
status="Suspendu"
red
/>

<SecurityRow
label="Contrôle conformité"
status="En cours"
red
/>
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
cursor: "pointer",
fontWeight: "bold",
}}
>
Contacter le conseiller
</button>
</div>
</div>
</div>

{/* HISTORY */}
<div style={historyCard}>
<h2
style={{
marginBottom: "30px",
fontSize: "30px",
}}
>
🕒 Historique des virements
</h2>

<TransferRow
name="Société Alpha"
amount="-12 500 €"
status="Bloqué"
red
/>

<TransferRow
name="Dubai Investment Group"
amount="-80 000 €"
status="Suspendu"
red
/>

<TransferRow
name="Cabinet Dupont"
amount="+120 000 €"
status="Validé"
green
/>

<TransferRow
name="Wealth Management London"
amount="-42 500 €"
status="En attente"
orange
/>
</div>
</section>
</div>
</main>
);
}

function SecurityRow({
label,
status,
green,
red,
}: {
label: string;
status: string;
green?: boolean;
red?: boolean;
}) {
return (
<div
style={{
display: "flex",
justifyContent: "space-between",
gap: "20px",
}}
>
<span>{label}</span>

<span
style={{
color: green
? "#4ade80"
: red
? "#f87171"
: "white",
fontWeight: "bold",
}}
>
{status}
</span>
</div>
);
}

function TransferRow({
name,
amount,
status,
red,
green,
orange,
}: {
name: string;
amount: string;
status: string;
red?: boolean;
green?: boolean;
orange?: boolean;
}) {
return (
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "22px 0",
borderBottom:
"1px solid rgba(255,255,255,0.06)",
flexWrap: "wrap",
gap: "14px",
}}
>
<div>
<h3
style={{
fontSize: "22px",
}}
>
{name}
</h3>

<p
style={{
color: "#94a3b8",
marginTop: "5px",
}}
>
Virement bancaire
</p>
</div>

<div
style={{
textAlign: "right",
}}
>
<h3
style={{
fontSize: "24px",
}}
>
{amount}
</h3>

<p
style={{
marginTop: "5px",
color: green
? "#4ade80"
: orange
? "#f59e0b"
: "#f87171",
fontWeight: "bold",
}}
>
{status}
</p>
</div>
</div>
);
}

const link = {
textDecoration: "none",
color: "#d0d3da",
padding: "15px",
borderRadius: "14px",
fontSize: "17px",
};

const activeLink = {
textDecoration: "none",
color: "white",
background: "#194cff",
padding: "15px",
borderRadius: "14px",
fontSize: "17px",
};

const card = {
background: "#0f172a",
borderRadius: "30px",
padding: "35px",
border:
"1px solid rgba(255,255,255,0.05)",
};

const historyCard = {
marginTop: "40px",
background: "#0f172a",
borderRadius: "30px",
padding: "35px",
border:
"1px solid rgba(255,255,255,0.05)",
};

const inputStyle = {
width: "100%",
background: "#111827",
border:
"1px solid rgba(255,255,255,0.05)",
color: "white",
padding: "18px",
borderRadius: "16px",
fontSize: "16px",
outline: "none",
};