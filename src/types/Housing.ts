export interface AllHousingData {
  ProjectID: string;
  ProjectName: string;
  ProjectCategory: string;
  RecorderDate: string;
  Recorder: string;
}

export interface ProjectInfo {
  ProjectID: string;
  RecordDate: string;
  Recorder: string;
}

export interface HousingDetail {
  Area: string;
  Description: string;
  DetailRecord: {
    FileImage: string;
    Description: string;
  };
}

export interface MeasuringData {
  FileName: string;
  FileImage: string;
  Description: string;
}

export interface EditHousingData {
  HousingInfo: {
    ProjectInfo: ProjectInfo;
    HousingDetail: HousingDetail[];
  };
  Measure: MeasuringData[];
}

// "HousingInfo": {
//   "ProjectInfo": {
//       "ProjectID": "ProjectID",
//       "RecordDate": "RecordDate",
//       "Recorder": "Recorder"
//   },
//   "HousingDetail": [
//       {
//           "Area": "Area",
//           "Description": "Description",
//           "DetailRecord": {
//               "FileImage": "FileImage",
//               "Description": "Description"
//           }
//       },
//       {
//           "Area": "Area",
//           "Description": "Description",
//           "DetailRecord": {
//               "FileImage": "FileImage",
//               "Description": "Description"
//           }
//       }
//   ]
// },
// "measure": [
//   {
//       "FileName": "FileName",
//       "FilePath": "FilePath",
//       "Description": "Description"
//   },
//   {
//       "FileName": "FileName",
//       "FileImage": "FileImage",
//       "Description": "Description"
//   }
// ]
