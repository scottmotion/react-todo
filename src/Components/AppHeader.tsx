type AppHeaderProps = {
  children: React.ReactNode;
};

export default function AppHeader({ children }: AppHeaderProps) {
  return (
    <div className="mb-2 flex w-full justify-between leading-none md:mb-5">
      <h1 className="text-2xl font-bold leading-10 tracking-[0.375em] text-white md:text-[2.5rem]">
        TODO
      </h1>
      {children}{' '}
    </div>
  );
}
