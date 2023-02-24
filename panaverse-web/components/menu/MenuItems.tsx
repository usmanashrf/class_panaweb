import Link from "next/link";

export default function MenuItems({label, href}:any) {
  return (
    <Link href={href}>{label}</Link>
  )
}
