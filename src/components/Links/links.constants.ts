export interface LinkData {
  id: number
  title: string
  href: string
}

export type LinksDataProps = {
  linksData: LinkData[]
}

export const linksData = [
  {
    id: 1,
    title: 'LinkedIn',
    href: 'http://LinkedIn.com/in/logan-bready',
  },
  {
    id: 2,
    title: 'GitHub',
    href: 'https://github.com/LoganBready',
  },
  {
    id: 3,
    title: 'Resume',
    href: 'https://docs.google.com/document/d/1Nr90JkWdUvSvC_sVgazSfdcN-kjtjFacb4iXU-Ev_SY/edit?usp=sharing',
  },
]
