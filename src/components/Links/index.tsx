import Link from "next/link"
import { LinksDataProps } from "./links.constants"
import styles from './Links.module.scss';

export const Links = ({ linksData }: LinksDataProps ) => {
    return (
        <ul className={styles.list}>
            {linksData.map((link) => (
                <Link rel="norefferer" target="__blank" href={link.href} key={link.id} className={styles.listItems}>
                    {link.title}
                </Link>
            ))}
        </ul>
    )
}