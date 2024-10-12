import { Badge } from "./components/badge";

export default function Page() {
  return (
    <div>
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          Hey, I am Mahmudul!
        </h1>

        <p className="prose prose-neutral dark:prose-invert">
          {`I'm Mahmudul, a full-stack developer from Rangpur, Bangladesh. I have over 1.5 years of experience in web development, specializing in `}
          <Badge href="https://react.dev" target="_blank">
            React
          </Badge>
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

      {/* Skills Section */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Skills</h2>
        <ul className="list-disc list-inside prose prose-neutral dark:prose-invert">
          <li>HTML & CSS</li>
          <li>JavaScript & TypeScript</li>
          <li>React & Next.js</li>
          <li>Node.js</li>
          <li>Database Management (Prisma, Firebase)</li>
          <li>TailwindCSS</li>
        </ul>
      </section>

      {/* Interests Section */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Interests</h2>
        <p className="prose prose-neutral dark:prose-invert">
          {`In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and designing creative web experiences. I also love engaging with the tech community to learn and share insights!`}
        </p>
      </section>

      {/* Connect Section */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Connect with Me
        </h2>
        <p className="prose prose-neutral dark:prose-invert mb-4">
          {`I'm always open to new opportunities and collaborations. Feel free to reach out!`}
        </p>
        <ul className="flex items-center gap-x-2">
          <li>
            <Badge href="https://github.com/mahmudulmr19" target="_blank">
              GitHub
            </Badge>
          </li>
          <li>
            <Badge
              href="https://www.linkedin.com/in/mahmudulmr19"
              target="_blank"
            >
              LinkedIn
            </Badge>
          </li>
          <li>
            <Badge href="https://twitter.com/mahmudulmr19" target="_blank">
              Twitter
            </Badge>
          </li>
        </ul>
      </section>
    </div>
  );
}
