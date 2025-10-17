interface DivParentPageProps {
    children: React.ReactNode;
    className?: string
}
const DivParentPage = ({ children, className }: DivParentPageProps) => {
    return (
        <div className={`container mx-auto max-w-7xl px-8 ${className}`}>
            {children}
        </div>
    )
}
export default DivParentPage