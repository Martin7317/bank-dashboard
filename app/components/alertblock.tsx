export default function AlertBlock() {
return (
<div
style={{
marginTop: "40px",
border: "1px solid #ff4d6d",
borderRadius: "30px",
padding: "35px",
background:
"linear-gradient(135deg,#180b16,#0f111d)",
color: "white",
}}
>
<h2
style={{
color: "#ff5d73",
fontSize: "38px",
}}
>
🔒 COMPTE BLOQUÉ
</h2>

<p
style={{
marginTop: "15px",
}}
>
Votre compte est actuellement bloqué.
</p>
</div>
);
}