import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const { client } = require("@/app/lib/sanity");

async function getData(slug) {
  const query = `*[_type == 'post' && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({ params }) {
  const data = await getData(params.slug);
  const PortableTextComp = {
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            {/* <div> */}
            <p className="text-base font-medium leading-6 text-teal-500">
              {new Date(data._createdAt).toISOString().split("T")[0]}
            </p>
            {/* </div> */}
          </div>

          {/* <div> */}
          <h2 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
            {data.title}
          </h2>
          {/* </div> */}
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose prose-lg max-w-none pb-8 dark:prose-invert">
            <PortableText value={data.content} components={PortableTextComp} />
          </div>
        </div>
      </div>
    </div>
  );
}
