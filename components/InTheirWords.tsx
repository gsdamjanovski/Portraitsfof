import SectionLabel from "./ui/SectionLabel";

export default function InTheirWords() {
  return (
    <div className="flex h-full flex-col justify-center">
      <SectionLabel>In Their Words</SectionLabel>

      <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-charcoal/80">
        <p>
          Each portrait in this collection began as a conversation &mdash;
          sometimes over kitchen tables, sometimes over video calls, always
          grounded in the question:{" "}
          <strong className="text-charcoal">
            what does long-term policy failure actually feel like?
          </strong>
        </p>
        <p>
          The answers were rarely abstract. They were stories about waiting
          lists, about flooded homes, about classrooms without teachers and
          communities without infrastructure. They were about futures deferred.
        </p>
        <p>
          This project does not propose solutions. It proposes attention.
        </p>
      </div>

      <a
        href="#about"
        className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-medium text-copper transition-colors hover:text-copper/80"
      >
        About the project &rarr;
      </a>
    </div>
  );
}
