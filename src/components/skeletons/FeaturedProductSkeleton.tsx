import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedProductSkeleton = () => (
	<div className="bg-white rounded-lg overflow-hidden shadow-sm">
		<Skeleton className="h-64 w-full" />
		<div className="p-6 space-y-4">
			<Skeleton className="h-4 w-24" />
			<Skeleton className="h-6 w-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-4 w-2/3" />
				<Skeleton className="h-4 w-1/2" />
			</div>
			<div className="flex gap-2">
				<Skeleton className="h-6 w-6 rounded-full" />
				<Skeleton className="h-6 w-6 rounded-full" />
				<Skeleton className="h-6 w-6 rounded-full" />
			</div>
		</div>
	</div>
);

