'use client';

import { CheckCircleOutlined, ClockCircleOutlined, MinusCircleOutlined, RocketOutlined } from '@ant-design/icons';
import { clsx } from 'clsx';
import type { Launch } from '@/__generated__/graphql';

const Divider = () => {
  return <span className="h-px w-6 rounded bg-white/50"></span>;
};

type LaunchStatusProps = { status: Launch['status'] } & React.ComponentProps<'div'>;

export const LaunchStatus = ({ status, ...props }: LaunchStatusProps) => {
  if (status?.id === 2 || status?.id === 8) {
    return (
      <div {...props} className={clsx('flex items-center gap-1 text-sm text-white/50', props.className)}>
        <ClockCircleOutlined className="text-white/50" />
        <span className="uppercase text-white/50">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 1) {
    return (
      <div {...props} className={clsx('flex items-center gap-1 text-sm text-white/50', props.className)}>
        <RocketOutlined className="text-status-go" />
        <span className="uppercase text-status-go">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 5) {
    return (
      <div {...props} className={clsx('flex items-center gap-1 text-sm text-white/50', props.className)}>
        <RocketOutlined className="text-status-hold" />
        <span className="uppercase text-status-hold">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 6) {
    return (
      <div {...props} className={clsx('flex items-center gap-1 text-sm text-white/50', props.className)}>
        <RocketOutlined />
        <Divider />
        <RocketOutlined className="rotate-45 text-status-in-flight" />
        <span className="uppercase text-status-in-flight">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 3) {
    return (
      <div {...props} className={clsx('flex items-center gap-1 text-sm text-white/50', props.className)}>
        <RocketOutlined />
        <Divider />
        <CheckCircleOutlined className="text-status-success" />
        <span className="uppercase text-status-success">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 4 || status?.id === 7) {
    return (
      <div {...props} className={clsx('flex items-center gap-1 text-sm text-white/50', props.className)}>
        <RocketOutlined />
        <Divider />
        <MinusCircleOutlined className="text-status-failure" />
        <span className="uppercase text-status-failure">{status?.abbrev}</span>
      </div>
    );
  }

  return null;
};
