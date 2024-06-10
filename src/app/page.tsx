import {Table} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-3xl font-bold mb-6">People table</h1>
      <Table />
    </div>
  );
}
