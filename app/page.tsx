import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight mb-8">
        Mahmudul Hasan
      </h1>

      <p className="text-neutral-300 leading-relaxed mb-4">
        I’m a software developer based in Dhaka, Bangladesh. Currently building
        things at{" "}
        <a
          href="https://rabfy.com"
          target="_blank"
          className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300"
        >
          Rabfy
        </a>
        , and shipping code on the internet since 2022.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-4">
        I enjoy designing systems, breaking problems apart, and slowly turning
        ideas into real products.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-4">
        Outside of coding, I’m usually listening to music, staying indoors, and
        minding my own business.
      </p>

      <p className="text-neutral-300 leading-relaxed mb-8">
        You can find me on{" "}
        <a
          href="https://github.com/mahmudulmr19"
          target="_blank"
          className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300"
        >
          github
        </a>
        ,{" "}
        <a
          href="https://twitter.com/mahmudulmr19"
          target="_blank"
          className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300"
        >
          twitter
        </a>
        , or{" "}
        <a
          href="https://www.linkedin.com/in/mahmudulmr19"
          target="_blank"
          className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300"
        >
          linkedin
        </a>
        .{" "}
        <Link
          href="/work"
          className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300"
        >
          See what I’ve been working on
        </Link>
        .
      </p>
    </div>
  );
}
