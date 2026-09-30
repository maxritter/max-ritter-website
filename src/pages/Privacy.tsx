import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageVariants } from "@/utils/animations";

const Privacy = () => (
  <motion.div className="min-h-screen flex flex-col" initial="initial" animate="in" exit="out" variants={pageVariants}>
    <SEO
      title="Privacy Policy | Max Ritter"
      description="How maxritter.net uses Netlify and Vercel hosting, cookie-free Umami and Ahrefs analytics, and information you send by email."
      pagePath="privacy"
    />
    <Header />
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4">
          <h2 className="text-2xl font-bold mb-4">Who runs this website</h2>
          <p>
            Max Ritter is responsible for this personal portfolio at www.maxritter.net.
            Contact me at <a href="mailto:mail@maxritter.net">mail@maxritter.net</a> with questions
            about the website or your data. My contact details are also available in the <a href="/imprint">imprint</a>.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Hosting and server requests</h2>
          <p>
            Netlify delivers www.maxritter.net, and this website also has a deployment on Vercel.
            When you visit, your browser sends technical
            information needed to deliver the page, including your IP address, the requested URL,
            and browser information. The hosting provider may process request logs to operate,
            secure, and troubleshoot its service. Details are available in
            the <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">Netlify privacy notice</a> and
            the <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel privacy notice</a>.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Website analytics</h2>
          <p>
            I use Umami Cloud and Ahrefs Web Analytics to understand which pages are visited and
            improve this website. Their scripts load from cloud.umami.is and analytics.ahrefs.com.
            Analytics can include the page visited, referring website, browser, operating system,
            device type, and approximate country. This website does not configure session replay,
            advertising pixels, or tracking of information you send by email.
          </p>
          <p>
            Both providers describe their web analytics as cookie-free. Umami describes its collected
            analytics as anonymized and does not track visitors across websites. Read
            the <a href="https://docs.umami.is/docs/faq" target="_blank" rel="noopener noreferrer">Umami documentation</a> and
            the <a href="https://ahrefs.com/web-analytics" target="_blank" rel="noopener noreferrer">Ahrefs Web Analytics information</a> for
            details. You can block these analytics scripts using your browser settings or a content blocker.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Email contact</h2>
          <p>
            Contact links open your email application. If you email me, I receive the information
            you choose to send, such as your email address, name, and message. I use it to respond
            to your enquiry and handle any resulting correspondence. There is no account registration
            or contact form on this website.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">External websites</h2>
          <p>
            Links to LinkedIn, GitHub, my blog, CV, and product websites take you to separate services.
            Those services have their own privacy practices. Their content is not embedded in this website.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Questions and changes</h2>
          <p>
            Contact <a href="mailto:mail@maxritter.net">mail@maxritter.net</a> with privacy questions
            or requests concerning information you have sent me. I update this page when the website's
            services change. See the <a href="/terms">Terms of Service</a> for website usage information.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </motion.div>
);

export default Privacy;
