import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto mt-20 grid grid-rows-1 sm:grid-rows-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-4 p-6 bg-gray-500 rounded-xl shadow">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
