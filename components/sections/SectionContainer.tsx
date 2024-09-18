interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className }: Props) => {
  return (
    <section className={`flex flex-col gap-10 lg:flex-row ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
