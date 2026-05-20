export default function Transactions() {
return (
<main
style={{
minHeight: "100vh",
background: "#071122",
color: "white",
padding: "40px",
fontFamily: "Arial",
}}
>
<h1 style={{ fontSize: "42px" }}>
💸 Transactions
</h1>

<div
style={{
marginTop: "30px",
background: "#132238",
borderRadius: "20px",
padding: "25px",
}}
>
<h2>Historique</h2>

<div style={{ marginTop: "20px" }}>
<p>🛒 Amazon -120 €</p>
<p style={{ marginTop: "15px" }}>
🍔 McDonald's -25 €
</p>
<p style={{ marginTop: "15px" }}>
💰 Salaire +3200 €
</p>
<p style={{ marginTop: "15px" }}>
✈️ Air France -450 €
</p>
</div>
</div>
</main>
);
}