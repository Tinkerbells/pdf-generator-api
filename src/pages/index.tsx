import { Page1, Page2, Page3 } from "@/components/pdf-pages";
import { getData } from "@/services";
import { RequestData } from "@/types/globals";

export default function HomePage(data: RequestData) {
  return (
    <>
      <Page1 />
      <Page2 name={data.patient_info.name} />
      <Page3 />
    </>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const data = await getData(ctx.query.id);
  return { props: data as RequestData };
};
