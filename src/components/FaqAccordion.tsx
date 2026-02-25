import type { FaqItem } from "@/content/services";

function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h4 className="font-heading text-xl uppercase tracking-wide text-dark">
            {item.question}
          </h4>

          {item.answer && (
            <p className="text-gray-700 leading-relaxed text-base">{parseMarkdown(item.answer)}</p>
          )}

          {item.bulletPoints && item.bulletPoints.length > 0 && (
            <ul className="space-y-2 list-none">
              {item.bulletPoints.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2.5" />
                  <span className="text-gray-700 leading-relaxed text-base">{parseMarkdown(point)}</span>
                </li>
              ))}
            </ul>
          )}

          {item.bulletItems && item.bulletItems.length > 0 && (
            <ul className="space-y-2 list-none">
              {item.bulletItems.map((bi, bIndex) => (
                <li key={bIndex}>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2.5" />
                    <span className="text-gray-700 leading-relaxed text-base">{parseMarkdown(bi.text)}</span>
                  </div>
                  {bi.subPoints && bi.subPoints.length > 0 && (
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      {bi.subPoints.map((sub, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-2.5" />
                          <span className="text-gray-700 leading-relaxed text-base">{parseMarkdown(sub)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

          {item.footerNote && (
            <p className="text-sm text-gray-500 leading-relaxed italic">{parseMarkdown(item.footerNote)}</p>
          )}

          {item.buttonText && item.buttonLink && (
            <div className="mt-2">
              <a
                href={item.buttonLink}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading text-sm uppercase tracking-wide py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {item.buttonText}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
