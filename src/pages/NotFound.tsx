import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found (404) | Max Ritter</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="The page you requested could not be found. Return to Max Ritter's home page or browse Work and Skills." />
        <link rel="canonical" href={`https://www.maxritter.net${location.pathname}`} />
      </Helmet>
      <Header />
      <main className="flex-grow flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            The page you're looking for doesn't exist.
          </p>
          <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-primary underline hover:no-underline">
              Home
            </Link>
            <Link to="/work" className="text-primary underline hover:no-underline">
              Work
            </Link>
            <Link to="/skills" className="text-primary underline hover:no-underline">
              Skills
            </Link>
            <Link to="/imprint" className="text-primary underline hover:no-underline">
              Imprint
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
