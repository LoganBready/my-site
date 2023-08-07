import Link from "next/link"
import { LinksDataProps } from "./links.constants"

export const Links = ({ linksData }: LinksDataProps ) => {
    return (
        <ul>
            {linksData.map((link) => (
                <Link rel="norefferer" target="__blank" href={link.href} key={link.id}>
                    {link.title}
                </Link>
            ))}
        </ul>
    )
}