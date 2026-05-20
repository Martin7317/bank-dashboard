"use client";

import Link from "next/link";

export default function Sidebar() {
return (
<aside
style={{
width: "250px",
height: "100vh",
background: "#081120",
position: "fixed",
left: 0,
top: 0,
padding: "30px 20px",
borderRight: "1px solid #1e293b",
display: "flex",
flexDirection: "column",
gap: "18px",
zIndex: 1000,
}}
>
<h1
style={{
color: "#facc15",
fontSize: "42px",
marginBottom: "30px",
}}
>
LCL
</h1>

<Link href="/dashboard" style={linkStyle}>
🏠 Tableau de bord
</Link>

<Link href="/comptes" style={linkStyle}>
💳 Comptes
</Link>

<Link href="/virements" style={linkStyle}>
🔁 Virements
</Link>

<Link href="/cartes" style={linkStyle}>
💳 Cartes
</Link>

<Link href="/investissements" style={linkStyle}>
📈 Investissements
</Link>

<Link href="/documents" style={linkStyle}>
📄 Documents
</Link>

<Link href="/support" style={linkStyle}>
🎧 Support
</Link>

<Link href="/parametres" style={linkStyle}>
⚙️ Paramètres
</Link>
</aside>
);
}

const linkStyle = {
background: "#10213a",
color: "white",
padding: "16px",
borderRadius: "14px",
textDecoration: "none",
fontSize: "18px",
};