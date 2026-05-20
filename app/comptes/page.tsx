"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Comptes() {
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

<Link href="/comptes" style={activeLink}>
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
fontSize: "clamp(36px,6vw,60px)",
}}
>
🏦 Mes comptes
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Gestion premium de vos comptes
professionnels
</p>
</div>

<button
style={{
background:
"linear-gradient(135deg,#2563eb,#1d4ed8)",
color: "white",
border: "none",
padding: "16px 28px",
borderRadius: "14px",
fontSize: "16px",
cursor: "pointer",
fontWeight: "bold",
}}
>
+ Ouvrir un compte
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
🔒 Contrôle conformité bancaire
</h2>

<p
style={{
marginTop: "16px",
color: "#fca5a5",
lineHeight: "30px",
fontSize: "18px",
}}
>
Certaines opérations sont
temporairement limitées durant le
contrôle de conformité premium.
</p>
</div>

{/* COMPTES */}
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(280px,1fr))",
gap: "25px",
marginTop: "40px",
}}
>
<AccountCard
title="COMPTE PRINCIPAL"
amount="502 001 €"
subtitle="Solde disponible"
iban="FR76 3000 1004 12AB 1234"
blue
/>

<AccountCard
title="COMPTE ÉPARGNE"
amount="45 000 €"
subtitle="Épargne premium"
iban="FR76 3000 4000 98CD 7821"
/>

<AccountCard
title="COMPTE DEVISES"
amount="12 450 $"
subtitle="Compte USD"
iban="US45 5000 3456 78XZ"
/>

<AccountCard
title="COMPTE BUSINESS"
amount="98 765 €"
subtitle="Compte professionnel"
iban="FR76 5000 9987 65LM"
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
{/* LEFT */}
<div style={darkCard}>
<h2>Informations bancaires</h2>

<div
style={{
marginTop: "30px",
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<InfoRow
label="Conseiller"
value="Jean-Philippe L."
/>

<InfoRow
label="Agence"
value="Paris Opéra"
/>

<InfoRow
label="Type client"
value="Professionnel Premium"
/>

<InfoRow
label="Statut"
value="Sous contrôle"
red
/>
</div>
</div>

{/* RIGHT */}
<div style={darkCard}>
<h2>Accès & sécurité</h2>

<div
style={{
marginTop: "30px",
display: "flex",
flexDirection: "column",
gap: "20px",
}}
>
<InfoRow
label="2FA"
value="Activé"
green
/>

<InfoRow
label="Paiements"
value="Suspendus"
red
/>

<InfoRow
label="Retraits"
value="Suspendus"
red
/>

<InfoRow
label="Support premium"
value="Disponible"
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

{/* OPERATIONS */}
<div
style={{
marginTop: "40px",
background: "#081225",
borderRadius: "30px",
padding: "35px",
border: "1px solid #1e293b",
overflowX: "auto",
}}
>
<h2
style={{
marginBottom: "30px",
fontSize: "32px",
}}
>
Dernières opérations
</h2>

<table
style={{
width: "100%",
borderCollapse: "collapse",
minWidth: "700px",
}}
>
<thead>
<tr
style={{
color: "#94a3b8",
textAlign: "left",
}}
>
<th style={th}>Date</th>
<th style={th}>Description</th>
<th style={th}>Catégorie</th>
<th style={th}>Montant</th>
<th style={th}>Statut</th>
</tr>
</thead>

<tbody>
<OperationRow
date="19/05/2025"
desc="Virement reçu - Société ABC"
category="Virement"
amount="+120 000 €"
positive
/>

<OperationRow
date="18/05/2025"
desc="Investissement Alpha"
category="Placement"
amount="-85 500 €"
/>

<OperationRow
date="17/05/2025"
desc="Paiement Hôtel Peninsula"
category="Carte"
amount="-1 240 €"
/>

<OperationRow
date="16/05/2025"
desc="Retrait distributeur"
category="Retrait"
amount="Suspendu"
red
/>
</tbody>
</table>
</div>
</section>
</div>
</main>
);
}

function AccountCard({
title,
amount,
subtitle,
iban,
blue,
}: {
title: string;
amount: string;
subtitle: string;
iban: string;
blue?: boolean;
}) {
return (
<div
style={{
background: blue
? "linear-gradient(135deg,#1d4ed8,#172554)"
: "#081225",
borderRadius: "26px",
padding: "30px",
border: blue
? "none"
: "1px solid #1e293b",
boxShadow:
"0 10px 40px rgba(0,0,0,0.4)",
}}
>
<h3
style={{
fontSize: "22px",
marginBottom: "20px",
}}
>
{title}
</h3>

<p
style={{
fontSize: "42px",
fontWeight: "bold",
}}
>
{amount}
</p>

<p
style={{
marginTop: "10px",
color: "#94a3b8",
}}
>
{subtitle}
</p>

<p
style={{
marginTop: "35px",
color: "#cbd5e1",
wordBreak: "break-word",
}}
>
{iban}
</p>

<button
style={{
marginTop: "25px",
background: "#0f172a",
border: "1px solid #334155",
color: "white",
padding: "12px 22px",
borderRadius: "12px",
cursor: "pointer",
}}
>
Voir détails →
</button>
</div>
);
}

function InfoRow({
label,
value,
red,
green,
}: {
label: string;
value: string;
red?: boolean;
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
color: red
? "#ef4444"
: green
? "#22c55e"
: "white",
fontWeight: "bold",
}}
>
{value}
</span>
</div>
);
}

function OperationRow({
date,
desc,
category,
amount,
positive,
red,
}: {
date: string;
desc: string;
category: string;
amount: string;
positive?: boolean;
red?: boolean;
}) {
return (
<tr>
<td style={td}>{date}</td>
<td style={td}>{desc}</td>
<td style={td}>{category}</td>

<td
style={{
...td,
color: positive
? "#22c55e"
: red
? "#ef4444"
: "#f87171",
fontWeight: "bold",
}}
>
{amount}
</td>

<td
style={{
...td,
color: positive
? "#22c55e"
: red
? "#ef4444"
: "#22c55e",
}}
>
{red ? "Suspendu" : "Exécutée"}
</td>
</tr>
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

const th = {
paddingBottom: "20px",
};

const td = {
padding: "20px 0",
};