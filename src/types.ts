export type CaseStatus = 'active' | 'completed' | 'appeal' | 'bankruptcy' | 'enforcement';

export type CaseStage = 'first_instance' | 'appeal' | 'cassation' | 'supervision';

export interface CourtDocument {
  id: string;
  type: string;
  date: string;
  title: string;
  hasFile: boolean;
}

export interface CaseEvent {
  id: string;
  date: string;
  title: string;
  description?: string;
  isNew: boolean;
}

export interface ArbitrationCase {
  id: string;
  caseNumber: string;
  court: string;
  judge: string;
  plaintiff: string;
  defendant: string;
  status: CaseStatus;
  stage: CaseStage;
  dateFiled: string;
  lastUpdate: string;
  summary: string;
  amount: string;
  documents: CourtDocument[];
  events: CaseEvent[];
  isFavorite: boolean;
  hasNewDocuments: boolean;
  url: string;
}

export interface Notification {
  id: string;
  caseId: string;
  caseNumber: string;
  message: string;
  date: string;
  read: boolean;
  type: 'document' | 'hearing' | 'decision' | 'status';
}

export interface FilterState {
  search: string;
  status: CaseStatus | 'all';
  stage: CaseStage | 'all';
  hasNew: boolean;
  favorites: boolean;
}
