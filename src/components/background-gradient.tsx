import classnames from 'clsx'

export function BackgroundGradient({ className }: { className?: string }) {
  return (
    <div
      className={classnames(
        'bg-gradient-to-b from-primary to-primary',
        className
      )}
    />
  )
}
