import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      onClick={() => navigate('/')} 
      className="fixed top-24 right-4 z-50 flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-foreground transition-all duration-300"
    >
      <Home size={18} />
      <span>Back to Home</span>
    </Button>
  );
};

export default BackToHomeButton; 