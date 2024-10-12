import React from "react";

export default function WorkPage() {
  return (
    <div>
      <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Work</h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Here&apos;s a collection of my projects and contributions over time.
            Each project represents a unique challenge and a story of
            problem-solving.
          </p>
          <hr className="my-6 border-neutral-800" />

          {/* The SEO Event */}
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            The SEO Event
          </h2>
          <p className="text-neutral-400 text-sm">
            A hub for job postings, workshops, and insightful blogs designed for
            SEO enthusiasts.
          </p>
          <ul>
            <li>
              📋 Job Board: Tailored listings with flexible plans for
              recruiters.
            </li>
            <li>
              🎫 Conference Management: Effortless ticketing for workshops and
              events.
            </li>
            <li>
              📝 Educational Blog: Stay updated with the latest SEO trends and
              tips.
            </li>
            {/* achievements */}
            <li>
              🏆 Successfully launched our inaugural conference with 160+
              attendees.
            </li>
            <li>
              💼 Implemented a dual-tier job posting system: Silver and Platinum
              plans.
            </li>
            <li>📈 Growing community of SEO professionals and recruiters.</li>
          </ul>
          <p>
            {/* final note */}
            The SEO Event has quickly become a go-to platform for SEO
            professionals, offering valuable resources, networking
            opportunities, and career growth. Our successful launch and growing
            user base demonstrate the industry&apos;s need for such a
            comprehensive platform. We&apos;re excited about the future and
            continued expansion of our services. Explore more at:{" "}
            <a
              href="https://www.theseoevent.com/"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              theseoevent.com
            </a>
          </p>

          <hr className="my-6 border-neutral-800" />
        </div>
      </section>
    </div>
  );
}
