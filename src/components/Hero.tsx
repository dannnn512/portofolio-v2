const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines py-12 md:py-0">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 z-10">
        <div className="text-center space-y-8 md:space-y-10">
          {/* Glowing title */}
          <h1 className="text-6xl md:text-8xl font-bold glow-primary animate-glow-pulse">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              ZIDDAN ARYASATYA N
            </span>
          </h1>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-xl" />
            <h2 className="relative text-2xl md:text-4xl font-light tracking-wider text-primary">
              {'<'} SOFTWARE ENGINEER {' />'}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Sewing a Dream with Technology for the Future
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
