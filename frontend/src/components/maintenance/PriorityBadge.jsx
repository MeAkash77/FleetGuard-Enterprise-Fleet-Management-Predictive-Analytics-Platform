import { memo } from 'react';
import { MAINTENANCE_PRIORITY_META } from '../../utils/maintenance';

export const PriorityBadge = memo(function PriorityBadge({ priority, size = 'sm' }) {
  const meta = MAINTENANCE_PRIORITY_META[priority] || {
    label: priority || 'Unknown',
    color: 'var(--color-text-muted)',
    bg: 'var(--color-surface-hover)',
  };
  const fontSize = size === 'sm' ? 10 : 11;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '2px 8px',
        borderRadius: 4,
        background: meta.bg,
        color: meta.color,
        fontSize,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        lineHeight: 1.4,
      }}
    >
      {meta.label}
    </span>
  );
});
