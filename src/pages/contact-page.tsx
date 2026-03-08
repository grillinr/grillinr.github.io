import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { MotionSection } from "@/components/motion/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";
import { SubsectionHeader } from "@/components/sections/subsection-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactPage() {
  return (
    <>
      <MotionSection className="page-section pb-4 fade-in">
        <SectionHeader
          title="Contact"
          description="Have a project, internship, or collaboration in mind? I am always happy to chat and learn what you are building."
        />
      </MotionSection>

      <MotionSection className="page-section pt-0">
        <div className="grid gap-4 md:grid-cols-[1.25fr_1fr]">
          <Card className="h-full">
            <SubsectionHeader
              title="How to reach me"
              description="Send me a text, email, or connect on LinkedIn."
            />

            <div className="space-y-4 text-[var(--fg-main)]">
              <p className="m-0 flex items-start gap-2 text-sm text-[var(--fg-dim)]">
                <Mail className="mt-0.5 size-4 shrink-0 text-[var(--yellow)]" />
                <a className="link-accent" href="mailto:me@nathangrilliot.com">
                  me@nathangrilliot.com
                </a>
              </p>
              <p className="m-0 flex items-start gap-2 text-sm text-[var(--fg-dim)]">
                <Phone className="mt-0.5 size-4 shrink-0 text-[var(--yellow)]" />
                <a className="link-accent" href="tel:+1-513-831-3237">
                  (513) 831-3237
                </a>
              </p>
              <p className="m-0 flex items-start gap-2 text-sm text-[var(--fg-dim)]">
                <FaLinkedin className="mt-0.5 size-4 shrink-0 text-[var(--yellow)]" />
                <a
                  className="link-accent"
                  href="https://linkedin.com/in/nathan-grilliot"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
              <p className="m-0 flex items-start gap-2 text-sm text-[var(--fg-dim)]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--yellow)]" />
                <a
                  className="link-accent"
                  href="https://www.google.com/maps/place/Cincinnati,+OH/@39.1361197,-84.8706172,10z/data=!4m15!1m8!3m7!1s0x884051b1de3821f9:0x69fb7e8be4c09317!2sCincinnati,+OH!3b1!8m2!3d39.1031182!4d-84.5120196!16zL20vMDFzbm0!3m5!1s0x884051b1de3821f9:0x69fb7e8be4c09317!8m2!3d39.1031182!4d-84.5120196!16zL20vMDFzbm0?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                >
                  Cincinnati, Ohio
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:me@nathangrilliot.com?subject=Let's%20connect">
                  Start an email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume">
                  View resume
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </MotionSection>
    </>
  );
}
