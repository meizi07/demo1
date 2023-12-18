export interface ProjectInfo {
  ProjectID: string;
  RecordDate: string;
  Recorder: string;
}

export interface AllHousingData extends ProjectInfo {
  ProjectName: string;
  ProjectCategory: string;
}

export interface MeasuringData {
  FileName: string;
  FileImage: string;
  Description: string;
}

export interface EditHousingData {
  HousingInfo: {
    ProjectInfo: ProjectInfo;
    HousingDetail: AreaData[];
  };
  Measure: MeasuringData[];
}

export interface AreaData {
  Area: string;
  Description: string;
  DetailRecord?: AreaDetails[];
}

export interface AreaDetails {
  FileImage: string;
  Description: string;
}
