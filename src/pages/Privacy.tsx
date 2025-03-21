import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Privacy Policy
            </h1>
            <Button 
              onClick={() => navigate('/')} 
              className="self-start flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-foreground transition-all duration-300"
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Button>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">General</h2>
            <p>
              At my personal website, accessible from https://www.maxritter.net, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Max Ritter and how he uses it. If you have additional questions or require more information about my Privacy Policy, do not hesitate to contact me.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Log Files</h2>
            <p>
              Max Ritter follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Privacy Policies</h2>
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Max Ritter. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Max Ritter, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Max Ritter has no access to or control over these cookies that are used by third-party advertisers.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Third Party Privacy Policies</h2>
            <p>
              Max Ritter's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Max Ritter does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Max Ritter. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Consent</h2>
            <p>
              By using my website, you hereby consent to my Privacy Policy and agree to its <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Privacy;
