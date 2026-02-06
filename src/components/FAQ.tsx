"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { businessData } from "@/data/businessData";
import { cn } from "@/lib/utils";

export default function FAQ() {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Everything you need to know about epoxy flooring.
            </p>
          </div>

          {/* Accordion */}
          <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
            {businessData.faqs.map((faq, i) => (
              <AccordionPrimitive.Item
                key={i}
                value={`faq-${i}`}
                className="card-elevated overflow-hidden"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex items-center justify-between w-full text-left px-5 py-4 sm:px-6 sm:py-5",
                      "text-sm sm:text-base font-display font-semibold",
                      "hover:text-accent transition-colors",
                      "touch-manipulation",
                      "group"
                    )}
                  >
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-5 pb-4 sm:px-6 sm:pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
}
