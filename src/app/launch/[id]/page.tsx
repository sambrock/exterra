export default async function LaunchPage({ params }: { params: { id: string } }) {
  return <h1 className="block absolute left-2 top-2 bg-red-500 z-[99999]">Launch details: {params.id}</h1>;
}
