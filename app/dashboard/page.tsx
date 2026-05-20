"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
const router = useRouter();

return (
<main
style={{
minHeight: "100vh",
background: "#020817",
fontFamily: "Arial",
color: "white",
}}
>
{/* MOBILE TOPBAR */}
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
<Link href="/dashboard" style={activeLink}>
🏠 Tableau de bord
</Link>

<Link href="/comptes" style={link}>
💳 Comptes
</Link>

<Link href="/virements" style={link}>
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
<h3>Conseiller premium</h3>

<p
style={{
color: "#9aa4b2",
marginTop: "12px",
lineHeight: "24px",
fontSize: "14px",
}}
>
Assistance privée et sécurisée 24h/24.
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
<p style={{ color: "#9aa4b2" }}>
Bonjour,
</p>

<h1
style={{
fontSize: "clamp(34px,6vw,58px)",
marginTop: "8px",
}}
>
M. Martin Delacroix ✔
</h1>

<p
style={{
color: "#9aa4b2",
marginTop: "10px",
}}
>
Espace Client Professionnel
</p>
</div>

<div
style={{
display: "flex",
gap: "16px",
}}
>
<div style={iconCircle}>🔔</div>

<div
style={{
...iconCircle,
background: "#194cff",
border: "none",
fontWeight: "bold",
}}
>
MD
</div>
</div>
</div>

{/* ALERT */}
<div
style={{
marginTop: "35px",
border: "1px solid #ff4d6d",
borderRadius: "30px",
padding: "30px",
background:
"linear-gradient(135deg,#180b16,#0f111d)",
}}
>
<h2
style={{
color: "#ff5d73",
fontSize: "clamp(28px,5vw,44px)",
}}
>
🔒 COMPTE BLOQUÉ
</h2>

<p
style={{
marginTop: "18px",
color: "#d0d3da",
lineHeight: "32px",
fontSize: "18px",
}}
>
Votre compte professionnel est
temporairement bloqué durant le
contrôle de conformité premium.
</p>
</div>

{/* MAIN CARD */}
<div
style={{
marginTop: "30px",
background: "white",
borderRadius: "30px",
padding: "35px",
color: "#111",
}}
>
<p style={{ color: "#666" }}>
Solde disponible
</p>

<h1
style={{
fontSize: "clamp(44px,8vw,80px)",
marginTop: "20px",
}}
>
502.001,00 €
</h1>

<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap: "20px",
marginTop: "35px",
}}
>
<PremiumBox
title="💳 Cartes"
amount="50 000 €"
/>

<PremiumBox
title="🏦 Épargne"
amount="45 000 €"
/>

<PremiumBox
title="📈 Investissements"
amount="320 500 €"
/>

<PremiumBox
title="₿ Crypto"
amount="18 250 €"
/>
</div>
</div>

{/* OPERATIONS */}
<div
style={{
marginTop: "30px",
background: "white",
borderRadius: "30px",
padding: "35px",
color: "#111",
}}
>
<h2>Dernières opérations</h2>

<Operation
label="🟢 Virement reçu - Société Dupont"
value="+120 000 €"
positive
/>

<Operation
label="🔵 Investissement Alpha"
value="-85 500 €"
/>

<Operation
label="🟡 Hôtel Le Marois"
value="-320 €"
/>
</div>
</section>
</div>
</main>
);
}

function PremiumBox({
title,
amount,
}: {
title: string;
amount: string;
}) {
return (
<div
style={{
background:
"linear-gradient(135deg,#102041,#0a1224)",
borderRadius: "24px",
padding: "25px",
border: "1px solid #1b2b4d",
}}
>
<h3
style={{
fontSize: "20px",
}}
>
{title}
</h3>

<h1
style={{
marginTop: "18px",
fontSize: "36px",
}}
>
{amount}
</h1>
</div>
);
}

function Operation({
label,
value,
positive,
}: {
label: string;
value: string;
positive?: boolean;
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
color: positive
? "#1bbf6b"
: "#ff5d73",
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

const iconCircle = {
width: "58px",
height: "58px",
borderRadius: "50%",
border: "1px solid #23314d",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "22px",
};