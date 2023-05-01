export const LaunchList = (props: React.PropsWithChildren) => {
  return (
    <div className="h-[97vh] w-full overflow-y-scroll rounded-xl border border-white/5 bg-black/40 p-2 backdrop-blur-lg">
      <ul className="space-y-2">{props.children}</ul>
    </div>
  );
};
