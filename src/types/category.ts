import { Product } from "./product";

export interface Category {
    id: number;
    title_en: string;
    title_ar: string;
    title_fr: string;
    parent_id: number | null;
    created_at: string | null;
    updated_at: string | null;
    sub_categories?: Category[];
    products?: Product[];
}
