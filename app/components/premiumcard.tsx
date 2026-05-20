export default function PremiumCard({
title,
value,
}: {
title: string;
value: string;
}) {
return (
<div
style={{
background: "#101c2f",
padding: "30px",
borderRadius: "24px",
color: "white",
}}
>
<h3>{title}</h3>

<p
style={{
marginTop: "15px",
fontSize: "22px",
}}
>
{value}
</p>
</div>
);
}