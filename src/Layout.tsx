import Head from "next/head";
type LayoutProps = {
  children: React.ReactNode;
};

export default function LabsLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>LTAdvisors</title>
        <meta
          name="description"
          content="Building A Legacy of Innovation in the Global South."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>{children}</main>
    </>
  );
}
