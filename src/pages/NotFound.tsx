
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { TransitionWrapper } from "@/components/shared/TransitionWrapper";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <TransitionWrapper animation="scale" className="glass rounded-xl p-10 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-amber-100 text-amber-800 p-3 rounded-full">
            <AlertTriangleIcon size={48} />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-semibold">404</h1>
          <p className="text-xl text-muted-foreground">Page not found</p>
          <p className="text-muted-foreground mt-2">
            We couldn't find the page you were looking for.
          </p>
        </div>
        <Button asChild className="flex items-center gap-2">
          <Link to="/">
            <HomeIcon size={18} />
            Return to Dashboard
          </Link>
        </Button>
      </TransitionWrapper>
    </div>
  );
};

export default NotFound;
