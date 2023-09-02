export interface AuthData {
  id_card_number: string;
  password: string;
}

export interface UserData {
  id_card_number: string;
}

export interface validationsData {
  job_category_id: string;
  society_id: string;
  validator_id: string;
  job_position: string;
  reason_accepted: string;
  validator_notes: string;
  category?: category;
  status?: string;
  work_experience: string;
}

export interface category {
  id: number;
  job_category: string;
}
