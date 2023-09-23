type AppHeaderProps = {
  children: React.ReactNode;
};

export default function AppHeader({ children }: AppHeaderProps) {
  return (
    <div className="mb-3 flex w-full justify-between leading-none">
      <h1 className="text-2xl font-bold tracking-[0.5em] text-white md:text-4xl">
        TODO
      </h1>
      {children}{' '}
    </div>
  );
}
