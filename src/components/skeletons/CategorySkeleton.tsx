import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export const CategorySkeleton = () => (
	<div className="space-y-4">
		<Skeleton className="h-6 w-full" />
		<Separator />
		{[...Array(4)].map((_, i) => (
			<div key={i} className="space-y-3">
				<Skeleton className="h-5 w-3/4" />
				<div className="pl-4 space-y-2">
					<Skeleton className="h-4 w-2/3" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			</div>
		))}
	</div>
);

