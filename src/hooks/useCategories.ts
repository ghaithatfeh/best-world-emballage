import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { supabase } from "@/integrations/supabase/client";
import { Category } from "@/types/category";

export const useCategories = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchCategories = async () => {
		setLoading(true);
		setError(null);
		
		try {
			const categoriesResult = await supabase
				.from("categories")
				.select("*, sub_categories:categories(*)")
				.is("parent_id", null);

			if (categoriesResult.error) {
				throw new Error(categoriesResult.error.message);
			}

			const data = categoriesResult.data || [];
			setCategories(data);
		} catch (err) {
			const error = err instanceof Error ? err : new Error("Failed to fetch categories");
			setError(error);
			toast.error("Failed to fetch categories");
			console.error("Categories error:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return {
		categories,
		loading,
		error,
		refetch: fetchCategories,
	};
};

