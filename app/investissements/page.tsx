import Sidebar from "../components/sidebar";

export default function Investissements() {
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
📈 Investissements
</h1>

<p
style={{
color: "#94a3b8",
marginTop: "10px",
fontSize: "18px",
}}
>
Gestion de portefeuille premium
</p>
</div>

<button
style={{
background: "linear-gradient(135deg,#2563eb,#3b82f6)",
border: "none",
color: "white",
padding: "16px 28px",
borderRadius: "18px",
fontSize: "16px",
cursor: "pointer",
fontWeight: "bold",
boxShadow: "0 10px 30px rgba(37,99,235,0.4)",
}}
>
+ Nouvel investissement
</button>
</div>

{/* ALERTE */}
<div
style={{
marginTop: "35px",
background: "rgba(127,29,29,0.25)",
border: "1px solid rgba(248,113,113,0.4)",
borderRadius: "24px",
padding: "30px",
}}
>
<h2
style={{
color: "#f87171",
fontSize: "28px",
marginBottom: "10px",
}}
>
🔒 Investissements temporairement bloqués
</h2>

<p
style={{
color: "#fecaca",
lineHeight: "30px",
fontSize: "17px",
}}
>
Certaines opérations d’investissement sont suspendues
durant le contrôle de conformité premium.
</p>
</div>

{/* CARDS */}
<div
style={{
marginTop: "40px",
display: "grid",
gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
gap: "25px",
}}
>
{/* CARD 1 */}
<div
style={{
background: "#0f172a",
padding: "30px",
borderRadius: "28px",
border: "1px solid rgba(255,255,255,0.05)",
boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
}}
>
<p
style={{
color: "#94a3b8",
marginBottom: "15px",
}}
>
Portefeuille global
</p>

<h2
style={{
fontSize: "42px",
fontWeight: "bold",
}}
>
320.500 €
</h2>

<p
style={{
marginTop: "15px",
color: "#4ade80",
fontWeight: "bold",
}}
>
+12.4% ce mois
</p>
</div>

{/* CARD 2 */}
<div
style={{
background: "#0f172a",
padding: "30px",
borderRadius: "28px",
border: "1px solid rgba(255,255,255,0.05)",
boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
}}
>
<p
style={{
color: "#94a3b8",
marginBottom: "15px",
}}
>
Actions premium
</p>

<h2
style={{
fontSize: "42px",
fontWeight: "bold",
}}
>
185.000 €
</h2>

<p
style={{
marginTop: "15px",
color: "#22c55e",
fontWeight: "bold",
}}
>
Apple • Tesla • LVMH
</p>
</div>

{/* CARD 3 */}
<div
style={{
background: "#0f172a",
padding: "30px",
borderRadius: "28px",
border: "1px solid rgba(255,255,255,0.05)",
boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
}}
>
<p
style={{
color: "#94a3b8",
marginBottom: "15px",
}}
>
Crypto actifs
</p>

<h2
style={{
fontSize: "42px",
fontWeight: "bold",
}}
>
78.250 €
</h2>

<p
style={{
marginTop: "15px",
color: "#38bdf8",
fontWeight: "bold",
}}
>
BTC • ETH • SOL
</p>
</div>
</div>

{/* TABLEAU */}
<div
style={{
marginTop: "45px",
background: "#0f172a",
borderRadius: "28px",
padding: "35px",
border: "1px solid rgba(255,255,255,0.05)",
}}
>
<h2
style={{
fontSize: "30px",
marginBottom: "30px",
}}
>
💼 Portefeuille détaillé
</h2>

{/* LIGNE */}
{[
{
name: "Apple",
value: "85.000 €",
perf: "+8.4%",
color: "#4ade80",
},
{
name: "Tesla",
value: "42.000 €",
perf: "-2.1%",
color: "#f87171",
},
{
name: "Bitcoin",
value: "61.500 €",
perf: "+14.2%",
color: "#4ade80",
},
{
name: "Ethereum",
value: "16.750 €",
perf: "+5.7%",
color: "#4ade80",
},
].map((item, index) => (
<div
key={index}
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "22px 0",
borderBottom:
index !== 3
? "1px solid rgba(255,255,255,0.06)"
: "none",
}}
>
<div>
<h3
style={{
fontSize: "22px",
}}
>
{item.name}
</h3>

<p
style={{
color: "#94a3b8",
marginTop: "6px",
}}
>
Valeur actuelle
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
{item.value}
</h3>

<p
style={{
color: item.color,
marginTop: "6px",
fontWeight: "bold",
}}
>
{item.perf}
</p>
</div>
</div>
))}
</div>
</div>
</main>
);
}