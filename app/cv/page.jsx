"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaDownload, FaRobot } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import CVDocument from "@/components/cv-document";

export default function CVPage() {
  const [selectedVariant, setSelectedVariant] = useState("data-science");
  const [isGenerating, setIsGenerating] = useState(false);
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `cv-${selectedVariant}`,
  });

  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">CV Generator</h1>
          <p className="text-muted-foreground">
            Create a custom CV tailored to specific job applications
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaRobot className="text-primary" />
              <span>AI-Generated CV</span>
            </CardTitle>
            <CardDescription>
              Generate a custom CV based on your portfolio content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Select CV Type:</label>
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md bg-background"
                >
                  <option value="data-science">Data Science</option>
                  <option value="technical-program-manager">
                    Technical Program Manager
                  </option>
                  <option value="full-stack">Full Stack Developer</option>
                  <option value="founder">Founder/Entrepreneur</option>
                </select>
              </div>

              {/* Preview of the CV */}
              <div className="mt-6 border rounded-md p-4 max-h-[500px] overflow-auto">
                <div ref={componentRef}>
                  <CVDocument variant={selectedVariant} />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button onClick={handlePrint}>
              <FaDownload className="mr-2" />
              Download PDF
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
