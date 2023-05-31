import { Page1, Page2, Page3 } from "@/components/pdf-pages";
import { mock } from "@/mock/data";
import { getData } from "@/services";
import { RequestData } from "@/types/globals";

export default function HomePage() {
  const data = mock;
  return (
    <>
      <Page1 />
      <Page2 name={data.patient_info.name} />
      <Page3 />
    </>
  );
}

// export const getServerSideProps = async (ctx: any) => {
//   const data = await getData(ctx.query.id);
//   return { props: data as RequestData };
// };
