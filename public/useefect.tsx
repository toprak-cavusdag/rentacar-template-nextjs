const logosRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: logosRef.current?.querySelectorAll('.logo-animated'),
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    easing: 'easeOutQuad',
                    delay: anime.stagger(200),
                });
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1, // Elementin %10 görünür olması durumunda animasyonu başlat
    });

    if (logosRef.current) {
        observer.observe(logosRef.current);
    }

    return () => {
        if (logosRef.current) {
            observer.unobserve(logosRef.current);
        }
    };
}, []);