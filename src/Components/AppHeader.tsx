type AppHeaderProps = {
  children: any;
};

export default function AppHeader({ children }: AppHeaderProps) {
  return (
    <div className="flex w-full justify-between leading-none">
      <h1 className="text-2xl font-bold tracking-[0.5em] text-white md:text-4xl">
        TODO
      </h1>
      {children}{' '}
    </div>
  );
}
