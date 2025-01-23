import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "What does the app do exactly?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.s",
  },
  {
    title: "Who is this for?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.s",
  },
  {
    title: "How will this help me?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.s",
  },
  {
    title:
      "What's the difference between the lifetime access and the subscription?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.s",
  },
];

export function AccordionFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => {
        return (
          <AccordionItem value={`item-${index + 1}`}>
            <AccordionTrigger className="text-xl font-semibold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
