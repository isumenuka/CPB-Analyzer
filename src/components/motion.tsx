// Simple motion components for animations
const motion = {
  div: ({ children, initial, animate, transition, className }: any) => {
    const style = {
      opacity: animate?.opacity ?? 1,
      transform: `translateY(${animate?.y ?? 0}px)`,
      transition: `all ${transition?.duration ?? 0.3}s ease-out`,
    };

    return (
      <div 
        className={className} 
        style={style}
      >
        {children}
      </div>
    );
  }
}

export { motion };