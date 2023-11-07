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
  Housing: Housing[]; // 如果有 Housing 数组，请确保定义它的类型
}
