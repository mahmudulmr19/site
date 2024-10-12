import React from "react";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I am Mahmudul!
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        {`I'm Mahmudul, a full-stack developer from Rangpur, Bangladesh. I have over 1.5 years of experience in web development, specializing in `}

        <a
          href="https://react.dev"
          target="_blank"
          className="inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100"
        >
          React
        </a>

        {` and `}

        <a
          href="https://nextjs.org/"
          target="_blank"
          className="inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100"
        >
          Next.js
        </a>

        {`. I enjoy learning new technologies and currently exploring Go and Python to expand my skills.`}
      </p>

      <p className="prose prose-neutral dark:prose-invert mt-4">
        {`I believe in crafting unique web experiences and focusing on good developer practices. Let's connect to share ideas or collaborate on exciting projects!`}
      </p>
    </section>
  );
}
