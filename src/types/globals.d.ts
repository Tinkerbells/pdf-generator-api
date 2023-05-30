declare interface RequestData {
  patient_info: PatientInfo;
  main_disease: string;
  main_risk: string;
  microbiota_age: number;
  healthy_index: number;
  all_main_risk: AllMainRisk[];
  special_bacter: SpecialBacter[];
  patogenes: Patogenes;
  probiotics: Probiotic[];
  bacteria_problems: BacteriaProblem[];
  vitamin_back: VitaminBack[];
  vitamin_speed: VitaminSpeed[];
  diet: Diet;
  green_list: GreenList[];
  yellow_list: YellowList[];
  red_list: RedList[];
  additives: Addi[];
  vitamins: Vitamin[];
  ALL_Bacteria: AllBacterum[];
  quest_disease_risk: QuestDiseaseRisk[];
  lifestyle_errors: LifestyleError[];
  menu: Menu[];
  main_risk_health_text: string;
  index_text: string;
  age_difference_text: string;
  super_patogens_text_1: string;
  super_patogens_text_2: string;
  norm_patogens_text: string;
  special_bacteria_text: string;
  vitamin_bacteria_text: string;
}

export interface PatientInfo {
  name: string;
  age: number;
  bmi: string;
  allergies: string;
  address: string;
  biosample_type: string;
  collection_date: string;
  analysis_type: string;
  report_date: string;
  track: string;
  kilocalories: number;
}

export interface AllMainRisk {
  desease_name: string;
  d_risk: string;
}

export interface SpecialBacter {
  name: string;
  effect: string;
  norm: Norm;
  patient_quantity: number;
  treatment: string[];
}

export interface Norm {
  upper: number;
  lower: number;
}

export interface Patogenes {
  super_patogen: SuperPatogen[];
  norm_patogen: NormPatogen[];
}

export interface SuperPatogen {
  name: string;
  effect: string;
  patient_quantity: number;
  treatment: string[];
}

export interface NormPatogen {
  name: string;
  effect: string;
  patient_quantity: number;
  treatment: any[];
}

export interface Probiotic {
  name: string;
  effect: string;
  norm: Norm2;
  patient_quantity: number;
  treatment: string[];
}

export interface Norm2 {
  lower: number;
}

export interface BacteriaProblem {
  name: string;
  amount: number;
  norm: Norm3;
  treatment: string[];
}

export interface Norm3 {
  lower: number;
  upper: number;
}

export interface VitaminBack {
  name: string;
  vitamin: string;
  norm: Norm4;
  patient_quantity: number;
  treatment: string[];
}

export interface Norm4 {
  upper: number;
  lower: number;
}

export interface VitaminSpeed {
  vitamin: string;
  bacteria: string[];
  current_speed: number;
  upper_speed: number;
  lower_speed: number;
}

export interface Diet {
  name: string;
  effect: string;
  desc: string;
  nutrition: Nutrition;
  products: Product[];
}

export interface Nutrition {
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
}

export interface Product {
  category: string;
  prod: string[];
}

export interface GreenList {
  category: string;
  prod: Prod[];
}

export interface Prod {
  name: string;
  bact_proof: string[];
  add_proof: string[];
  diet_proof: string[];
}

export interface YellowList {
  category: string;
  prod: Prod2[];
}

export interface Prod2 {
  name: string;
}

export interface RedList {
  category: string;
  prod: Prod3[];
}

export interface Prod3 {
  name: string;
}

export interface Addi {
  category: string;
  additives: Addi2[];
}

export interface Addi2 {
  name?: string;
  bact_proof?: string[];
  component_category?: string;
  category_additives?: CategoryAddi[];
}

export interface CategoryAddi {
  name: string;
  bact_proof: string[];
}

export interface Vitamin {
  vitamin: string;
  bact_proof: string[];
  dose: string;
}

export interface AllBacterum {
  taxon: string;
  list_bact: ListBact[];
}

export interface ListBact {
  name: string;
  percentage: number;
}

export interface QuestDiseaseRisk {
  name: string;
  risk: any;
}

export interface LifestyleError {
  correction: string;
}

export interface Menu {
  day: string;
  meals: Meal[];
}

export interface Meal {
  meal: string;
  dishes: Dish[];
}

export interface Dish {
  name: string;
  portion: Portion;
}

export interface Portion {
  weight: number;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
}
