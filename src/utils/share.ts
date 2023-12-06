// 客戶資料
export interface Customer {
  id: string;
  Name: string;
  ContactAddress: string;
  CustomerID: string;
  CustomerSource: string;
  ServiceItem: string;
  Telephone: string;
  Mobile: string;
  Email: string;
}

// 居住成員
export interface Housing {
  Sequence: string;
  Sex: string;
  Age: string;
  SpecialDemand: string;
  Remark: string;
}

// 客戶資料內容頁
export interface ClientDetailsSuccessData {
  UUID: string;
  CustomerID: string;
  Name: string;
  ServiceItem: string;
  Telephone: string;
  Mobile: string;
  Email: string;
  ContactAddress: string;
  CustomerSource: string;
  FirstContactDate: string;
  Contactor: string;
  UpdateDate: string;
  Updater: string;
  Housing: Housing[];
}

// 案件資料
export interface CaseApiResponse {
  success: ProjectData;
}

export interface ProjectData {
  UUID: string;
  ProjectInfo: ProjectInfo;
  ProjectCategory: ProjectCategory;
  ProjectStatus: ProjectStatus;
  ProjectFeedback: ProjectFeedback;
  ProjectItem: any[];
}

export interface ProjectInfo {
  ImagePath: string;
  ProjectID: string;
  Category: string;
  ProjectName: string;
  ObjectAddress: string;
  Status: string;
  Stage: string;
  Progress: string;
  PIC: string;
  PICTel: string;
  ProjectCustomerID: string | null;
}

export interface ProjectCategory {
  Category: string;
  ProjectID: string;
  HaveProjectConnectDesignID: boolean;
  ProjectDesignID: string;
}

export interface ProjectStatus {
  EstStartDate: string;
  EstEndDate: string;
  Status: string;
  Progress: string;
  Stage: string;
  PIC: string;
  ObjectAddress: string;
}

export interface ProjectFeedback {
  CustomerSatisfaction: number;
  Feedback: string;
}
