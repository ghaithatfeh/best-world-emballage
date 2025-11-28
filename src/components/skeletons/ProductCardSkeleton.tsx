import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => (
	<div className="bg-white rounded-lg overflow-hidden shadow-sm">
		<Skeleton className="h-48 w-full" />
		<div className="p-4 space-y-3">
			<Skeleton className="h-4 w-20" />
			<Skeleton className="h-5 w-full" />
			<div className="flex gap-2">
				<Skeleton className="h-6 w-6 rounded-full" />
				<Skeleton className="h-6 w-6 rounded-full" />
				<Skeleton className="h-6 w-6 rounded-full" />
			</div>
		</div>
	</div>
);

