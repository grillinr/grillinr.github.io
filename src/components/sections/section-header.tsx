type SectionHeaderProps = {
  kicker?: string
  title: string
  description?: string
}

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-6 md:mb-8">
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h1 className="page-title">{title}</h1>
      {description ? <p className="lead mt-4">{description}</p> : null}
    </header>
  )
}
