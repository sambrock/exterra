'use client';

import { CheckCircleOutlined, ClockCircleOutlined, MinusCircleOutlined, RocketOutlined } from '@ant-design/icons';
import type { Launch } from '@/__generated__/graphql';

const Divider = () => {
  return <span className="h-px w-6 rounded bg-white/50"></span>;
};

export const LaunchStatus = ({ status }: { status: Launch['status'] }) => {
  if (status?.id === 2 || status?.id === 8) {
    return (
      <div className="flex items-center gap-1 text-sm text-white/50">
        <ClockCircleOutlined />
        <span className="text-xs font-medium uppercase text-white/50">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 1) {
    return (
      <div className="flex items-center gap-1 text-sm text-white/50">
        <RocketOutlined className="text-status-go" />
        <span className="text-xs font-medium uppercase text-status-go">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 5) {
    return (
      <div className="flex items-center gap-1 text-sm text-white/50">
        <RocketOutlined className="text-status-hold" />
        <span className="text-xs font-medium uppercase text-status-hold">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 6) {
    return (
      <div className="flex items-center gap-1 text-sm text-white/50">
        <RocketOutlined />
        <Divider />
        <RocketOutlined className="rotate-45 text-status-in-flight" />
        <span className="text-xs font-medium uppercase text-status-in-flight">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 3) {
    return (
      <div className="flex items-center gap-1 text-sm text-white/50">
        <RocketOutlined />
        <Divider />
        <CheckCircleOutlined className="text-status-success" />
        <span className="text-xs font-medium uppercase text-status-success">{status?.abbrev}</span>
      </div>
    );
  }

  if (status?.id === 4 || status?.id === 7) {
    return (
      <div className="flex items-center gap-1 text-sm text-white/50">
        <RocketOutlined />
        <Divider />
        <MinusCircleOutlined className="text-status-failure" />
        <span className="text-xs font-medium uppercase text-status-failure">{status?.abbrev}</span>
      </div>
    );
  }

  return null;
};
