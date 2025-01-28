import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "What does the app do exactly?",
    content: (
      <p>
        LateControl helps you break the cycle of staying up late and waking up
        in a hurry or not getting anything done the next day by blocking
        distracting websites at bedtime and encouraging you to achieve daily
        tasks that gets you closer to your future goals.
        <br />
        <br />
        The app also ensures you stay productive and accountable with features
        like AI recommended tasks based on your goals, future goals tracking,
        and a supportive discord community.
      </p>
    ),
  },
  {
    title: "Who is this for?",
    content: (
      <p>
        This app is for you if you're a workaholic, a student, a parent wanting
        to control your kid's PC usage, or just someone who stays up late
        browsing on their computer.
      </p>
    ),
  },
  {
    title: "How will this help me?",
    content: (
      <p>
        By sleeping early and getting your goals done, you’re not just getting
        enough rest, you’re setting yourself up for long-term success.
        <br />
        <br />
        LateControl simplifies habit tracking, blocks distractions, and helps
        you manage your time effectively by showing future goals and the tasks
        related to achieving them. No complex systems or steep learning curves
        just a clear, simple way to achieve your dream self.
      </p>
    ),
  },
  {
    title:
      "What's the difference between the subscription and the lifetime access?",
    content: <p></p>,
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
            <AccordionContent className="text-lg text-light_paragraph dark:text-dark_paragraph">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
