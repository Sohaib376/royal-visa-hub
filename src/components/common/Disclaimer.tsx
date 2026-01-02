import { AlertCircle } from "lucide-react";

interface DisclaimerProps {
  text?: string;
}

export function Disclaimer({
  text = "Service fees exclude embassy, consulate, or government charges. Visa approval and processing time are subject to the relevant authorities. Purple Royal Tourism provides documentation assistance only and does not guarantee visa approval.",
}: DisclaimerProps) {
  return (
    <div className="bg-secondary/50 border border-border rounded-lg p-4 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <p className="text-sm text-muted-foreground italic">
        {text}
      </p>
    </div>
  );
}
