import { Download } from "lucide-react";
import { MotionSection } from "@/components/motion/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";

const resumeFileName = "Grilliot_Nathan_Resume_Fall2025.pdf";
const resumePdfPath = `${import.meta.env.BASE_URL}${resumeFileName}`;

export function ResumePage() {
  return (
    <>
      <MotionSection className="page-section pb-2 fade-in">
        <SectionHeader
          title="Resume"
          description="View or download my current resume."
        />

        <div className="mt-2">
          <Button variant="outline" asChild>
            <a href={resumePdfPath} target="_blank" rel="noreferrer">
              Download PDF <Download className="size-4" />
            </a>
          </Button>
        </div>
      </MotionSection>

      <MotionSection className="page-section pt-0">
        <div className="surface p-2 md:p-3">
          <iframe
            title="Nathan Grilliot Resume"
            src={resumePdfPath}
            className="h-[95vh] min-h-[500px] w-full rounded-md border border-[var(--nav-border)] bg-[var(--bg-soft)]"
          />
        </div>
      </MotionSection>
    </>
  );
}
