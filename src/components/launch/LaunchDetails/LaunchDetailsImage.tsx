import { clsx } from 'clsx';

type Props = { src: string; alt: string } & React.ComponentProps<'div'>;

export const LaunchDetailsImage = (props: Props) => {
  return (
    <div
      {...props}
      className={clsx('flex min-h-[500px] justify-center overflow-clip rounded-lg bg-black/20', props.className)}
    >
      <img src={props.src} alt={props.alt} className="max-h-[500px] object-cover" />
    </div>
  );
};
