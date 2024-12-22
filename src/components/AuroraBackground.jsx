import { cn } from "../utils/cn";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 min-h-screen w-full overflow-hidden bg-slate-950",
        className
      )}
    >
      <div className="relative z-10 min-h-screen">{children}</div>
      <div className="fixed inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {showRadialGradient && (
        <>
          <div className="fixed top-0 z-0 h-[50vh] w-full rotate-180 animate-aurora opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500 blur-[100px]" />
          </div>
          <div className="fixed bottom-0 z-0 h-[50vh] w-full animate-aurora opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500 blur-[100px]" />
          </div>
        </>
      )}

      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:opacity-20" />
    </div>
  );
};