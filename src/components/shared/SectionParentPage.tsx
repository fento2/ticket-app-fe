interface SectionParentPageProps {
    children: React.ReactNode;
    className?: string
}
const SectionParentPage = ({ children, className }: SectionParentPageProps) => {
    return (
        <section className={`container mx-auto max-w-7xl px-8 ${className}`}>
            {children}
        </section>
    )
}
export default SectionParentPage