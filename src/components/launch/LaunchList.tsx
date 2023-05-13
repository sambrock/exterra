export const LaunchList = (props: React.PropsWithChildren) => {
  return (
    <div className="w-full h-full border-l border-white/5 bg-black/40 p-2 backdrop-blur-lg">
      <ul className="space-y-2">{props.children}</ul>
    </div>
  );
};
