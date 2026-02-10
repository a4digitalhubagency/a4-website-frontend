import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted px-4">
            <div className="text-center max-w-md">
                <h1 className="mb-4 text-5xl sm:text-6xl md:text-7xl font-bold">404</h1>
                <p className="mb-6 text-lg sm:text-xl md:text-2xl text-muted-foreground">
                    Oops! Page not found
                </p>
                <Link 
                    to="/" 
                    className="inline-block text-primary underline text-lg sm:text-xl hover:text-primary/90 transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
