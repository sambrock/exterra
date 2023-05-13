export default async function LaunchPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
