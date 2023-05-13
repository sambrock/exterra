export default async function LaunchPanel({ params }: { params: { id: string } }) {
  return <h1 className="absolute left-2 top-2 z-[99999] block bg-red-500">Launch details: {params.id}</h1>;
}
