"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cartes() {
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
{/* TOPBAR MOBILE */}
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px",
borderBottom: "1px solid #13203b",
position: "sticky",
top: 0,
background: "#020817",
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

<Link href="/virements" style={link}>
🔄 Virements
</Link>

<Link href="/cartes" style={activeLink}>
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
Votre chargé bancaire privé est
disponible pour toute assistance.
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
fontSize: "clamp(34px,6vw,56px)",
}}
>
💳 Mes cartes
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Gestion des cartes bancaires premium
</p>
</div>

<button
style={{
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
border: "none",
color: "white",
padding: "16px 26px",
borderRadius: "14px",
fontSize: "16px",
cursor: "pointer",
fontWeight: "bold",
}}
>
+ Nouvelle carte
</button>
</div>

{/* ALERT */}
<div
style={{
marginTop: "35px",
background:
"rgba(127,29,29,0.2)",
border: "1px solid #ef4444",
borderRadius: "25px",
padding: "30px",
}}
>
<h2
style={{
color: "#f87171",
fontSize: "clamp(28px,5vw,40px)",
}}
>
🔒 CARTES BLOQUÉES
</h2>

<p
style={{
marginTop: "16px",
color: "#fca5a5",
lineHeight: "30px",
fontSize: "18px",
}}
>
Les paiements, retraits et achats
internationaux sont temporairement
suspendus suite au contrôle de
conformité premium.
</p>
</div>

{/* CARDS */}
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap: "25px",
marginTop: "40px",
}}
>
<BankCard
title="VISA PREMIER"
number="4587"
expiry="12/27"
gradient="linear-gradient(135deg,#1d4ed8,#1e3a8a,#020617)"
/>

<BankCard
title="MASTERCARD GOLD"
number="9843"
expiry="08/26"
gradient="linear-gradient(135deg,#f59e0b,#92400e,#020617)"
/>

<BankCard
title="CARTE VIRTUELLE"
number="1123"
expiry="05/28"
gradient="linear-gradient(135deg,#111827,#020617,#000000)"
/>
</div>

{/* STATS */}
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap: "25px",
marginTop: "40px",
}}
>
{/* LIMITES */}
<div style={darkCard}>
<h2>Limites des cartes</h2>

<div style={{ marginTop: "30px" }}>
<p>Plafond mensuel premium</p>

<h1
style={{
marginTop: "14px",
fontSize: "42px",
}}
>
50 000 €
</h1>

<p
style={{
marginTop: "10px",
color: "#f87171",
}}
>
Paiements suspendus
</p>
</div>

<div style={{ marginTop: "35px" }}>
<p>Retraits distributeurs</p>

<h1
style={{
marginTop: "14px",
fontSize: "42px",
}}
>
10 000 €
</h1>

<p
style={{
marginTop: "10px",
color: "#f87171",
}}
>
Retraits désactivés
</p>
</div>
</div>

{/* SECURITY */}
<div style={darkCard}>
<h2>Options sécurité</h2>

<div
style={{
marginTop: "30px",
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<SecurityRow
label="Paiement en ligne"
status="Bloqué"
/>

<SecurityRow
label="Sans contact"
status="Bloqué"
/>

<SecurityRow
label="Paiement étranger"
status="Bloqué"
/>

<SecurityRow
label="Carte virtuelle"
status="Active"
green
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

{/* TRANSACTIONS */}
<div style={transactionsCard}>
<h2>Dernières opérations carte</h2>

<Transaction
label="🟢 Hôtel Peninsula Paris"
value="-1 240 €"
/>

<Transaction
label="🔵 Air France Business"
value="-3 820 €"
/>

<Transaction
label="🟡 Apple Store"
value="-2 450 €"
/>

<Transaction
label="🟣 Paiement refusé"
value="Bloqué"
red
/>
</div>
</section>
</div>
</main>
);
}

function BankCard({
title,
number,
expiry,
gradient,
}: {
title: string;
number: string;
expiry: string;
gradient: string;
}) {
return (
<div
style={{
background: gradient,
borderRadius: "30px",
padding: "30px",
minHeight: "240px",
position: "relative",
boxShadow:
"0 20px 60px rgba(0,0,0,0.4)",
}}
>
<div
style={{
display: "flex",
justifyContent: "space-between",
}}
>
<h2>{title}</h2>

<span style={{ fontSize: "26px" }}>
📶
</span>
</div>

<p
style={{
marginTop: "45px",
fontSize: "28px",
letterSpacing: "4px",
}}
>
•••• •••• •••• {number}
</p>

<p
style={{
marginTop: "18px",
color: "#cbd5e1",
}}
>
Expire le {expiry}
</p>

<p
style={{
marginTop: "10px",
fontWeight: "bold",
}}
>
M. Martin Delacroix
</p>

<div
style={{
position: "absolute",
right: "25px",
bottom: "25px",
background:
"rgba(239,68,68,0.2)",
color: "#f87171",
padding: "10px 18px",
borderRadius: "12px",
fontWeight: "bold",
}}
>
BLOQUÉE
</div>
</div>
);
}

function SecurityRow({
label,
status,
green,
}: {
label: string;
status: string;
green?: boolean;
}) {
return (
<div
style={{
display: "flex",
justifyContent: "space-between",
}}
>
<span>{label}</span>

<span
style={{
color: green
? "#4ade80"
: "#ef4444",
fontWeight: "bold",
}}
>
{status}
</span>
</div>
);
}

function Transaction({
label,
value,
red,
}: {
label: string;
value: string;
red?: boolean;
}) {
return (
<div
style={{
display: "flex",
justifyContent: "space-between",
padding: "22px 0",
borderBottom: "1px solid #eee",
flexWrap: "wrap",
gap: "10px",
}}
>
<span>{label}</span>

<span
style={{
color: red
? "#ef4444"
: "#111",
fontWeight: "bold",
}}
>
{value}
</span>
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

const darkCard = {
background: "#0f172a",
borderRadius: "30px",
padding: "30px",
};

const transactionsCard = {
marginTop: "40px",
background: "white",
borderRadius: "30px",
padding: "35px",
color: "#111",
};