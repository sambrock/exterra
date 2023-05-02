import type { Launch } from '@/__generated__/graphql';

export const LaunchMarkerRadial = ({ status }: { status: Launch['status'] }) => {
  if (status?.id === 1) {
    return (
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="circle-pulse-delay-2 h-8 w-8 rounded-full border border-white/10"
            style={{
              background: 'radial-gradient(circle, hsla(0, 0%, 100%, 0) 0%, hsla(42, 100%, 45%, .4) 100%)',
            }}
          ></div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="circle-pulse-delay-1 h-6 w-6 rounded-full border border-white/10"
            style={{
              background: 'radial-gradient(circle, hsla(0, 0%, 100%, 0) 0%, hsla(42, 100%, 45%, .4) 100%)',
            }}
          ></div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div
            className="circle-pulse h-4 w-4 rounded-full border border-white/10"
            style={{
              background: 'radial-gradient(circle, hsla(0, 0%, 100%, 0) 0%, hsla(42, 100%, 45%, .4) 100%)',
            }}
          ></div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 rounded-full border border-black/20 bg-status-go"></div>
        </div>
      </div>
    );
  }

  if (status?.id === 2 || status?.id === 8) {
    return (
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="circle-pulse-delay-1 h-6 w-6 rounded-full border border-white/10"
            style={{
              background: 'radial-gradient(circle, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 45%, .4) 100%)',
            }}
          ></div>
      </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div
            className="circle-pulse h-4 w-4 rounded-full border border-white/10"
            style={{
              background: 'radial-gradient(circle, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 45%, .4) 100%)',
            }}
          ></div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 rounded-full border border-black/20 bg-white/50"></div>
        </div>
      </div>
    );
  }

  return null;
};
