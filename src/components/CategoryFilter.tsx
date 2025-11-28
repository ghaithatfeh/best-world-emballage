import { useTranslations } from "next-intl";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Category } from "@/types/category";
import { CategorySkeleton } from "@/components/skeletons/CategorySkeleton";

interface CategoryFilterProps {
	categories: Category[];
	loading: boolean;
	selectedCategory: Category | null;
	onCategoryChange: (category: Category | null) => void;
	locale: "en" | "ar" | "fr";
}

export const CategoryFilter = ({
	categories,
	loading,
	selectedCategory,
	onCategoryChange,
	locale,
}: CategoryFilterProps) => {
	const t = useTranslations();

	return (
		<aside className="lg:col-span-1">
			<div className="">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-[#333333] text-xl font-semibold">
						{t("Categories")}
					</h3>
				</div>

				{loading || categories.length === 0 ? (
					<CategorySkeleton />
				) : (
					<>
						{/* All Categories Option */}
						<label className="flex items-center gap-3 cursor-pointer group mb-3">
							<div className="relative flex items-center">
								<input
									type="radio"
									name="category"
									checked={!selectedCategory}
									onChange={() => onCategoryChange(null)}
									className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
								/>
							</div>
							<span
								className={`text-base ${
									!selectedCategory
										? "text-[#DC2626] font-semibold"
										: "text-[#6B7280]"
								} group-hover:text-[#DC2626] transition-colors`}
							>
								{t("All Products")}
							</span>
						</label>

						<Separator />

						{/* Accordion for Main Categories */}
						<Accordion
							type="multiple"
							className="w-full"
							defaultValue={categories.map((cat) => `category-${cat.id}`)}
						>
							{categories.map((mainCategory) => (
								<AccordionItem
									key={mainCategory.id}
									value={`category-${mainCategory.id}`}
									className="border-b border-gray-200"
								>
									<AccordionTrigger className="text-[#333333] hover:text-[#DC2626] hover:no-underline py-3">
										<span className="text-base font-medium">
											{mainCategory[`title_${locale}`]}
										</span>
									</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col gap-3 pl-2">
											{/* All option for this main category */}
											<label className="flex items-center gap-3 cursor-pointer group">
												<div className="relative flex items-center">
													<input
														type="radio"
														name="category"
														checked={selectedCategory?.id === mainCategory.id}
														onChange={() => onCategoryChange(mainCategory)}
														className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
													/>
												</div>
												<span
													className={`text-base ${
														selectedCategory?.id === mainCategory.id
															? "text-[#DC2626] font-semibold"
															: "text-[#6B7280]"
													} group-hover:text-[#DC2626] transition-colors`}
												>
													{t("All")}
												</span>
											</label>

											{/* Subcategories */}
											{mainCategory.sub_categories?.map(
												(subCategory: Category) => (
													<label
														key={subCategory.id}
														className="flex items-center gap-3 cursor-pointer group"
													>
														<div className="relative flex items-center">
															<input
																type="radio"
																name="category"
																value={subCategory.id}
																checked={
																	selectedCategory?.id === subCategory.id
																}
																onChange={() => onCategoryChange(subCategory)}
																className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
															/>
														</div>
														<span
															className={`text-base ${
																selectedCategory?.id === subCategory.id
																	? "text-[#DC2626] font-semibold"
																	: "text-[#6B7280]"
															} group-hover:text-[#DC2626] transition-colors`}
														>
															{subCategory[`title_${locale}`]}
														</span>
													</label>
												)
											)}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</>
				)}
			</div>
		</aside>
	);
};

