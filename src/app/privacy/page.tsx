import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] px-6 pb-24 pt-36 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1100px]">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff1e1e]">
            Legal
          </p>

          <h1 className="mt-4 text-[clamp(3.5rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
            PRIVACY
            <span className="block text-white/35">POLICY.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
            This Privacy Policy explains how VizualZ Tech collects, uses and
            protects information submitted through this website.
          </p>

          <p className="mt-4 text-sm text-white/25">
            Last updated: August 2026
          </p>
        </div>

        <div className="mt-16 space-y-14 border-t border-white/[0.08] pt-12">
          <PolicySection title="1. Information We Collect">
            <p>
              When you contact VizualZ Tech through the website, we may collect
              information you provide directly, including:
            </p>

            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or business name</li>
              <li>Selected services</li>
              <li>Estimated budget</li>
              <li>Project timeline</li>
              <li>Project details or other information included in your message</li>
            </ul>

            <p>
              We may also process limited technical information, such as an IP
              address, for security, rate limiting and spam prevention.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>We use submitted information to:</p>

            <ul>
              <li>Review and respond to project inquiries</li>
              <li>Communicate with you about requested services</li>
              <li>Prepare project discussions, quotations or proposals</li>
              <li>Prevent spam, abuse and misuse of our contact form</li>
              <li>Maintain and improve the security of our website</li>
            </ul>

            <p>
              We do not sell your personal information.
            </p>
          </PolicySection>

          <PolicySection title="3. Email Communications">
            <p>
              When you submit a project inquiry, the website may send an email
              notification to VizualZ Tech and an automatic confirmation email
              to the email address you provided.
            </p>

            <p>
              We may then reply to your inquiry using the contact details you
              submitted.
            </p>
          </PolicySection>

          <PolicySection title="4. Service Providers">
            <p>
              We may use trusted third-party service providers to operate the
              website and process communications. These services may include
              website hosting, email delivery and security infrastructure.
            </p>

            <p>
              Information is shared only where necessary to provide those
              services.
            </p>
          </PolicySection>

          <PolicySection title="5. Data Security">
            <p>
              We take reasonable technical and organizational measures to
              protect information submitted through the website.
            </p>

            <p>
              The contact form includes server-side validation, rate limiting
              and spam-prevention measures. However, no internet transmission
              or storage system can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection title="6. Data Retention">
            <p>
              We retain inquiry information only for as long as reasonably
              necessary to respond to your request, manage potential or active
              projects, maintain business records, or meet applicable legal
              obligations.
            </p>
          </PolicySection>

          <PolicySection title="7. Your Choices">
            <p>
              You may contact us if you would like to ask about, correct or
              request deletion of personal information you have previously
              submitted, subject to any legal or legitimate business retention
              requirements.
            </p>
          </PolicySection>

          <PolicySection title="8. External Links">
            <p>
              This website may contain links to third-party websites or
              platforms. VizualZ Tech is not responsible for the privacy
              practices or content of external websites.
            </p>
          </PolicySection>

          <PolicySection title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy as the website, services or
              legal requirements change. Updates will be published on this
              page with a revised last-updated date.
            </p>
          </PolicySection>

          <PolicySection title="10. Contact">
            <p>
              If you have questions about this Privacy Policy or information
              submitted through this website, you can contact VizualZ Tech at:
            </p>

            <a
              href="mailto:hello@vizualztech.com"
              className="inline-block font-semibold text-[#ff1e1e] transition-colors hover:text-[#ff4a4a]"
            >
              hello@vizualztech.com
            </a>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 border-b border-white/[0.07] pb-14 md:grid-cols-[0.38fr_0.62fr] md:gap-10">
      <h2 className="text-xl font-semibold tracking-[-0.03em] text-white/80 md:text-2xl">
        {title}
      </h2>

      <div className="space-y-5 text-sm leading-7 text-white/45 md:text-base md:leading-8 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-[#ff1e1e]">
        {children}
      </div>
    </section>
  );
}