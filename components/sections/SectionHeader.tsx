interface Props {
  children: React.ReactNode;
  id?: string;
}

const SectionHeader = ({ children, id }: Props) => {
  return (
    <h2 className="uppercase text-2xl" id={id}>
      {children}
    </h2>
  );
};

export default SectionHeader;
