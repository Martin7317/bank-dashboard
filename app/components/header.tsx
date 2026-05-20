export default function Header() {
return (
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}
>
<div>
<p style={{ color: "#9aa4b2" }}>
Bonjour,
</p>

<h1
style={{
fontSize: "54px",
marginTop: "8px",
color: "white",
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
gap: "20px",
}}
>
<Circle>🔔</Circle>
<Circle>MD</Circle>
</div>
</div>
);
}

function Circle({
children,
}: {
children: React.ReactNode;
}) {
return (
<div
style={{
width: "60px",
height: "60px",
borderRadius: "50%",
border: "1px solid #23314d",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
{children}
</div>
);
}