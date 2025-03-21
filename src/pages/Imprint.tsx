import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHomeButton from "@/components/BackToHomeButton";
import { pageVariants } from "@/utils/animations";

const Imprint = () => {
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
      <BackToHomeButton />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Imprint
            </h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Legal Disclosure</h2>
            <p>
              Information in accordance with Section 5 TMG:
              <br />
              <strong>Maximilian Ritter</strong>
              <br />
              Max Ritter - IT Freelancer
              <br />
              Schöngeisinger Str. 62
              <br />
              82256 Fürstenfeldbruck
              <br />
              Bavaria, Germany
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">Contact Information</h3>
            <p>
              <strong>E-Mail</strong>: mail@maxritter.net
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">VAT Number</h3>
            <p>
              VAT No. according to §27 Value Added Tax Act:
              <br />
              <strong>DE341567246</strong>
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">Professional Liability Insurance</h3>
            <p>
              VHV Allgemeine Versicherung AG
              <br />
              VHV-Platz 1
              <br />
              30177 Hannover
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">Disclaimer</h3>
            <p>
              <strong>Accountability for content</strong>
              <br />
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
              <br /><br />
              <strong>Accountability for links</strong>
              <br />
              Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
              <br /><br />
              <strong>Copyright</strong>
              <br />
              Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Imprint;
